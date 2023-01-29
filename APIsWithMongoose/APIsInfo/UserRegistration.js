//In this file we are making data for Registering Email And Password With the help of Schemas and Model And we are getting this data from the user from API.

//See NodeProject3 for better understanding as this code is working normally but we are understanding this clearly in nodeproject3.

//Making model and schema and then defining the routes.

//This is not complete the data for getting the complete data check nodeproject3.

const mongoose = require('mongoose');

const validator = require('validator');

const path = require('path');

require('dotenv');

const express = require('express');

const app = express();

app.use(express.json());

app.set("view engine" , "hbs");

app.set("views" , "views"); 

app.use(express.urlencoded({extended : false}));


const connection = mongoose.connect('mongodb://localhost:27017/yash').then(() => {
    console.log("Connected")
}).catch((e) =>{
    console.log(e)
})

// const PORT = process.env.PORT || 80;

const registrationSchema = new mongoose.Schema({


    firstName:{
        
        type : String,
        required : true,
        minlength : 3,
        maxlength : 10,
        trim : true,
        lowercase : true

    },

    lastName:{

        type : String,
        required : true,
        minlength : 3,
        maxlength : 10,
        trim : true,
        lowercase : true

    },

    Age : {

        type : Number,
        required : true,
        minlength : 1,
        maxlength : 2,
        trim : true

    },

    Gender : {

        type : String,
        required : true,
        minlength : 4,
        maxlength : 6,
        trim : true,
        lowercase : true

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

    Password : {

        type : Number,
        required : true,
        unique : true,
        minlength : 7,
        maxlength : 15,
        trim : true,

    },

    ConfirmPassword : {

        type : Number,
        required : true,
        unique : true,
        minlength : 7,
        maxlength : 15,
        trim : true,

    }

   
})


const usersInfo = new mongoose.model('users' , registrationSchema);


app.get('/' , (req , res) => {

    res.render("index");

    console.log("Connected");

})

app.post('/register' , async(req ,res) =>{

    try {

        const Password = req.body.Password; //getting the password which is entered by the user and storing it inside variable.

        const CPassword = req.body.ConfirmPassword; //getting the confirm password which is entered by the user and storing it inside variable.

        if(Password === CPassword){

            const RegisterEmployee = new usersInfo({
//All The Fields That are written after req.body. (anything we have written like FirstName LastName) These Field Names Should be exactly Same as we have provided inside our form input in name , Check index.html and then form and inside form input field for our every category for better understanding.
                
//This is in the form key value pair so all our keys(like firstName , lastName means all the fields which are om the left side) are the variables which we have declared inside our schemas and our values are those which the user is entering so that we can enter the value in the keys which the user is entering to store user data at the desired place/at its original position.
                firstName : req.body.FirstName,
                lastName : req.body.LastName,
                Age : req.body.Age,
                Gender : req.body.gender,
                PhoneNumber : req.body.PhoneNumber,
                Email : req.body.Email,
                Password : Password,
                ConfirmPassword : CPassword

            })

            console.log("The success part is" , RegisterEmployee);



        const registered = await RegisterEmployee.save();
            res.status(201).send("Your Data Has Been Saved Successfully");

        }
        else{
            res.send('Passwords Are Not Matching');
        }


        
    } catch (error) {

        res.status(400).send(error);
        
    }

})

app.get('/login' , async(req ,res) => {

    res.send("This is Our Log-In Page");

})






app.listen(80);

// {

//     "firstName" : "yasH",
//     "lastName" : "JaIn",
//     "Age"   : 21,
//     "Gender" : "MALE",
//     "PhoneNumber" : 9211420420,
//     "Email" : "RjaJAIN.yj@gmail.com",
//     "Password" : 9000000009,cls

//     "ConfirmPassword" : 9000000009


// }