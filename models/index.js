const mongoose = require('mongoose')
const DB_url = 'mongodb://localhost:27017/bookandworm'
mongoose.connect(DB_url)

const models = {
    user: {
        name: { type: String, require: true },
        pwd: { type: String, require: true },
        avatar:{type:String},
        nickName:{type:String},
        age:{type:Number},
        gender:{type:Number}
    }
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}
