const { validationResult } = require('express-validator')
const User = require('../model/User')

const get = (req, res) => {
    res.render('signup', {
        title: 'Signup',
        flash: [],
        errors: [],
    })
}

const post = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('signup', {
            title: 'Signup',
            flash: req.flash(),
            errors: errors.array(),
        })
        return
    }

    const existanceUser = await User.findOne({
        where: {
            email: req.body.email,
        },
    })

    if (existanceUser) {
        res.render('signup', {
            title: 'Signup',
            flash: [`${req.body.email} already exist`],
            errors: [],
        })
        return
    }

    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: await User.encryptPassword(req.body.password),
        age: 0,
    })
    res.render('signup', {
        title: 'Signup',
        flash: [],
        errors: [],
    })
}

module.exports = {
    get,
    post,
}
