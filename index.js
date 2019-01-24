const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const userRouter = require('./routes/user')

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.end('hello')
})

app.listen(3000)