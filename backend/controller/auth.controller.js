const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { genToken } = require("../utils/Token");
dotenv.config();
const signUp = async (req, res) => {
  try {
    // Add this to debug the incoming request
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({ message: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      const token = await genToken(newUser._id);
      res.cookie("token", token, {
        httpOnly: true, // httpOnly cookies are not accessible via JavaScript, which helps prevent XSS attacks.
        secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS in production
        sameSite: "strict", // SameSite attribute helps prevent CSRF attacks by controlling when cookies are sent with cross-site requests.
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      const userToSend = newUser.toObject();
      delete userToSend.password;
      return res.status(201).json({
        message: "User created successfully",
        userToSend,
      });
    }
  } catch (error) {
    console.log("Error in signup:", error.message);
    res.status(500).json({ message: "error in signup", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are manadorty" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    } else {
      const verifyPassword = await bcrypt.compare(password, user.password); // Fixed typo
      if (!verifyPassword) {
        return res.status(400).json({ message: "Invalid password" });
      } else {
        const token = await genToken(user._id);
        if (!token) {
          return res.status(500).json({ message: "Failed to generate token" });
        }
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        const userToSend =user.toObject();
        delete userToSend.password;
        return res.status(200).json({
          message: "Login successful",
          userToSend,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: `Login error: ${error.message}` });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout:", error.message);
    return res
      .status(500)
      .json({ message: "Error in logout", error: error.message });
  }
};

module.exports = { signUp, login, logout };
