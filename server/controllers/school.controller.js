const { School } = require('../models/School');
const path = require('path');
const fs = require('fs');

exports.addSchool = async (req, res) => {
    try {
        const { name, address, city, state, contact, email_id } = req.body;
        if (!(name && address && city && state && contact && email_id)) {
            return res.status(400).send('All fields are compulsory');
        }

        let imagePath = '';
        if (req.file) {
            imagePath = req.file.path;
        }

        const newSchool = await School.create({
            name,
            address,
            city,
            state,
            contact,
            email_id,
            image: imagePath
        });

        return res.status(201).send(newSchool);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

exports.getAllSchools = async (req, res) => {
    try {
        const schools = await School.findAll();
        return res.status(200).send(schools);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
