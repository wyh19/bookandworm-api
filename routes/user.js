const Router = require('express').Router()
const utiltty = require('utility')
const models = require('../models')

const User = models.getModel('user')
const _filter = { pwd: 0, __v: 0 }

Router.get('/list', (req, res) => {
    User.find({}, _filter, (err, doc) => {
        return res.json({ code: 0, data: doc })
    })
})

module.exports = Router