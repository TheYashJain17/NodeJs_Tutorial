//In this file we are storing the data Which is Created according to our schemas into our database with the help of API. 
//This is the mixture of all the things we have learnt already  like making the schema and model and then defining the routes.
const mongoose = require('mongoose');

const validator = require('validator');

const express = require('express');

const app = express();

const connection =  mongoose.connect('mongodb://127.0.0.1:27017/yash');

const InformationSchema = new mongoose.Schema({

Name : {

    type : String,
    required : true,
    unique : true,
    minlength : 2,
    maxlength : 20,
    lowercase : true,
    trim : true

},

PhoneNumber : {

    type : Number,
    required : true,
    unique : true,
    minlength : 10,
    maxlength : 12,
    trim : true

},

Email : {

    type : String,
    required : true,
    unique : true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email");
        }
    }


},


Address : {

    type : String,
    required : true,
    unique : true,
    lowercase : true,
    minlength : 10,
    maxlength : 40,
    trim : true

},

Gender : {

    type : String,
    required : true,
    trim : true,
    minlength : 4,
    maxlength : 8, 

},

Codinglanguage : {

    type : String,
    required : true,
    trime : true,
    minlength : 2,
    maxlength : 20

},

Date : {
    type : String,
    default : new Date()
}

})


const Information = new mongoose.model('items' , InformationSchema);

app.use(express.json())

app.get('/' , (req ,res) => {

    res.send('Connected');
    console.log('Connected');


})

app.post('/create' , async(req ,res) => {

   await connection;

    let data = await req.body;

    let result = await Information.insertMany(data);

    res.send('Data Stored Successfully');

    console.log(result);

    console.log('Successful')


})

app.listen(80);

// {

//     "Name" : "yAsH JaIN",
//     "PhoneNumber" : 9211420420,
//     "Address" : "Punjabi Basti",
//     "Gender" : "Male",
//     "Codinglanguage" : "Solidity"

// }

