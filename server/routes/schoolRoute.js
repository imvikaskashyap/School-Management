const express = require("express")
const schoolRouter = express.Router()

const schoolsController = require("../controllers/school.controller")
const upload = require('../middlewares/uploadImage');

schoolRouter.get("/", schoolsController.getAll)
schoolRouter.post('/create', upload.single('image'), schoolsController.create);


module.exports = schoolRouter