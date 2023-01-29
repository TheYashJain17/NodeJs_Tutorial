const express = require('express');
const path = require('path'); // using path module so that we can access file of another folder.
const app = express();

const filePath = path.join(__dirname , "HTML Files"); //using path.join so that we can store the path we want to access in a variable as we learnt in CRUD With FS.

app.use(express.static(filePath));  //.use is a method of express we use to load static files thats why we have used .static with .use and inside that we have given the path of the folder in which we have made our usable files. Inside app varibale we have our executed express and inside it we passed express as a parameter, both are express but one is executed and another one is normal express non executed. 
//After all of the above we can use all files of HTML Files folder just use / and full filename in front of our port/link.
app.listen(80);

/*
Important Note: If we want to load any file on our HomePage then set the file name to index.html then only it will gonna render on our Home.
*/