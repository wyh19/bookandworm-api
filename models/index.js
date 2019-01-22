const mongoose = require('mongoose')
const DB_url = 'mongodb://localhost:27017/bookandworm'
mongoose.connect(DB_url, { useNewUrlParser: true })


const models = {
    user: require('./user'),
    book: require('./book'),
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}
