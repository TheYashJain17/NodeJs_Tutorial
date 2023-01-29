const express = require('express');
const app = express();

//In this we are using normal html with express.js nothing rocket science in this.5

app.get('/' , (req , res) => {

    //Making a temporary page and rendering it inside our route and sending it as a response.
    res.send(`

    

        <input type = "text" placeholder = "UserName" , value = ${req.query.name} />
        <button> click me </button>
        <a href = "/about"> Go To About Page </a>
    
    `);

})

app.get('/about' , (req , res) => {

    res.send(
       
        
        
[{
        name : "yash",
        email : "yashjain07.yj@gmail.com"
},

{
    name : "Rohan",
    email : "Rohanjain07.yj@gmail.com"
}


]);

   

})

app.listen(80);