const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
connectDB()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => { cb(null, 'images') },
//     filename: (req, file, cb) => { cb(null, uuid.v4() + file.originalname) }
// })
// const file_Filter = (req, file, cb) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg')
//         cb(null, true)
//     else
//         cb(null, false)
// }
// app.use(multer({ storage: fileStorage, fileFilter: file_Filter }).single('image'))
// app.use('/images', express.static(path.join(__dirname, 'images')))

//Allow CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use('/user', require('./routes/User'))
app.use('/auth', require('./routes/Auth'))
app.use('/post', require('./routes/Post'))
app.use((err, req, res, next) => { res.status(500).json({ message: err.message }) })

//Serve static assests in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));