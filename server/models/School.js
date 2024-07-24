const { DataTypes } = require('sequelize');
const { dbInstance } = require('../configs/dbConfig');

const School = dbInstance.define('school', {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    state: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    contact: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        required:false
    },
    email_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: false
});

module.exports = {
    School
};
