const Project = require('../model/Project')
const User = require('../model/User')

const projectController = async (req, res) => {
    try {
        const project = await Project.findOne({
            where: {
                id: req.params.id,
            },
        })
        /* OR IF YOU WANT TO FIND THE PROJECT ONLY BY ID YOU CAN USE THIS
        
        let project = await Project.findByPk(req.params.id)
        */
        const user = await User.findByPk(project.user_id)
        const prevProject = await Project.findByPk(Number(req.params.id) - 1)
        const nextProject = await Project.findByPk(Number(req.params.id) + 1)

        res.render('project', {
            title: `Project ${project.name}`,
            project: project,
            user: user === null ? { name: 'Loading...' } : user,
            prevProjectEnabled: !!prevProject,
            nextProjectEnabled: !!nextProject,
        })
    } catch {
        res.render('404', {
            title: 'Project not Found',
            error: "Couldn't Find The Project",
            returnLink: '/portfolio',
        })
    }
}

module.exports = projectController
