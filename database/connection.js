const mongoose = require('mongoose');
require('dotenv').config()
const {MONGODB_URI} = process.env

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected')
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB