const express = require("express");
const { createBooking ,cancelBooking} = require("../controller/booking.controller");
const { authCheck } = require("../middleware/auth.middleware");
const bookingRouter = express.Router();
bookingRouter.post("/create/:id",authCheck, createBooking);
bookingRouter.delete("/cancel/:id",authCheck, cancelBooking);
module.exports = bookingRouter;