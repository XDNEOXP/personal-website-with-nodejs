const passport = require('passport')

const get = (req, res) => {
    res.render('login', {
        title: 'Login',
        flash: req.flash(),
    })
}

const post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?f',
    failureFlash: true,
    session: true,
})

module.exports = {
    get,
    post,
}
