const { addSchool, getAllSchools } = require('../controllers/school.controller');
const upload = require("../middlewares/uploadImage")

module.exports = (app) => {
    app.post('/v1/add-school', upload, addSchool);
    app.get('/v1/get-all-schools',  getAllSchools);
};
