const bookTypeDefs = `
    input CreateInputBook {
        name:String!
        author:String!
    }
    input UpdateInputBook {
        id:String!
        name:String!
        author:String!
    }
    type BookFromDB {
        id:ID!
        name:String!
        author:String!
        createdAt: String!
        updatedAt:String!
    }

    type Query{
        getBooks: [BookFromDB]!
        getBook(id:String!): BookFromDB
        
    }
    type Mutation {
        createBook(book:CreateInputBook): BookFromDB
        updateBook(book:UpdateInputBook) : BookFromDB
        deleteBook(id:String):String
    }
`

module.exports = bookTypeDefs