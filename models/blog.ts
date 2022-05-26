const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [20, 'Title cannot be more than 20 characters']
    },
    content: {
        type: String,
        required: true,
        maxlength: [1000, 'Content cannot be more than 1000 characters']
    }
})

module.exports = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
export { };