const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

const db = require('../configs/db')

const User = db.define(
    'users',
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
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.NUMBER,
        },
    },
    {
        timestamps: false,
    }
)

User.validPassword = (user, pwd) => {
    return bcrypt.compareSync(pwd, user.password)
}

User.encryptPassword = async (myPlaintextPassword) => {
    const saltRounds = 10
    const salt = await bcrypt.genSaltSync(saltRounds)
    const hash = await bcrypt.hashSync(myPlaintextPassword, salt)
    return hash
}

module.exports = User
