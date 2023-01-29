const express = require('express');
const path = require('path');
const app = express();

const filePath = path.join(__dirname , "HTML Files");

//Now for removing file extension we have to use app.get instead of app.use(epress.static) because this method is used for sending static files but have to use .html or anything else thats why we have to use app.use here and inside it we have to use  sendfile instead of only send this will make us  render our file without any extension.
//We remove file extension because we dont want anybody to know that what technology we are using to create the particular file and also it is related to security concern. 
app.get('/' , (req , res) => {
    
    res.sendFile(`${filePath}/index.html`);

})

app.get('/about' , (req , res) => {

        res.sendFile(`${filePath}/about.html`)

})

app.listen(80);