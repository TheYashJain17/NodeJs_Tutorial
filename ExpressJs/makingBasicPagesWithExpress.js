const express = require('express');

//This is the process of making Basic pages with nodeJS.

const app = express(); // we have to execute it and have to take it into a variablele then only we can use it like we did here.

app.get('' , (req , res) => {   //we have 2 methods to use 'POST' and 'GET'. Here we are getting something like when someone will check out our website he/she will gonna get something thats why use 'GET' here.

    res.send('<h1>This is our HomePage</h1>'); //here we use send instead of write because here we are sending something to our website like what we gonna show in our website thats why we have used send here and also it is in the working of Express.js thats why we have to use it. 

});

app.get('/about' , (req , res) => { // first we have to provide our routes like /about in this case, means at what route what our user gonna see like /about will show him about page and so on and then we have to provide callback function like we have done in previous learnings then almost all the matter is same.

    res.send('<h1>This is our AboutPage</h1>');    

});

app.listen(80);