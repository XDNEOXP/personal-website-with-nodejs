const express = require('express')
const morgan = require('morgan')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

const routes = require('./routes')
const errorHandler = require('./helpers/errorHandler')
const app = express()
require('./helpers/passport')
const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(cookieParser())
app.use(
    session({
        secret: 'keyboard cat',
    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes)

app.use(errorHandler.handler404)
app.use(errorHandler.handlerServerError)

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})
