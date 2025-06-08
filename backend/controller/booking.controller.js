const Booking = require("../model/booking.model");
const User = require("../model/user.model");
const Listing = require("../model/listing.model");
const createBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut, totalRent } = req.body;

    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    if (
      new Date(checkIn) < new Date() ||
      new Date(checkOut) <= new Date(checkIn)
    ) {
      return res
        .status(400)
        .json({ message: "Invalid check-in or check-out date" });
    }
    if (listing.isBooked) {
      return res.status(400).json({ message: "Listing is already booked" });
    }
    const booking = await Booking.create({
      host: listing.host,
      listing: listing._id,
      guest: req.userId,
      checkIn,
      checkOut,
      totalRent,
    });

    // Update user's booking list
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $push: { booking: booking._id } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    listing.guest= req.userId;
    listing.isBooked = true;
    return res.status(201).json({
      message: "Booking created successfully",
      booking: booking,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in creating booking",
      error: error.message,
    });
  }
};
module.exports = { createBooking };
