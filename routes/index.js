const express = require('express')
const homepageController = require('../controllers/homepageController')
const aboutController = require('../controllers/aboutController')
const contactController = require('../controllers/contactController')
const portfolioController = require('../controllers/portfolioController')
const projectController = require('../controllers/projectController')
const userController = require('../controllers/userController')
const searchController = require('../controllers/searchController')
const signupController = require('../controllers/signupController')
const loginController = require('../controllers/loginController')
const { body } = require('express-validator')

const router = express.Router()
// GET
router.get('/', homepageController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/portfolio', portfolioController)
router.get('/project/:id', projectController)
router.get('/user/:id', userController)
router.get('/search', searchController)
router.get('/signup', signupController.get)
router.get('/login', loginController.get)

// POST
router.post(
    '/signup',
    body('name').not().isEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }),
    signupController.post
)
router.post('/login', loginController.post)

module.exports = router
