"use client";

// React imports
import React, { useState } from "react";

// NextUI imports
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";
import { CheckIcon } from "@radix-ui/react-icons";

interface CustomSocialMediaControllerProps {
  TriggerIcon: JSX.Element;
  socialMediaProvider: string;
  handleSocialMediaAddition?: (socialMediaLink: string) => void;
  isSubmitting: boolean;
}

/**
 * A custom controller component that allows users to add social media links.
 * It provides a UI to input a link and confirms the addition with a visual feedback.
 *
 * @param {CustomSocialMediaControllerProps} props - Component props.
 * @param {JSX.Element} props.TriggerIcon - The icon used for the popover trigger button.
 * @param {string} props.socialMediaProvider - The name of the social media provider (e.g., Facebook, Twitter).
 * @param {(socialMediaLink: string) => void} props.handleSocialMediaAddition - Optional function to handle the addition of a social media link.
 * @param {boolean} props.isSubmitting - If true, disables the trigger button to prevent interaction.
 * @returns {React.ReactElement} The rendered component.
 */
export default function CustomSocialMediaController({
  TriggerIcon,
  socialMediaProvider,
  handleSocialMediaAddition,
  isSubmitting,
}: CustomSocialMediaControllerProps) {
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [socialMediaAlreadyAdded, setSocialMediaAlreadyAdded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialMediaLink(e.target.value);
  };

  const handleSubmit = () => {
    if (handleSocialMediaAddition) {
      console.log("Added social media link");
      setSocialMediaAlreadyAdded(true);
      handleSocialMediaAddition(socialMediaLink);
      setIsOpen(false);
    }
  };

  return (
    <Popover
      placement="bottom"
      size="lg"
      className="w-full"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      isTriggerDisabled={isSubmitting}
    >
      <PopoverTrigger>
        <Button className="relative" aria-label="Add social media link">
          {TriggerIcon}
          {socialMediaAlreadyAdded && (
            <CheckIcon className="absolute top-1 right-1 w-4 h-4 rounded-full bg-success-100" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-4 py-2">
          <div className="text-small font-bold">
            Agrega la URL de tu {socialMediaProvider} abajo
          </div>
          <div className="flex flex-col gap-2 items-center mt-4">
            <Input
              type="text"
              className="w-full"
              value={socialMediaLink}
              onChange={handleInputChange}
              placeholder={`URL de tu perfil de ${socialMediaProvider}`}
            />
            <Button onClick={handleSubmit} aria-label="Save">
              <CheckIcon />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
