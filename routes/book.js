const Router = require('express').Router()
const Book = require('../models').getModel('book')
const _filter = { __v: 0 }

/**
 * 获取书籍列表
 */
Router.get('/list', (req, res) => {
    Book.find({},_filter,(err,doc)=>{
        return res.json({ code: 0, data: doc })
    })
})

/**
 * 获取单本书籍的详细信息
 */
// Router.get('/info',(req, res) => {
//     Book.find({},_filter,(err,doc)=>{
//         return res.json({ code: 0, data: doc })
//     })
// })

module.exports = Router