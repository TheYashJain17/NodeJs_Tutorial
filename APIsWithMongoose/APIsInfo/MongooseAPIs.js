//In this file we are seeing CRUD Operation with mongoose using APIS for these operations.

require('./ConnectionWithMongoThroughMongoose');  //Importing Conection From Another File.

const mongoose = require('mongoose');   //Imporitng Mongoose.

const product = require('./ModelsAndSchemas');  //Importing Model And Schemas From Another File.

const express = require('express'); //Inporting Express.


const app = express();  //Running Express In A Variable.

app.use(express.json());    //Using express.json becuase the data we gonna get from our db wil not in readable form so for making it readable we have to convert them into json type therefore using app.use(express.json) as this Is a middlware therefore using app.use .


        //GET API For Reading The Data of The Database.


app.get('/list' , async (req , res) => {

    let data = await product.find();   //Using our model we imported from another file. And using .find method for getting the items of the database.

    console.log(data);

    console.log("Data Found Successfully");

    res.send(data);
    
});


        //POST API For Inserting/Creating The Data In The Database.


app.post('/create' , async(req , res) => {

    let data = new product(req.body);   //Using our model we imported from another file and adding new because we are creating new entry therefore it is important to use new.

    let result  = await data.save();    //It is important to use .save when creating new data/model which is product in this case.

    console.log(result);

    console.log('Added To Mongodb');

    res.send(result);


})



//This the data which we have to send in json form for adding data into db through our API.

// {
//     "name": "AppleIphone",
//     "price": 10000,
//     "rating": 11.5,
//     "qty": 988,
//     "sold": 891
//   }


      //PUT API For Updating The Data of The Database.



      app.put('/update/:_id' , async(req ,res)=>{

        let data = await product.updateOne( //Using our model we imported from another file and using .updateone to update our data.
    
            req.params._id,  //Taking the field of the data which we want to update. 
    
            {
                $set : req.body //Setting the updated data. Means the field which we want to update.
            }
        
        );
    
        console.log('Data Updated Successfully');
    
        res.send(data);
    
    })


        //DELETE API For Deleting The Data of The Database.


app.delete('/delete/:_id' , async (req ,res) => {

    let data =   await product.deleteOne(req.params._id);  //Using our model we imported from another file and using .deleteOne to delete the item from our database.

   console.log(data);

   console.log("Data Deleted Successfully");

   res.send(data);



})


  


app.listen(80); //Listening on port 80.

