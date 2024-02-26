const aboutController = (req, res) => {
    res.render('about', { title: 'About', message: 'About Page' })
}

module.exports = aboutController
