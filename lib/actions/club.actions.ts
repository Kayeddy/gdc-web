"use server";

// Utils imports
import { ensureAuthorized } from "@/utils/db";

// Models imports
import Club from "../models/club.model";
import User from "../models/user.model";

interface AddMemberToClubParams {
  clubId?: string;
  university?: string;
  clerkUserId: string;
  clerkAuthToken: string;
}

/**
 * Creates initial club entries in the database. Each club is associated with a specific university.
 */
export async function createInitialClubs() {
  const universities = [
    {
      name: "GDC Universidad de Medellín",
      university: "Universidad de Medellín",
    },
    {
      name: "GDC Universidad de Antioquia",
      university: "Universidad de Antioquia",
    },
    { name: "GDC EAFIT", university: "EAFIT" },
    {
      name: "GDC Tecnológico Nacional de México Campus Zacatecas Norte",
      university: "Tecnológico Nacional de México Campus Zacatecas Norte",
    },
    {
      name: "GDC Universidad de Guadalajara",
      university: "Universidad de Guadalajara",
    },
  ];

  for (const uni of universities) {
    await Club.create({
      name: uni.name,
      university: uni.university,
      leader: null,
      mentors: [],
      members: [],
    });
  }
}

/**
 * Adds a user to a club either by club ID or the associated university name.
 * This function ensures the user is authorized before attempting to add them to a club.
 *
 * @param {AddMemberToClubParams} params - Parameters including the club ID or university, and user details for authorization.
 * @throws {Error} Throws an error if the club or member is not found.
 */
export async function addUserToClub(params: AddMemberToClubParams) {
  await ensureAuthorized(params.clerkUserId ?? "", params.clerkAuthToken ?? "");

  // Find the club either by ID or university name.
  const clubQuery = params.clubId
    ? { _id: params.clubId }
    : { university: params.university };
  const club = await Club.findOne(clubQuery);

  const member = await User.findOne({ clerkId: params.clerkUserId });
  if (!club || !member) {
    throw new Error("Club or member not found");
  }

  // Ensure the member is not already part of the club
  if (!club.members.includes(member._id)) {
    club.members.push(member._id);
    await club.save();
  } else {
    throw new Error("Member already exists in the club");
  }
}
