const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const bookRouter = require('./routes/book')

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/auth',authRouter)
app.use('/user',userRouter)
app.use('/book',bookRouter)


app.listen(3000)