"use server";

import mongoose from "mongoose";
import { Iclub } from "../types/club";

const clubSchema = new mongoose.Schema({
  name: { type: String },
  university: { type: String },
  leader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Club = mongoose.models.Club || mongoose.model<Iclub>("Club", clubSchema);

export default Club;
