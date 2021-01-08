const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI, {
            useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
        })
        console.log("MongoDB Connected...")
    } catch (err) {
        console.error(err.mongoose)
        process.exit(1)
    }
}

module.exports = connectDB