const User = require("../../database/models/User")
const bcrypt = require('bcrypt');
const { createToken } = require("../utils/jwt");

const authController = {}

authController.registerUser =  async (request, response) => {
    const  {name, email, password} = request.body
    try {
        const user = await User.create({
            name,
            email, 
            password: await bcrypt.hash(password, 10)
        })
        
        const token = createToken({id:user.id})
        return response.status(201).json({
            token, type:'Bearer'
        })
        
    } catch (error) {
        return response.status(500).json({error:error.message})
    }
}

  
authController.loginUser =  async (request, response) => {
    const {email, password} = request.body
    try {
        const user = await User.findOne({email})

        if(!user || !(await bcrypt.compare(password, user.password))){
            return response.status(401).json({message:'Invalid credentials'})
        }
    
        const token = createToken({id:user.id})
        return response.status(201).json({
            token, type:'Bearer'
        })
    
    } catch (error) {
        return response.status(500).json({error:error.message})
    }
}


module.exports = authController