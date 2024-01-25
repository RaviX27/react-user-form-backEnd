const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://ravimal:ravimal@cluster0.3fm2hn8.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('MongoDB error: ',error);
    }
};

connect();

const server = app.listen(port,host, () => {
    console.log(`Backend is running on ${server.address().port}`)
});

app.use('/api',router);