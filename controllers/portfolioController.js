const Project = require('../model/Project')

const portfolioController = async (req, res) => {
    const offset = (Number(req.query.page) - 1) * 12 || 0
    const projects = await Project.findAll({
        limit: 12,
        offset,
        // ORDER BY WHAT YOU WANT
        // order: [['id', 'DESC']],
    })
    const counts = await Project.count()

    res.render('portfolio', {
        title: 'Portfolio',
        projects,
        counts,
    })
}

module.exports = portfolioController
