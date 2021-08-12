const User = require('./User');
const Post = require("./Post");
const Comment = require("./Comment")

//define associations


//User can make many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});


//A post only belongs to a single user, reverse association
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//a comment belongs to only one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//comment belongs to a single post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

//a user can have many comments(no limit)
User.hasMany(Comment, {
foreignKey: 'user_id'
});
 
//A post can have many comments(no limit)
Post.hasMany(Comment, {
foreignKey: 'post_id'
});


module.exports = { User, Post , Comment};