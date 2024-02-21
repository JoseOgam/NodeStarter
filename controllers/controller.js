const RegisterUser = require("../model/user");

const registerUser = async (req, res) => {
  const registerUser = await new RegisterUser(req.body);
  console.log(req.body);

  try {
    await registerUser.save();
    res.status(201).send(res.body);
  } catch (e) {
    res.status(400).send(e.message);
    throw e;
  }
};

module.exports = { registerUser };
