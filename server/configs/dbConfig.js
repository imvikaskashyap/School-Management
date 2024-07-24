// src/configs/dbConfig.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbInstance = new Sequelize(process.env.DB_DBNAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

const dbConnect = async () => {
    try {
        await dbInstance.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = {
    dbInstance,
    dbConnect,
};
