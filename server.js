const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(`MongoDB Connection Error ${err}`));


mongoose.disconnect(() => console.log('MongoDB Connection Disconnected...'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start on ${PORT}`)); 