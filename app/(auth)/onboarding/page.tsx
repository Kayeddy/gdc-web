// Components imports
import OnboardingFormHandler from "@/components/onboarding/OnboardingFormHandler";

// Actions imports
import { fetchUserByEmail } from "@/lib/actions/user.actions";

// Clerk imports
import { currentUser, auth } from "@clerk/nextjs/server";

// NextJS imports
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const clerkUserData = await currentUser();
  const { getToken } = auth();

  const clerkSessionToken = await getToken();
  const userDatabaseData = await fetchUserByEmail({
    clerkUserId: clerkUserData?.id,
    clerkAuthToken: clerkSessionToken,
    email: clerkUserData?.primaryEmailAddress?.emailAddress,
  });

  if (userDatabaseData) {
    redirect("/hub/dashboard");
  } else {
    return (
      <div className="paddings lg:p-0 overflow-hidden text-white h-screen w-screen flex items-center justify-center">
        <div className="gradient-02 z-0" />
        <OnboardingFormHandler userData={userDatabaseData} />
      </div>
    );
  }
}
