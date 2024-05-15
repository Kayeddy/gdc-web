"use server";

// Types imports
import { Iuser } from "./../types/user/index";

// Mongoose imports
import { FilterQuery, SortOrder } from "mongoose";

// Models imports
import User from "../models/user.model";

// NextJS imports
import { revalidatePath } from "next/cache";

// Utils imports
import { ensureAuthorized, extractFieldsByProfileType } from "@/utils/db";

/**
 * Authorization requirements for user-related actions.
 */
interface AuthRequirements {
  clerkUserId: string | undefined;
  clerkAuthToken: string | null;
}

/**
 * Parameters for fetching all users with optional sorting.
 */
interface FetchAllUsersParams extends AuthRequirements {
  sortBy?: { field: string; sortOrder: SortOrder };
}

/**
 * Parameters to fetch a single user by email.
 */
interface FetchUserByEmailParams extends AuthRequirements {
  email: string | undefined;
}

/**
 * Parameters for creating a new user.
 */
interface CreateUserParams extends AuthRequirements, Iuser {}

/**
 * Fetches all users from the database excluding the current user.
 * @param {FetchAllUsersParams} params - Parameters including authorization and sorting.
 * @returns {Promise<any[]>} A promise that resolves to an array of user documents.
 */
export async function fetchAllUsers({
  clerkUserId,
  clerkAuthToken,
  sortBy = { field: "name", sortOrder: 1 },
}: FetchAllUsersParams): Promise<any[]> {
  await ensureAuthorized(clerkUserId ?? "", clerkAuthToken ?? "");

  const query: FilterQuery<typeof User> = { userId: { $ne: clerkUserId } };
  const users = await User.find(query)
    .sort([[sortBy.field, sortBy.sortOrder]])
    .lean()
    .exec();
  return users;
}

/**
 * Fetches a single user by their email address.
 * @param {FetchUserByEmailParams} params - Parameters including authorization and email.
 * @returns {Promise<any>} A promise that resolves to the user document.
 */
export async function fetchUserByEmail({
  clerkUserId,
  clerkAuthToken,
  email,
}: FetchUserByEmailParams): Promise<any> {
  await ensureAuthorized(clerkUserId ?? "", clerkAuthToken ?? "");

  try {
    return await User.findOne({ email }).lean();
  } catch (error) {
    throw new Error(`Failed to fetch user by email. Error details: ${error}`);
  }
}

/**
 * Creates a new user in the database.
 * @param {CreateUserParams} params - User data and authorization.
 * @returns {Promise<void>}
 */
export async function createUser(params: CreateUserParams): Promise<void> {
  await ensureAuthorized(params.clerkUserId ?? "", params.clerkAuthToken ?? "");
  const profileData = extractFieldsByProfileType(params.profileType, params);

  try {
    await User.create({
      clerkId: params.clerkUserId,
      ...profileData,
      onboarded: true,
    });
    revalidatePath("/hub/dashboard");
  } catch (error) {
    console.error(`Error creating user: ${error}`);
    throw new Error(
      `Error while registering the user. Error details: ${error}`
    );
  }
}

// get user personal details (pending)
// get user academic details (pending)
// get user experience details (pending)
// get user preferences (pending)
