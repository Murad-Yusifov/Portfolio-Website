import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    skills: { type: [String], required: true }, // array
    experience: { type: String, required: true },
    experienceInfo: { type: Schema.Types.Mixed, required: true },
    projects: { type: Schema.Types.Mixed, required: true }
  },
  { timestamps: true }
  
);

const Form = mongoose.model("Form", userSchema);

export default Form;