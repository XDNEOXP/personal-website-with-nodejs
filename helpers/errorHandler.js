const handler404 = (req, res) => {
    res.status(404).render('404', {
        title: '404',
        error: 'Page not Found',
        returnLink: '/',
    })
}

const handlerServerError = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Somthing Went Wrong')
}

module.exports = {
    handler404,
    handlerServerError,
}
