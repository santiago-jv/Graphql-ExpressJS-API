const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		user:{
			type:Schema.Types.ObjectId,
			ref:'User'
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
bookSchema.set('toJSON', {
    transform:(document, object)=>{
        object.id = object._id;
        delete object.__v
        delete object._id
        return object;
    }
})
const Book = model("Book", bookSchema);

module.exports = Book;
