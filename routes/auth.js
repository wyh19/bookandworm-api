const Router = require('express').Router()
const User = require('../models').getModel('user')
const { md5Pwd } = require('../common/tool')
const _filter = { pwd: 0, __v: 0 }


Router.post('/login', (req, res) => {
    //暂时要求前端传的是明文
    const { name, pwd } = req.body
    User.findOne({ name, pwd:md5Pwd(pwd) }, _filter,(err,doc)=>{
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})

module.exports = Router
