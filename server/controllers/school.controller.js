const { School } = require("../models/School");
const { asyncHandler } = require("../utils/asyncHandler");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");


exports.addSchool = asyncHandler(async (req, res, next) => {
  try {
    const { name, address, city, state, contact, email_id } = req.body;
    let image = req.file ? req.file.path : null;

    if (!(name && address && city && state && contact && email_id)) {
      throw new ApiError(400, "All fields are compulsory");
    }

    if (!image) {
      throw new ApiError(400, "Image is required");
    }

    const existingSchool = await School.findOne({ where: { email_id } });
    if (existingSchool) {
      throw new ApiError(409, "A school with this email already exists");
    }

    const newSchool = await School.create({
      name,
      address,
      city,
      state,
      contact,
      email_id,
      image
    });

    res.status(201).json(new ApiResponse(201, newSchool, "School created successfully"));
  } catch (error) {
    console.error('Error creating school:', error.message, error.stack);
    next(new ApiError(500, "An unexpected error occurred"));
  }
});



exports.getAllSchools = asyncHandler(async (req, res, next) => {
  const schools = await School.findAll();
  res.status(200).json(new ApiResponse(200, schools, "Schools retrieved successfully"));
});
