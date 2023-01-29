//In this file we are creating the connection between mongodb and mongoose.

const mongoose = require('mongoose'); //Importing the mongoose module.

const connection = mongoose.connect('mongodb://localhost:27017/yash'); //Setting the connection with .connect method of mongoose and inside it providing the URL of mongodb in which where database is stored.

module.exports = connection; //Exporting the connection so that we can use it in another file.