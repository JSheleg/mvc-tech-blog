const User = require('./User');
const Post = require("./Post");

//define associations


//User can make many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});


//A post only belongs to a single user, reverse association
Post.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Post };