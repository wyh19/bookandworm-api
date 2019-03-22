const Router = require('express').Router()
const { md5Pwd } = require('../common/tool')
const User = require('../models').getModel('user')
const _filter = { pwd: 0, __v: 0 }

/**
 * 获取列表
 */
Router.get('/list', (req, res) => {
    User.find({}, _filter, (err, doc) => {
        return res.json({ code: 0, data: doc })
    })
})

/**
 * 创建用户
 */
Router.post('/create', (req, res) => {
    const { name, pwd } = req.body
    User.findOne({ name }, (err, doc) => {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }
        const userModel = new User({ name, pwd: md5Pwd(pwd) })
        userModel.save((err, doc) => {
            if (err) {
                return res.json({ code: 1, msg: '数据库出错了' })
            }
            return res.json({ code: 0, data: doc })
        })
    })
})






module.exports = Router