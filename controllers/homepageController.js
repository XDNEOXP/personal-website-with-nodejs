const User = require('../model/User')

const homepageController = async (req, res) => {
    console.log('User: ', req.user)
    let users = await User.findAll()
    res.render('index', {
        title: 'Home',
        message: 'Mohsen Shahhoseiny',
        imgSrc: 'assets/img/profile.png',
        users,
    })
}

module.exports = homepageController
