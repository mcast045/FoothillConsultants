const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://FoothillConsultants:test@cluster0.iovjm.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
        })
        console.log("MongoDB Connected...")
    } catch (err) {
        console.error(err.mongoose)
        process.exit(1)
    }
}

module.exports = connectDB