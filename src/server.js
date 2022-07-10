const express = require('express');
const server = express()
const {graphqlHTTP} = require('express-graphql');
const connectDB = require('../database/connection');
const executableSchema = require('./graphql/schema');
const authMiddleware = require('./middlewares/authenticate');
const authRouter = require('./routes/authRouter');

connectDB()

server.use(express.json())

server.get('/',(request, response)=> {
    return response.status(200).json({
        message:'Welcome to my API',
        textHelp:'Please first register and provide the token access to my API for give you access to /graphql',
        registerPath:'/auth/register'
    })
})

server.use(authRouter)
server.use(authMiddleware)
server.use(graphqlHTTP((request,)=>({
    schema:executableSchema,
    graphiql:true,
    context: {  
        userId:request.userId
    }
})))

module.exports = server