const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    guest:{
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = model("Listing", listingSchema);
