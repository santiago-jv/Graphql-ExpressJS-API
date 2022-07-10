const jwt = require("jsonwebtoken")
const { decodeToken } = require("../utils/jwt")

function authMiddleware (request, response, next) {
    let token = request.headers.authorization
    if(!token){
        return response.status(403).json({
            message:"Token not provided"
        })
    }
    if(!token.startsWith('Bearer')) return response.status(400).json({
        message:'Token must be of type Bearer'
    })

    token = token.slice(7)

    try {
        const payload = decodeToken(token)
        request.userId = payload.id
        
    } catch (error) {
        return response.status(401).json({
            message:"Invalid token"
        })
    }
    

    next()
}

 module.exports = authMiddleware