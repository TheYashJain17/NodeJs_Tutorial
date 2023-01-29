//In this file we gonna see how a proper schema should be and how it works.

const mongoose = require('mongoose');
require('./ConnectionWithMongoThroughMongoose');


//In this file with detailed schema we also gonna see the Validation like name should be minimum of this length , phone number should be of mininum length 10  and soon we gonna put validations in our schema this will gonna make our schema more secure and accurate.

//First lets make a schema to see all the things and after that we will everything on it.

/*This is our basic Schema as we know as we have made it already but now below of this we will
see detailed Schema with Validations*/ 

// const ProductSchema = new mongoose.Schema({
    

    
//     Name : String,
//     PhoneNumber : Number,
//     Address : String,
//     Gender : String,
//     Date : new Date(),

// })

//This is the detailed schema and with the help of model we are sending the data to our database.
//In this Schema we are entering every validation possible and making this a perfect schema which can be used to save person's information. 

 
const InformationSchema = new mongoose.Schema({ //Making A New Schema
    Name : {    //Name is the category and inside it we gonna declare multiple things/Validations to make it more strong.

        type : String,  //Declaring the type of name that would be string so that no one can enter the value other than string.
        required : true, //With the help of required we are saying that this field must be filled/It cant be ignored.
        unique : true,  //With the unique property we are saying that the name must be unique.
        lowercase : true, //with lowercase property all the data which the user will gonna enter will be changed into lowercase.
        trim : true,    //trim would delete all the extra spaces which would be enter by the user intentionally or non intentionally that would be there before the name or after the name not the spaces which would be there between the name.
        minlength : 2,  //there should be a minimum length of 2 characters.
        maxlength : 20, //User can enter only 20 characters not more than that.
    },

    PhoneNumber : {  //PhoneNumber is the category and inside it we gonna declare multiple things/Validations to make it more strong.


        type : Number,  //Declaring the type of PhoneNumber that would be Number so that no one can enter the value other than Number.
        required : true,  //With the help of required we are saying that this field must be filled/It cant be ignored.
        minlength : 10, //there should be a minimum length of 10 characters.
        maxlength : 12, //User can enter only 12 characters not more than that.
        unique : true  //With the unique property we are saying that the PhoneNumber must be unique.
    
    },

    Email : {  //Email is the category and inside it we gonna declare multiple things/Validations to make it more strong.


        type : String,  //Declaring the type of Email that would be string so that no one can enter the value other than string.
        required : true,  //With the help of required we are saying that this field must be filled/It cant be ignored.
        unique : true, //With the unique property we are saying that the Email must be unique.
        validate(value){    //Using Validate And Inside entering the value which the user is entering 
            if(!validator.isEmail(value)){  //Checking whether the email entered by the user is valid or not with the help of validator module which we installed.
                throw new Error("Invalid Email");   //If the value is incorrect then the user will get an error 
            }
        }
    
    
    },

    Address : {  //Address is the category and inside it we gonna declare multiple things/Validations to make it more strong.


        type : String,  //Declaring the type of Address that would be string so that no one can enter the value other than string.
        required : true,  //With the help of required we are saying that this field must be filled/It cant be ignored.
        minlength : 10, //there should be a minimum length of 10 characters.
        maxlength : 50, //User can enter only 50 characters not more than that.
        lowercase : true,  //with lowercase property all the data which the user will gonna enter will be changed into lowercase.

        // enum: ["punjabi basti" , "kamla nagar" , "sabzi mandi"] //With the help of enum the data we will enter into the enum only that would be allowed, if the user enter the data other than the data inside the enum then the user will get an error.


    },

    Gender : { //Address is the category and inside it we gonna declare multiple things/Validations to make it more strong.

        type : String, //Declaring the type of Gender that would be string so that no one can enter the value other than string.
        unique : true, //With the unique property we are saying that the Gender must be unique.
        required : true, //With the help of required we are saying that this field must be filled/It cant be ignored.
        minlength : 4, //there should be a minimum length of 4 characters.
        maxlength : 10, //User can enter only 10 characters not more than that.
        lowercase : true  //with lowercase property all the data which the user will gonna enter will be changed into lowercase.

    },

    Date : { //Address is the category and inside it we gonna declare multiple things/Validations to make it more strong.

        type : String,   //Declaring the type of Date that would be string so that no one can enter the value other than string.

        default : new Date() //With default we don't have to enter date again and again its default value will gonna be set which we are setting as new date.
    
    }



 

})

const Information = new mongoose.model('items' , InformationSchema); //Made A new model and inside it defining the collection name in which we gonna store our data and then defining the Schema we created above. 

const newInformation = new Information({    //Made A New Function to enter the data 
    //Defining the data which we want to enter.

    Name : "SAMSUNGULTRA21", 
    PhoneNumber : 9211420420, 
    Address : "pUnjAbi BastI",
    Gender : "Male",
    



})



const sendData = async() => {

    const data = await Information.insertMany(newInformation); //using insertmany function to insert the data into database and defining the data inside the our insertmany functionality.

    console.log(data);


}

sendData();


