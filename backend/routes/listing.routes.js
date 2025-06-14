const express = require("express");
const { authCheck } = require("../middleware/auth.middleware");
const upload = require("../middleware/multer.middleware");
const {
  addListing,
  getListing,
  findListing,
  updateListing,
  deleteListing,
  ratingListing,
  search,
} = require("../controller/listing.controller");

const listingRouter = express.Router();
listingRouter.post(
  "/add",
  authCheck,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  addListing
);
listingRouter.get("/get", getListing);
listingRouter.get("/find/:id", authCheck, findListing);
listingRouter.put(
  "/update/:id",
  authCheck,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  updateListing
);
listingRouter.delete("/delete/:id", authCheck, deleteListing);
listingRouter.post("/rating/:id", authCheck, ratingListing);
listingRouter.get("/search", search); // Assuming search functionality is similar to getListing

module.exports = listingRouter;
