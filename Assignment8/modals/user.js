import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "others"],
  },
  phone: {
    type: Number,
    required: false,
  },
  emailVerified: {
    type: Boolean,
    required: true,
    default: true,
  },

});

export default mongoose.model("authchatusers", UserSchema);