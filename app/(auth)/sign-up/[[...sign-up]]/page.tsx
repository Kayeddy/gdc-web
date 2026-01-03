"use client";

// Clerk imports
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      forceRedirectUrl="/onboarding"
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
