const { Sequelize } = require('sequelize')

const db = new Sequelize('personal_website', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    db.authenticate()
    console.log('Successfully Connected')
} catch (error) {
    console.log(error)
}

module.exports = db
