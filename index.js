const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()


app.get('/',(req,res)=>{
    res.end('hello')
})

app.listen(3000)