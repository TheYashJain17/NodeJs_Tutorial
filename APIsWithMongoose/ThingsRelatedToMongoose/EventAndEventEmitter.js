//In this file we gonna see that how we can create and handle an event in nodejs.

const express  = require('express');

const app = express();

const EventEmitter = require('events'); //IMporting events library/moudle 

const event = new EventEmitter();   //Creating new event.

let count = 0; //Initialising the value of count

//Creating an event With name CountAPI , This function will keep a count of whenever Our API will be called.

event.on("CountAPI" , () => {   //First Arguement is always function's name then a callback function inside which we write our logic of the code.

    count++;    //Inreasing the number of count everytime whenever this function will gonna be called.

    console.log("Event Has Been Called " ,count ,"Times");  //Consoling the count variable value.

})



app.get('/' , (req ,res) => {

    res.send('GET API Called');

    event.emit("CountAPI"); //Emitting/Inserting the function,Just have to write the name of the event in strings.

})

app.post('/Post' , (req , res) => {

    res.send("POST API Called ");

    event.emit("CountAPI"); //Emitting/Inserting the function,Just have to write the name of the event in strings.

})

app.put('/update' , (req ,res) => {

    res.send('UPDATE API Called');

    event.emit("CountAPI") //Emitting/Inserting the function,Just have to write the name of the event in strings.


})



app.listen(80); //Listening on port 80.