require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// routes
const studentRotuer  = require('./routes/studentRouter');
const subjectRouter = require('./routes/subjectRouter')

// use middleware
app.use(express.json());
app.use(cors());


// add routes
app.use('/api', studentRotuer);
app.use('/api', subjectRouter);

// connect to database
const URI = process.env.MONGOBD_URL;
mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

