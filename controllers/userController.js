const Project = require('../model/Project')
const User = require('../model/User')

const userController = async (req, res) => {
    const user = await User.findByPk(Number(req.params.id))
    const projects = await Project.findAll({
        where: {
            user_id: Number(req.params.id),
        },
    })
    res.render('user', {
        title: user.name,
        user,
        projects,
    })
}

module.exports = userController
