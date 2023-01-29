//In this file we are Making Basic APIs GET(Read),POST(Insert),PUT(Update),DELETE(Delete) that are made with node and express and making changes in the data of our database(mongodb).

//Always test these APIs in postman or any other API testing tool because if we gonna test it in normal browser All APIs will give us error except get API. Therefore always use POSTMAN or any other API Testing tool.aq




// const dbConnection = require('./ConnectionWithMongo');   //Importing file from another file to make connection.

// const express = require('express'); //Importing express from library.

// const mongo = require('mongodb');    //Importing mongodb from library.

// const app = express();   //Initialising express function.


        //GET API


// app.get('/' , async (req , res) => { //Making GET API with the help of get keyword.

//     const connection = await dbConnection(); //Initialsing connection with database with the help of the function we imported from the another file.

//     const result = await connection.find({}).toArray();  //using .find method to read the data and using .toArray function to convert the found data into readable form.

//     console.log(result); //Conslling the result.
    
//     res.send(result);    //Sending the result we got above in the form of resposne.
    
// })

// app.listen(80);  //Listening on 80 port.


        //POST API


// app.use(express.json);   //Whenever we are using the POST API we have to use app.use and inside it express.json so that we can convert the data which we received from the user into json format and thereby we would be able to see that data without express.json we wouldnt be able to see our data.

// app.post('/' , async(req , res) => { //Making POST API with the help of POST keyword.

//     const data = req.body        // Taking req.body's data into our data variable (Means whatever the data we gonna enter into )so that it could be dynamic as we are not targeting static data.
    
//     let connection = dbConnection(); //Initialising the connection with database through the imported file.

//     let result = (await connection).insertMany(data); //Using .insertmany to insert the data into our database. 

//     res.send(result);    //Sending the result as response.

//     console.log(result); //Consolling the result we got from performing the above operation.

// })

// app.listen(80);  //Listening on port 80;


        //PUT API - We have 2 ways of updating the data into our database.


// app.put("/" , async(req ,res) => {   //Making PUT(Update) API with the help of PUT keyword.

// const connection = await dbConnection();    //Inialising connection with the database through the imported file.

// let data = await connection.updateMany(  //Defining the updatemany function to Update the data we want to update. 

//     {name: "MicroMax5"},   //use req.body.name for taking name dynamically.  //First giving the object from which we can indentify the data we want to update/change.
//     {$set : {name : "MICROMAX"}}  //use req.body instead of name : "MICROMAx" for taking data dynamically.  //Then with the help of $set we are entering the updated data means the data we want to update in our data.
// );

// res.send(data);  //Sending the result we are getting from the above operation as a response.

// console.log("Updated");  //Consolling 'Updated' to tell the user that data is updated. 

// })

// app.listen(80);  //Listening on 80 port




// app.put('/:name' , async(req , res) => { //Making PUT API with the help of PUT keyword And Modifying the route to /:name ,this would be helpful in the case when we are sending data through our route which we are sending in the field from where our data will be found and we can write anything instead of name depending upon on which parameter we want to find our data. 

// const connection = await dbConnection(); //Inialising connection with the database through the imported file.

// let data = await connection.updateMany(   //Defining the updatemany function to Update the data we want to update. 

//     {name : req.params.name},    //For getting the data we are sending into our route we have to used .params this is the function through which we can access the data we entered into our route and using .name because in our route we have specified that we are entering the name.
//     {$set : req.body}    //Req.body will get the data we entered into our body that we want as updated data.
// );

// res.send(data);  //Sending the result we are getting from the above operation as a response.

// console.log('Updated');  //Consolling 'Updated' to tell the user that data is updated.

// })

// app.listen(80);  //Listening on 80 port


        //DELETE API - In case of id always use _id in case of mongodb otherwise we will gonna get an error as _id is present in mongodb.


// app.delete('/:_id' , async(req ,res) => {    //Making DELETE API with the help of DELETE keyword And modifying the route to /:_id  so that we can enter the id of the data we want to delete and therefore we have to use :_id and this will send the entered id into our deleteone/deletemany function And we can write anything instead of name depending upon on which parameter we want to Delete our data.

//     const connection = await dbConnection(); //Inialising connection with the database through the imported file.

//     console.log(req.params._id); //Consolling the id which the user entered into the route to delete the desired data And using .params because we know that for getting the access of the data which is entered into the route we have to use .params and then the name of the parameter we provided in our route which is id in this case.

//     const data = await connection.deleteOne({_id : new mongo.ObjectId(req.params._id)}); //Defining the deleteOne function to delete the data we want to delete And In case of ID we have to modify the ID into object id because in our mongo database we have object id therefore for deleting the result with the help of id we have to modify the id into object id and for that we have to use new mongo.objectId this will convert the id into objectId.

//     res.send(data);   //Sending the result we are getting from the above operation as a response.

//     console.log('Deleted')  //Consolling 'Deleted' to tell the user that data is Deleted. 
// })

// app.listen(80);  //Listening on 80 port



