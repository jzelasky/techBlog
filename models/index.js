const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment')

// post has many comments, comments belong to post

BlogPost.hasMany(Comment, {
    foreignKey: 'blog_post_id',
    onDelete: 'CASCADE',
})

Comment.belongsTo(BlogPost, {
    foreignKey: 'blog_post_id'
})

//posts belong to one user, a user has many posts

User.hasMany (BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
})

//comments belong to one user, a user has many comments

User.hasMany (Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, BlogPost, Comment };
