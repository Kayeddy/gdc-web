// Clerk imports
import { SignIn } from "@clerk/nextjs";

export default async function Page() {
  return (
    <SignIn
      forceRedirectUrl="/hub/dashboard"
      appearance={{
        elements: {
          formButtonPrimary: {
            backgroundColor: "#25618B",
          },
          logoImage: {
            width: 120,
            height: 120,
          },
        },
      }}
    />
  );
}
