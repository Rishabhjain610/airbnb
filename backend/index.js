const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const connectDB = require("./db/db.js");
const authRouter = require("./routes/auth.routes.js");
const userRouter = require("./routes/user.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const listingRouter = require("./routes/listing.routes.js");
const bookingRouter = require("./routes/booking.routes.js");
const app = express();
connectDB();

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
app.use('/api/listing',listingRouter)
app.use('/api/booking',bookingRouter)





app.get("/", (req, res) => {
  res.send("Welcome to the backend server");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
