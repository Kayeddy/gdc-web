"use client";

// Types imports
import { Iuser } from "@/lib/types/user";

// Components imports
import ProfileTypeSelectionForm from "../forms/ProfileTypeSelectionForm";
import LeaderOnboardingForm from "../forms/LeaderOnboardingForm";
import MemberOnboardingForm from "../forms/MemberOnboardingForm";
import MentorOnboardingForm from "../forms/MentorOnboardingForm";

// React imports
import { useCallback, useEffect, useState } from "react";

// Framer motion imports
import { motion } from "framer-motion";

// Clerk imports
import { useSession } from "@clerk/nextjs";

// Actions imports
import { createUser } from "@/lib/actions/user.actions";
import { addUserToClub } from "@/lib/actions/club.actions";

//Hooks imports
import { useWindowSize } from "@/lib/hooks/useWindowSize";

// Utils imports
import {
  contentVariants,
  dynamicOnboardingFormHandlerVariants,
  dynamicProfileSelectionFormVariants,
} from "@/utils/motion";

/**
 * Component responsible for handling the onboarding process of different user profiles.
 * Manages form submissions for leader, member, and mentor profiles and adjusts UI based on screen size.
 *
 * @param {Iuser | any} userData User data for initializing forms or handling user-specific logic.
 */
export default function OnboardingFormHandler({
  userData,
}: {
  userData: Iuser | any;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProfileType, setSelectedProfileType] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const breakpoint = 1024; // Breakpoint for mobile vs desktop

  const { width } = useWindowSize();
  const { isLoaded: isUserSessionLoaded, session } = useSession();

  /**
   * Updates the selected profile type state.
   * This function is called to update the `selectedProfileType` state whenever the user selects a different profile type.
   * This selection can trigger changes in the displayed form and other UI elements related to the selected type.
   *
   * @param {string} profileType - The profile type selected by the user.
   */
  const handleProfileTypeChange = useCallback((profileType: string) => {
    setSelectedProfileType(profileType);
  }, []);

  /**
   * Submits the form data to the backend for the selected profile type.
   * This function handles the form submission process, including fetching the session token, calling the API to create or update the user data,
   * and conditionally adding the user to a club if they have selected a member profile type. It also manages the submission state to provide feedback in the UI.
   *
   * @param {Iuser} data - The data collected from the form which includes user-specific information.
   */
  const submitForm = useCallback(
    async (data: Iuser) => {
      if (!isUserSessionLoaded || !session) {
        console.log("Session not loaded, cannot submit.");
        return;
      }

      try {
        setIsSubmitting(true);
        const authToken = await session.getToken();
        await createUser({
          clerkUserId: session.user.id,
          clerkAuthToken: authToken,
          ...data,
          image: session.user.hasImage ? session.user.imageUrl : "",
        });

        if (data.profileType === "member") {
          await addUserToClub({
            clerkUserId: session.user.id,
            clerkAuthToken: authToken ?? "",
            university: data.university,
          });
        }
      } catch (error) {
        console.error("Failed to submit onboarding form:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [isUserSessionLoaded, session]
  );

  /**

Renders the appropriate onboarding form based on the selected profile type.
@param {string} profileType - The type of the profile selected by the user.
@param {Function} onSubmitHandler - Handler for form submission.
@param {boolean} isSubmitting - Flag indicating whether the form is currently being submitted.
@returns {React.ReactNode} - The corresponding form component for the selected profile type.
*/
  const renderOnboardingForm = (
    profileType: string,
    onSubmitHandler: (data: Iuser) => void,
    isSubmitting: boolean
  ): React.ReactNode => {
    const props = {
      onSubmitHandler: submitForm,
      onProfileTypeChange: handleProfileTypeChange,
      selectedProfileType: selectedProfileType,
      isSubmitting: isSubmitting,
    };
    switch (profileType) {
      case "leader":
        return <LeaderOnboardingForm {...props} />;
      case "member":
        return <MemberOnboardingForm {...props} />;
      case "mentor":
        return <MentorOnboardingForm {...props} />;
      default:
        return null; // Return null or a placeholder if no profile type is selected or if it's invalid
    }
  };

  /**
   * useEffect to manage dynamic adjustment of window width.
   * This effect handles window resize events to dynamically update the `windowWidth` state,
   * which can be used for responsive layout adjustments or other reactive behaviors dependent on the window size.
   */
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      variants={dynamicOnboardingFormHandlerVariants}
      initial="hidden"
      animate="show"
      className={`flex lg:flex-row flex-col items-center justify-center w-full h-screen  py-8 lg:py-0 rounded-md gap-10`}
    >
      <motion.div
        variants={dynamicProfileSelectionFormVariants({
          width: width,
          windowWidth: windowWidth,
          breakpoint: breakpoint,
        })}
        initial="unshrink"
        animate={selectedProfileType ? "shrink" : ""}
        transition={{ duration: 2 }}
        className={`h-full items-center flex ${
          selectedProfileType && "hidden lg:flex"
        }`}
      >
        <ProfileTypeSelectionForm
          userData={userData}
          onProfileTypeChange={handleProfileTypeChange}
          externallySelectedProfileType={selectedProfileType}
          isSubmitting={isSubmitting}
        />
      </motion.div>

      {selectedProfileType && (
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={selectedProfileType ? "visible" : "hidden"}
          className="w-full lg:w-auto"
        >
          {renderOnboardingForm(selectedProfileType, submitForm, isSubmitting)}
        </motion.div>
      )}
    </motion.div>
  );
}
