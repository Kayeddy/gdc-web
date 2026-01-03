// Constants imports
import { profileConfig } from "@/constants";

// mongoose imports
import { connectToDB } from "@/lib/mongoose";

/**
 * Ensures that the user is authorized to perform actions.
 * This function checks if the user's ID and authentication token are both provided,
 * throwing an error if either is missing to prevent unauthorized access.
 * It also ensures a connection to the database is established before proceeding.
 *
 * @param {string} clerkUserId - The user's ID as provided by Clerk.
 * @param {string} clerkAuthToken - The authentication token associated with the user's session.
 * @returns {Promise<void>} A promise that resolves if the user is authorized, or rejects with an error if not.
 * @throws {Error} If either the user ID or authentication token is missing.
 */
export async function ensureAuthorized(
  clerkUserId: string,
  clerkAuthToken: string
): Promise<void> {
  await connectToDB();
  if (!clerkUserId || !clerkAuthToken) {
    throw new Error("You don't have permission to access this information");
  }
}

/**
 * Extracts fields from data based on the specified user profile type.
 * @param {keyof ProfileConfig} profileType - The user's profile type.
 * @param {any} data - The full data object from which to extract.
 * @returns {any} The extracted data relevant to the specified profile.
 */
export function extractFieldsByProfileType(
  profileType: keyof typeof profileConfig,
  data: any
): any {
  const config = profileConfig[profileType];
  if (!config) {
    throw new Error("Invalid profile type");
  }

  return config.requiredFields.reduce(
    (obj: { [key: string]: any }, field: string) => {
      obj[field] =
        field === "socials"
          ? data[field].map(
              ({ provider, link }: { provider: string; link: string }) => ({
                provider,
                link,
              })
            )
          : data[field];
      return obj;
    },
    { profileType }
  );
}
