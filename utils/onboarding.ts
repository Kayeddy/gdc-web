// File: utils/socialMediaUtils.ts

interface SocialLink {
  provider: string;
  link: string;
}

/**
 * Updates an array of social media links by adding a new link or updating an existing one.
 * This function searches for an existing entry with the same provider. If found, it updates
 * the link; otherwise, it adds a new entry.
 *
 * @param socialMediaLinks - Array of existing social media links.
 * @param provider - The social media platform provider.
 * @param link - The new or updated link for the social media platform.
 * @returns The updated array of social media links.
 */
export function updateSocialMediaLinks(
  socialMediaLinks: SocialLink[],
  provider: string,
  link: string
): SocialLink[] {
  const index = socialMediaLinks.findIndex(
    (item) => item.provider === provider
  );
  if (index > -1) {
    // Update existing link
    return [
      ...socialMediaLinks.slice(0, index),
      { provider, link },
      ...socialMediaLinks.slice(index + 1),
    ];
  } else {
    // Add new link
    return [...socialMediaLinks, { provider, link }];
  }
}
