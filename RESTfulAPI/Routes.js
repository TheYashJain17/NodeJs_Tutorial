//In this file we are making our RESTful API and instead of app we are using router so that we can export this file into another file.

const express = require('express');  //Importing Express

const router = new express.Router(); //Importing the router from the express

const dbConnection = require('./ConnectionWithMongo'); //Importing the connection of mongoose with database which we declared in another file.

const userInfo = require('./SchemasAndModel'); //Importing the schemas and model which we made in another file

const app = express(); //Adding the express function in a variable.

app.use(express.json()); //adding express.json() to convert the incoming data into json format.

app.use(router); //Using router in app.use so that we can use the router which we made in another file.



router.get('/users' , async(req ,res) => { //GET API will give us all data of our database which we have stored inside it.

   let result = await userInfo.find();  //Using .find() with the model we created to find all the data.

   res.send(result); //Sending the result as response.
 
   console.log("Data Has Been Found Successfully"); //Consoling the statement.

})

router.get('/users/:id' , async(req ,res) => { //This GET API will give us the data of a particular person. We have Written the id so that the user can enter data into our API.

    let _id = req.params.id; //Getting the data sent by the user in a variable with the help of req.params.id, this will give us the id entered by the user.

    let result = await userInfo.findById({_id}); //Finding the data with the help of the id entered by the user using the findById method and inside it providing the id which we got from the user.

    console.log("Particular Data Has Been Found Successfully"); //Consoling the statement.

    res.send(result); //Sending the result as response.

})


router.post('/users' , async(req ,res) => { //This POST API will help the users to enter/store the data into the database.


    let data = req.body; //Storing the data which will gonna ve entered by the user into a variable with the help of req.body.

    let result = await userInfo.insertMany(data); //Storing the data into the database with the help of insertMany method of mongo and using it on model which we created in another file. and inside it entering the data which is entered by the user.

    console.log(result); //Consoling the result

    res.send('Data Has Been Stored Successfully'); //Sending the statement as response.


})

//In this form we can send the data in POST API.

// {

//     "Name" : "YASh Jain",
//     "Age" : 22,
//     "Gender" : "MaLe",
//     "PhoneNumber" : 9211420420,
//     "Email" : "Yo@gmail.com",
//     "Address" : "shaitan gali shamshan ke saamne",
//     "UserId" : 1
    

// }



router.put('/users/:id' , async(req ,res) => { //This PUT API will help the user to update the data stored by them previously. We have Written the id so that the user can enter data into our API.

    let _id =  req.params.id;  //Getting the data sent by the user in a variable with the help of req.params.id, this will give us the id entered by the user.

    let result = await userInfo.findByIdAndUpdate(_id , req.body , { //Updating the user data with the help of findByIdAndUpdate by entering the id provided by the user and then the data which will gonna be entered by the user will be taken inside req.body and that will gonna be set as updated data.
        new : true //Setting new as true so that we gonna see the updated data else we will gonna se the previous data.
    });

    res.send("Data Updated Successfully"); //Sending the statement as response.

    console.log(result); //consoling the result.

})

router.delete('/users/:id' , async(req ,res) => { //This delete API will help the user to delete the data of a particular id.  //Getting the data sent by the user in a variable with the help of req.params.id, this will give us the id entered by the user.


    let _id = await req.params.id;  //Getting the data sent by the user in a variable with the help of req.params.id, this will give us the id entered by the user.

    let result = await userInfo.findByIdAndDelete({_id}); //Using findByIdAndDelete method of mongo and using it on model we created in another file and inside it providing the id we got from the user.

    res.send("Data Has Been Deleted Successfully"); //Sending the statement as response.

    console.log(result); //Consoling the result.



})


module.exports = router; //Exporting the router so that we can use it in another file.