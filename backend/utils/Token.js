const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const genToken = async (userId) => {
  try {
    const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return token;
  } catch (error) {
    console.log("Error in generating token:", error.message);
  }
};
const verifyToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.log("Error in verifying token:", error.message);
  }
};
module.exports = { genToken, verifyToken };
