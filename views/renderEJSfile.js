const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname , "HTML Files");

app.set('view engine' , 'ejs');   //When we use template engine we always have to use app.set and inside it we have to write view engine inside it with this we are telling to our system that we are using template engine and after that we write templat engine name which is 'ejs' in this case.

// app.get('/' , (req , res) => {
//     res.sendFile(`${filePath}/about.html`)
// })

app.get('/profile' , (req , res) => {

    res.render('profile.ejs');  //Instead of sendFile we have to use render so that we can render our file.

})

app.listen(80);