const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bookingSchema = new Schema(
  {
    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },
    guest: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["booked", "cancelled"],
      default: "booked",
    },
    checkIn: {
      type: Date,
      required: true,
    },
    CheckOut: {
      type: Date,
      required: true,
    },
    totalRent: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("Booking", bookingSchema);
