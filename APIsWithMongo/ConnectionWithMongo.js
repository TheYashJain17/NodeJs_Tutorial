/*In this file we are creating connection with  mongo but within mongo, not using mongoose or anything
 so this is simple and we usually dont use this.*/

const mongoclient = require('mongodb').MongoClient; //Importing mongoclient of mongo for using it.

const url = 'mongodb://127.0.0.1:27017'; //this is the local url of our mongo database.

const database = 'yash'; //name of our database.

const client = new mongoclient(url); //Initialising our client.


const dbConnection = async() => { //Making a new function for reading the data of our database

    const connection = client.connect(); //Establishing connection with the help of the connection.

    const db  = (await connection).db(database);//Using database name with the connection to get into that particular database.

    return  await db.collection('items'); //Then atlast providing collection name to get into the particular collection and see its data.


}

module.exports = dbConnection; //Exporting the function to use it in another file.