/**
 * Represents the structure of a user object within the system.
 * This interface encapsulates all necessary details about a user,
 * including both personal and professional information.
 */
export interface Iuser {
  clerkId: string | undefined; // Unique identifier for the user, provided by Clerk.

  profileType: string; // Type of profile the user holds (e.g., leader, member, mentor).

  firstName: string; // User's first name.
  lastName: string; // User's last name.
  personalEmail: string; // User's personal email address.
  institutionalEmail: string; // Email provided by the user's educational institution.
  phone: string; // User's telephone number.
  image: string; // URL to the user's profile image, provided by Clerk.
  country: string; // Country of residence.
  developedProjects: string; // Description of projects the user has worked on.

  university: string; // Name of the university the user attends.
  career: string; // Career path or major of the user.
  careerSpecification?: string; // Specific area within the user's career field, if applicable.
  semester: number | any; // Current or last completed semester (flexible typing).

  socials?: {
    provider: string; // Name of the social media platform.
    link: string; // URL to the user's social media profile.
  }[]; // Array of social media profiles.

  workExperience: string; // General description of work experience.
  leadershipExperience: string; // Details about any leadership roles held.
  mentoringExperience: string; // Details about mentoring experiences.

  preferredTechRole: string; // User's preferred technical role or position.
  preferredParticipationArea: string; // Area of interest within technology or organization.
  preferredClub: string; // Preferred club or group within the organization.

  associatedEnterpriseName: string; // Name of associated enterprise or company.
  specifiedAssociatedEnterpriseName: string; // Specific name within the associated enterprise, if any.

  acceptsEmailUpdates: string; // Indicates whether the user opts in to receive email updates.

  club: string; // Club or group the user is affiliated with within the organization.
  onboarded: boolean; // Flag indicating whether the user has completed the onboarding process.
}

/**
 * Parameters required to fetch all users from the system.
 * This interface is used primarily for administrative actions
 * that involve retrieving multiple user records.
 */
export interface getAllUsersActionParams {
  clerkId: string; // Unique identifier for the user performing the action.

  // Personal information
  firstName: string;
  lastName: string;
  personalEmail: string;
  institutionalEmail: string;
  phone: string;
  image: string;
  country: string;

  // Academic information
  university: string;
  career: string;
  semester: number;

  // Array of social media platform names
  socials: string[];

  // Experience details
  workExperienceTime: [number, number]; // Range of years in work experience.
  leadershipExperience: boolean; // Whether the user has leadership experience.
  knowledgeLevel: string; // Level of expertise or knowledge in their field.

  // Preferences
  preferredTechRole: string;
  preferredParticipationArea: string;

  // Enterprise association
  associatedEnterpriseName: string;

  // Subscription preferences
  acceptsEmailUpdates: boolean;

  club: string; // Club affiliation.
  onboarded: boolean; // Onboarding completion status.
}

/**
 * Configuration for extracting user profiles based on type.
 * This interface defines the fields required for each user profile type.
 */
export interface ProfileExtractionConfig {
  [key: string]: {
    requiredFields: string[]; // Array of strings specifying which fields are required for the profile.
  };
}
