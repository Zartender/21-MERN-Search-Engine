// import user model
const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userInfo = await  User.findOne({ _id: context.user._id });
                return userInfo; 
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        
    },
};

module.exports = resolvers;