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
    await booking.populate("host", "name email");
    // Update user's booking list
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $push: { booking: listing } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    listing.guest= req.userId;
    listing.isBooked = true;
    await listing.save();
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
const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    let listing=await Listing.findByIdAndUpdate(id,{isBooked:false});
    let user=await User.findByIdAndUpdate(listing.guest,{$pull:{booking:listing._id}},{new:true});
    if(!listing || !user) {
      return res.status(404).json({ message: "Listing or User not found" });
    }
    return res.status(200).json({
      message: "Booking canceled successfully",
      
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in canceling booking",
      error: error.message,
    });
    
  }
}

module.exports = { createBooking, cancelBooking };
