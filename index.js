const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const formRoute = require('./routes/form');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//connect to DB
const url = "mongodb://localhost:27017/api";
//process.env.DB_CoNNECT 16:45
mongoose.connect(url,{useNewUrlParser: true},()=>console.log('DB connected'));

//middleware
app.use(express.json());



app.use('/user',authRoute);
app.use('/form',formRoute);


app.listen(3000,() => console.log('Server up and running'));