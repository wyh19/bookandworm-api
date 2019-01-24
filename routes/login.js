const Router = require('express').Router()
const User = require('../models').getModel('user')
const { md5Pwd } = require('../common/tool')
const _filter = { pwd: 0, __v: 0 }


Router.post('/login', (req, res) => {
    //暂时要求前端传的是明文
    const { name, pwd } = req.body
    
})