const Router = require('express').Router()
const utiltty = require('utility')
const models = require('../models')

const User = models.getModel('user')
const _filter = { pwd: 0, __v: 0 }

/**
 * 获取列表
 */
Router.get('/list', (req, res) => {
    User.find({}, _filter, (err, doc) => {
        return res.json({ code: 0, data: doc })
    })
})


Router.post('/create', (req, res) => {
    const { name, pwd } = req.body
    User.findOne({ name }, (err, doc) => {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }
        const userModel = new User({name,pwd:md5Pwd(pwd)})
        userModel.save((err,doc)=>{
            if(err){
                return res.json({code:1,msg:'数据库出错了'})
            }
            return res.json({code:0,data:doc})
        })
    })
})



/**
 * md5加密
 * @param {String} pwd 
 * @returns {String} 加密后的密码
 * @private
 */
function md5Pwd(pwd){
    const salt = 'wyh_love_nodejs_2019_kjsanfkshfuabsiu_salt'
    return utiltty.md5(utiltty.md5(pwd+salt))
}

module.exports = Router