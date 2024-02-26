const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Project = db.define(
    'projects',
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        link: {
            type: DataTypes.TEXT,
        },
        img: {
            type: DataTypes.TEXT,
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        },
        user_id: {
            type: DataTypes.NUMBER,
        },
    },
    { timestamps: false }
)

module.exports = Project
