import UserDashboard from "@/sections/hub/UserDashboard";
import { fetchUserByEmail } from "@/lib/actions/user.actions";
import { currentUser, auth } from "@clerk/nextjs/server";
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

  if (!userDatabaseData) {
    redirect("/onboarding");
  } else {
    return (
      <div className="paddings overflow-hidden  text-white h-screen w-screen flex items-start justify-end">
        <div className="gradient-02 z-0" />
        <UserDashboard />
      </div>
    );
  }
}
