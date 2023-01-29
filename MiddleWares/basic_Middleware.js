//In this session we have read about Application Level Middlware Which gets applied on all Routes which we have made , we cannot apply this on single route or group of route.

const express = require('express');
const path = require('path');

const app = express();

const filePath = path.join(__dirname , "HTML Files");

// const reqFilter = (req , res , next) => {  //This is a middleWare, in middleware we always have to provide three parameters where request and response are same but next is something new, We use next parameter as a function for routes for checking conditions if we wouldnt provide this parameter as a function in our code then our code will not move further. 
//     console.log('reqfilter');  //if we wouldnt provide next as a function here then our page will remain on loading continously.
//     next();    //This is how we use a basic middleware.
// }



//This is how a little advance  middleware works in this we are checking whether the user is providing us the age in URL or not, if not then user cannot see the page otherwise second condition will come under check whether the age is greater than 18 or not, if user is greater than 18 then only he/she can see the page because of calling the next parameter as function , therefore when all the conditions satisfies then next function gets called and  page becomes visible for us.
//This is how a middleware works.
const reqFilter = (req , res , next) => {

    if(!req.query.age){
        res.send('<h1>Please Provide Your Age</h1>');
    }
    else if(req.query.age<18){
        res.send('<h1> Your age must be greater than 18 to access this page</h1>');
    }
    else{
        next();
    }

}

app.use(reqFilter); // always have to use app.use to use the middleware.




app.get('/' , (req , res) => {

    res.sendFile(`${filePath}/index.html`);

})

app.get('/about' , (req , res) => {
    res.sendFile(`${filePath}/about.html`);
})

app.get('*' , (req , res) => {
    res.sendFile(`${filePath}/404Page.html`);           
})

app.listen(80);

