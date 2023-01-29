const mongoose = require('mongoose');

const validator = require('validator');

const userInfoSchema = new mongoose.Schema({

    Name : {

        type : String,
        required : true,
        trim : true,
        minlength : 5,
        maxlength : 30,
        lowercase : true,

    },

    Age : {

        type : Number,
        required : true,
        trim : true,
        minlength : 1,
        maxlength : 2,

    },

    Gender : {

        type  : String,
        required : true,
        trim : true,
        lowercase : true,
        minlength : 4,
        maxlength : 6

    },

    PhoneNumber : {

        type : Number,
        required : true,
        minlength : 10,
        maxlength : 12,
        trim : true

    },

    Email : {

        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }

        }

    },

    Address : {

        type : String,
        required : true,
        lowercase : true,
        trim : true,
        minlength : 10,
        maxlength : 200

    },

    UserId : {
        type : Number,
        required : true,
        trim : true,
        minlength : 1,
        maxlength : 3
    },

    Date : {

        type : String,
        default : new Date()


    }



})

const userInfo = new mongoose.model('user' , userInfoSchema);

module.exports = userInfo;