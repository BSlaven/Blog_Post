const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,    
    groupId: Schema.Types.ObjectId,
    attendance: String
})


module.exports = mongoose.model('post', postSchema);