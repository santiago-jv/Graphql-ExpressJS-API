const userTypeDefs = `
    type UserFromDB {
        id:ID!
        name:String!
        email:String!
        createdAt:String!
        updatedAt:String!
    }
    type Query {
        getUser:UserFromDB

    }

`

module.exports = userTypeDefs