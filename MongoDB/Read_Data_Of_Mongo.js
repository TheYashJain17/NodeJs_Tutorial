const dbconnect = require('./exportConnectionWithMongo');   //Importing database connection file from another file so that we can use it in this file.
 

const read = async () =>{

   const dbconnection = await dbconnect(); //Initialising connection with database by calling the function we imported from another file.

   const result = await dbconnection.find({}).toArray(); // Read This Till End => .find will give us all data which is inside our collection and we have written empty {} so that we can take the result in the form of object and then using toArray function to convert all the result into readale form And if we want to find a specific data/want to read specific data, just enter specific parameter which is present inside our data entry so enter that parameter and provide the name or anything which we want to find.
    

    console.log(await result);  //consolling the result to find whether the task is completed or not.



}

read();