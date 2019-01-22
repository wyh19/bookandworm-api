const user ={
    name: { type: String, require: true },
    pwd: { type: String, require: true },
    avatar:{type:String},
    nickName:{type:String},
    age:{type:Number},
    gender:{type:Number}
}

module.exports = user