const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db.js");
const authRouter = require("./routes/auth.routes.js");
const userRouter = require("./routes/user.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
connectDB();
dotenv.config();
PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true, // Allow cookies to be sent

    //this is needed when res.cookie is used in the backend
  })
);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("Welcome to the backend server");
});
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
