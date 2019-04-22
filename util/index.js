const md5 = require('md5')

let generatePassword = function(password) {
  return md5(`${password}_uuid_uuid`) || ''
}

exports.formatTime = function(date) {
  return `${date.getFullYear()}年${date.getMonth() +
    1}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分`
}

exports.generatePassword = generatePassword

exports.checkPassword = function(pass, originPass) {
  return generatePassword(pass) == originPass
}

exports.generateToken = (uid, uname, rnd) => {
  return md5(`${uid}${uname}${rnd}`)
}