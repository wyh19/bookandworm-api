const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const bookRouter = require('./routes/book')

const app = express()
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/book', bookRouter)


app.listen(3000)