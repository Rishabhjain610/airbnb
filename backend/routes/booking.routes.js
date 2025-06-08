const express = require("express");
const { createBooking } = require("../controller/booking.controller");
const { authCheck } = require("../middleware/auth.middleware");
const bookingRouter = express.Router();
bookingRouter.post("/create/:id",authCheck, createBooking);
module.exports = bookingRouter;