const Book = require("../../../database/models/Book")

const bookResolvers = {
    Query:{
        getBooks: async (_,args,context) => {
            const books =  await Book.find({user:context.userId})
            return books
        },
        getBook:async (_,args,context) => {
            const book =  await Book.findById(args.id)
            return book
        },
        
    },
    Mutation:{
        createBook: async (_, args) => {
            const {name, author} = args.book
            
            const book  = await Book.create({
                name, 
                author,
                user: request.userId
            })
           
            return  await book.populate('user')
        },
        updateBook: async (_, args) => {
            const {id,name, author} = args.book
            
            const book = await Book.findByIdAndUpdate(id, {
                name, 
                author,
            })
           
            return  await book
        },
        deleteBook: async (_, args,) => {
            await Book.findByIdAndDelete(args.id)
            return args.id
        }
    }
}
module.exports = bookResolvers