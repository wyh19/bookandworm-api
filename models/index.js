const mongoose = require('mongoose')
const DB_url = 'mongodb://localhost:27017/bookandworm'
mongoose.connect(DB_url,{ useNewUrlParser: true })

const userModel = require('./user')

const models = {
    user: userModel
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}
