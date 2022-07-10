const jwt = require('jsonwebtoken')
require('dotenv').config()
const {JWT_SECRET} = process.env
const createToken = (data ) => {
    return jwt.sign(data,JWT_SECRET,{
        expiresIn:'24h'
    })
}
const decodeToken = (token) => jwt.verify(token, JWT_SECRET)

module.exports = { createToken,decodeToken}