//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
    const conn = await mongoose
        .connect(DATABASE_URL as string)
        .catch(err => console.log(err))
    console.log("Mongoose Connection Established")

    // OUR BLOG SCHEMA
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

    // OUR TODO MODEL
    const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

    return { conn, Blog }
}