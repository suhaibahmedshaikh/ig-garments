import User from "../models/user-model.js";

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs");
  }

  const isUserExists = await User.findOne({ email });

  if (isUserExists) res.status(400).send("User already exists");

  const newUser = new User({ username, email, password });

  try {
    await newUser.save();
    res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

export { createUser };