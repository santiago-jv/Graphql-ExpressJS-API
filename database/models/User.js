const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
userSchema.set('toJSON', {
    transform:(document, object)=>{
        object.id = object._id;
        delete object.__v
        delete object._id
        delete object.password
        return object;
    }
})
const User = model("User", userSchema);

module.exports = User;
