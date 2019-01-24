const utiltty = require('utility')


/**
 * md5加密
 * @param {String} pwd 
 * @returns {String} 加密后的密码
 * @private
 */
exports.md5Pwd = function (pwd) {
    const salt = 'wyh_love_nodejs_2019_kjsanfkshfuabsiu_salt'
    return utiltty.md5(pwd + salt)
}