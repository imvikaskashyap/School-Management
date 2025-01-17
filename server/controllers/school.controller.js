// schoolsController.js
const pool = require("../configs/dbConfig");
const { uploadOnCloudinary } = require("../utils/cloudinary"); 

const schoolsController = {
  getAll: async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM schools");
      res.json({
        status: "success",
        data: rows
      });
    } catch (error) {
      console.error(error);
      res.json({
        status: "error",
        message: "An unexpected error occurred while retrieving schools"
      });
    }
  },

  create: async (req, res) => {
    try {
      const { name, address, city, state, contact, email_id } = req.body;
      let imageUrl = null;

      if (!name || !address || !city || !state || !contact || !email_id) {
        return res.status(400).json({
          status: "error",
          message: "All fields are compulsory"
        });
      }

      const [existingSchoolRows] = await pool.query("SELECT * FROM schools WHERE email_id = ?", [email_id]);
      if (existingSchoolRows.length > 0) {
        return res.status(409).json({
          status: "error",
          message: "A school with this email already exists"
        });
      }

      if (req.file) {
        // Upload the image to Cloudinary
        imageUrl = await uploadOnCloudinary(req.file.path);
        if (!imageUrl) {
          return res.status(500).json({
            status: "error",
            message: "Failed to upload image"
          });
        }
      }

      const [result] = await pool.query(
        "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name, address, city, state, contact, email_id, imageUrl]
      );

      const [newSchool] = await pool.query("SELECT * FROM schools WHERE id = ?", [result.insertId]);

      res.status(201).json({
        status: "success",
        data: newSchool[0]
      });
    } catch (error) {
      console.error('Error creating school:', error.message, error.stack);
      res.status(500).json({
        status: "error",
        message: "An unexpected error occurred while creating the school"
      });
    }
  }
};

module.exports = schoolsController;
