const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    description: String,
    body: String,
    createdAt: Date,    
    postId: Schema.Types.ObjectId,
    author: String
})


module.exports = mongoose.model('post', postSchema);