const express = require('express');
const app = express();

//In this we gonna see working of request, till now we were seeing the use response only.
//Now lets understand the little bit about request.
//Now we gonna receive the data from browser and for that we will write in front of our port on which we are listening in this case port 80.So in front of it we will write ?name=yash.This means we are sending data from browser.
//Now we gonna receive that data in our console and for this we have used req.query.name means we are accessing name which is sent in query thats why we are saying to console the request we are making from our browser and this is a query thats why using .query we could have end it here so it will give us a object but here we are targeting the name so we have written .name.  

app.get('/' , ((req , res) =>{

    console.log('data sent by browser =>' , req.query.name);

    res.send('this is our homepage');

}))

app.listen(80);

