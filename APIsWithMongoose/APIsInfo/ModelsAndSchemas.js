const mongoose = require('mongoose');   //Importing the mongoose library.

//This is a simple and basic schema which we are going to learn for just practicing, In another file we will gonna Detailed Schema,Like how a proper Schema should be. 

const productSchema = new mongoose.Schema({ //Initialising new mongoose schema with help of .schema function.

    name : String,  //providing the name as string means only string value can be added into name field now , if someone will try to enter value other than string then the data will not gonna be enter into database and user will get an error. 
    price : Number, //providing the price as Number means only number value can be added into price field now , if someone will try to enter value other than number then the data will not gonna be enter into database and user will get an error.
    rating : Number, //providing the rating as Number means only number value can be added into rating field now , if someone will try to enter value other than number then the data will not gonna be enter into database and user will get an error.
    qty : Number,   //providing the qty as Number means only number value can be added into qty field now , if someone will try to enter value other than number then the data will not gonna be enter into database and user will get an error.
    sold : Number   //providing the sold as Number means only number value can be added into sold field now , if someone will try to enter value other than number then the data will not gonna be enter into database and user will get an error.

}

)


return module.exports = mongoose.model('items' , productSchema);    //Creating a new model with the help of the table provided inside our database which is items in this case and with the help of schema we created above. And using module.export for exporting this model.

