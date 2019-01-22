const book = {
    name: { type: String, require: true },
    ISBN: { type: String, require: true },
    author: { type: String, require: true },
    cover: { type: String },//封面
    classify: { type: String }//分类

}

module.exports = book