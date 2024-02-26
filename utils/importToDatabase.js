const data = require('../public/projects.json')
const Project = require('../model/Project')

const importToDatabase = () => {
    data.forEach((project) => {
        Project.create({
            ...project,
            created_at: new Date(project.created).getTime(),
            updated_at: new Date(project.updated).getTime(),
        })
    })
}

importToDatabase()
