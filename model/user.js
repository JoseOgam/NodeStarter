const mongoose = require("mongoose");
require("../db/config");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
});

RegisterSchema.pre("save", async (next) => {
  const user = user;

  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10); //generate salt with complexity of 10 chae
  } catch (error) {
    return next(error);
  }
});

const RegisterUser = mongoose.model("RegisterUser", RegisterSchema);
module.exports = RegisterUser;
