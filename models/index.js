const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment')

//comments belong to one post, a post has many comments

BlogPost.hasMany(Comment, {
    foreignKey: 'blog_post_id',
    onDelete: 'CASCADE',
})

Comment.belongsTo(BlogPost, {
    foreignKey: 'blog_post_id',
    onDelete: 'SET NULL',
})

//posts belong to one user, a user has many posts

User.hasMany (BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

//comments belong to one user, a user has many comments

User.hasMany (Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

module.exports = { User, BlogPost, Comment };
