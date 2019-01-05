let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.end('hello')
})

app.listen(3000)