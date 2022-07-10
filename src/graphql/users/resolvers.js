const User = require("../../../database/models/User")

const userResolvers = {
    Query:{
        getUser: async (_, args, context) => {
            const {userId} = context
            const user = await User.findById(userId)
            return user;
        }
    }
}
module.exports = userResolvers