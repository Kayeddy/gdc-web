"use server";

import mongoose, { Schema } from "mongoose";
import { Iuser } from "../types/user";

const userSchema = new Schema({
  clerkId: { type: String, required: true },

  profileType: { type: String, required: true },

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  personalEmail: { type: String, required: true, unique: true },
  institutionalEmail: { type: String },
  phone: { type: String, required: true, unique: true },
  image: { type: String },
  country: { type: String },
  developedProjects: { type: String, default: "" },

  university: { type: String },
  career: { type: String },
  semester: { type: Number },

  socials: [
    {
      provider: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],

  workExperience: { type: String },
  leadershipExperience: { type: Boolean },
  mentoringExperience: { type: Boolean },

  preferredTechRole: { type: String },
  preferredParticipationArea: { type: String },
  preferredClub: { type: mongoose.Schema.Types.ObjectId, ref: "Club" },

  associatedEnterpriseName: { type: String },

  acceptsEmailUpdates: { type: Boolean, required: true },

  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
  },
  onboarded: {
    type: Boolean,
    default: false,
  },
});

userSchema.index({ clerkId: 1 }); // Index on 'userId' for quick user identification

if (mongoose.models && mongoose.models.User) {
  console.log("User model is already defined.");
} else {
  console.log("Defining User model.");
  mongoose.model<Iuser>("User", userSchema);
}

const User = mongoose.model<Iuser>("User");

export default User;
