//In this file we are inserting/creating data into mongo with the help of nodejs.

const dbConnect = require('./ExportConnectionWithMongo'); //Impoting database connection from the another file.

const insert = async () => {

    const dbConnection = await dbConnect(); //Intialising database connection by calling the dbconnect function.

    const result = dbConnection.insertOne(  //Using insertOne function to insert data into our mongo. With the the help of this function we can insert single data.

        {name:"MicroMax" , price:2020202 , rating: 5.5 , qty : 444 , sold: 111} //Specifying data which we want to add in our mongo.

    );

    //If we want to insert multiple data into our mongo just use insertMany and then inside that make an array and then specify as many objects as we want.

    const result2 = dbConnection.insertMany([

        {name:"MicroMax" , price:939399 , rating: 6.5 , qty : 666 , sold: 171},
        {name:"Apple" , price:383838 , rating: 9.5 , qty : 488 , sold: 191},
        {name:"Nokia" , price:900000, rating: 8.5 , qty : 944 , sold: 211}



    ])



        console.log(await result);  //consoling the result to check whether task is successful or not. 
        console.log(await result2); //consoling the result to check whether task is successful or not.
}

insert();