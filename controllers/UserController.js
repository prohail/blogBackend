const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    let { first_name, last_name, email, password, role, profile } = req.body;
    let user = await User.findOne({ email: email });

    if (!user) {
      await User.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        role: role,
        profile: profile,
      });

      res.json({
        success: true,
        message: "User created successfully!",
      });
    } else {
      res.json({
        success: false,
        message: "this user is already exists!",
      });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to create User" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    let users = await User.find({});

    res.json({
      success: true,
      message: "Users fetcehd successfully!",
      data: users,
    });
  } catch (error) {
    res.status(400).json({ error: "Failed to get Users" });
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.body.id, {
      ...req.body,
    });

    res.json({
      success: true,
      message: "User updated successfully!",
    });
  } catch (error) {
    res.status(400).json({ error: "Failed to update user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({
        success: true,
        message: "User deleted successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No such User!",
      });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to delete User" });
  }
};

const getUserByID = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (user) {
      res.json({
        success: true,
        message: "User fetcehd successfully!",
        data: user,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No such user",
      });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to get user" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserByID,
};
