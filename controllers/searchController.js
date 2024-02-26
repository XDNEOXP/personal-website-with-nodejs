const Project = require('../model/Project')
const { Op } = require('sequelize')

const searchController = async (req, res) => {
    const projects = await Project.findAll({
        where: {
            name: {
                [Op.like]: `%${req.query.q}%`,
            },
        },
    })
    res.render('search', {
        title: `Serach For ${req.query.q}`,
        projects,
    })
}

module.exports = searchController
