const RegisterUser = require("../model/user");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const registerUser = await new RegisterUser(req.body);

  try {
    await registerUser.save();
    res.status(201).json({ message: "user registered successfully" });
  } catch (e) {
    res.status(400).send(e.message);
    throw e;
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //find the user by email
    const user = await RegisterUser.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user does not exist" });
    }
    //check is password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    //login if email and password matches
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { registerUser, loginUser };
