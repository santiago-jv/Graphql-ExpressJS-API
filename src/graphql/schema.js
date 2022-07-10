const { makeExecutableSchema } = require("@graphql-tools/schema")
const bookResolvers = require("./books/resolvers")
const bookTypeDefs = require("./books/typesDefs")
const userResolvers = require("./users/resolvers")
const userTypeDefs = require("./users/typesDefs")


const executableSchema = makeExecutableSchema({
    typeDefs: [userTypeDefs,  bookTypeDefs],
    resolvers: [userResolvers , bookResolvers]
})


module.exports = executableSchema