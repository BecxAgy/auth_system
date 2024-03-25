import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Por favor, insira um nome de usuário."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Vincule um e-mail a sua conta."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A senha é obrigatória."],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpire: Date,
  verifyToken: String,
  verifyTokenExpire: Date,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
