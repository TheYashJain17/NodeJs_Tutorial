//In this session w have read about Route Level Middleware ,This type of middleware can be applied on single route, group of routes and even on all routes.

const express = require('express');
const path = require('path');
// const reqFilter = require('./export_Middleware');    //Importing middleware from another file to use it in this file.
const app = express();
const filePath = path.join(__dirname , "HTML Files");

const reqFilter = (req , res , next) => {

    //We are checking if the user has not provided the age then this middleware will gonna work
    if(!req.query.age){ //req.query.age will give us the age which the user will provide and we are using not(!) sign.
        res.send("<h1>Please Provide Your Age</h1>");
    }
    
    //If the age provided by the user is less than 18 then this middleware will gonna work.
    else if(req.query.age<18){
        res.send("<h1>Your age is less than 18</h1>");
    }

    //If everything is okay then will be executed 
    else{
        next(); //It is important to use next() otherwise our function will gonna be stucked inside the middleware and will not move further.
    }

}

//Instead of app.use(reqfilter), write reqFilter in every single route like we have done below(In "/about" Route) , In this way we can apply middleware on single route as well as on multiple routes/Group of routes.


app.get('/' , (req , res) => {

    res.sendFile(`${filePath}/index.html`);
})

app.get('/about' , reqFilter, (req , res) => {

    res.sendFile(`${filePath}/about.html`);
}
)

app.listen(80);