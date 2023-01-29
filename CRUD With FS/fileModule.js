const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname , 'CRUD_withFS'); //this will give us the path of the current directory and with providing string value we can provide the name of the folder in which we want to create the new file.


//This will add/write the file into the folder in which we want. 

//fs.writeFileSync(`${dirPath}/apple.txt`,"This is an apple file");//adding directory path then providing the with(/) filename which we want to give then writing the text of the file.


//this will help us to read the file.

/*fs.readFile(`${dirPath}/apple.txt`,'utf8',(err , item)=>{  //we have to write utf8 so that this json data can be converted into string and we can read it else we will see buffer and see some numbers.
    console.log(item)
})*/


//this will help us to update our file.

/*fs.appendFile(`${dirPath}/apple.txt`, " And filename is CRUD_withFS", (err)=>{  //this will append the text we will providing in our existing file and have to use callback for handling the error.
    if(!err){console.log("File is updated")}
});*/

//this will help us to rename our file name.

/*fs.rename(`${dirPath}/apple.txt`, `${dirPath}/fruit.txt`, (err)=>{  //first provide existing filename then new filename then use callback for error handling.
    if(!err){console.log("filename is updated")}
})*/


//this will help us to delete our file

//fs.unlinkSync(`${dirPath}/fruit.txt`); 

