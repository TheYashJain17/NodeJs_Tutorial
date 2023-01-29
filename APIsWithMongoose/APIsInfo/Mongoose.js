//Mongoose And Mongo are almost same but Mongoose provides us more advantages then Mongo, Therefore here comes the use of Mongoose.

//Mongoose gives us functionaltiy of Schemas And Models.

//Meaning Of Following Terms:-

/*Schemas: This helps us validating our database fields , this means suppose if we want that our database should have only 5 fields name , price , ratings , qty and sold and we dont want that anyone could enter more than these fields even not single field other than we defined , so here comes the role of mongoose which helps us to set the number of fields we want to set. 
And also schemas help us to set the type of the field, For  Ex - there is a field "Name" and we want that if anyone wants to enter data inside this field then it should be of only string type and user shouldnt be able to enter value into number or boolean type so for this we can set that "Name" shoudld accept only string value and we can do the same with other fields also. */

//Model : Model connects the Nodejs with our Mongodb with the help of the schemas we defined.


//This is a basic example of models and schemas for detailed example look towards ModelsAndSchemas.js.

const mongoose = require('mongoose');

const main = async() => {

    await mongoose.connect('mongodb://localhost:27017/yash');

    const productSchema = new mongoose.Schema({

        name : String

    });

    const productModels = mongoose.model('items' , productSchema);

    let data = new productModels({name: "Samsung Ultra"})

    let result = await data.save();

    console.log(result);


}

main();

