const { DataTypes } = require('sequelize');
const { dbInstance } = require('../configs/dbConfig');

const Post = dbInstance.define('Post', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: true
});

module.exports = {
    Post
};
