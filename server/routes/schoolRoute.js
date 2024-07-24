const { addSchool, getAllSchools } = require('../controllers/school.controller');
const errorHandler = require('../middlewares/errorHandler');
const upload = require("../middlewares/uploadImage")

module.exports = (app) => {
    app.post('/api/v1/school/create',errorHandler, upload, addSchool);
    app.get('/api/v1/school', errorHandler, getAllSchools);
};
