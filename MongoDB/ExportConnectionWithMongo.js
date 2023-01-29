//Making this file so that our connection with database(mongo) can remain in another file and we dont have to make it again and again just import it and use it and therefore our code will remain clean.

const mongoclient = require('mongodb').MongoClient; //Importing mongoclient of mongo for using it.

const url = 'mongodb://127.0.0.1:27017'; //this is the local url of our mongo database.

const database = 'yash'; //name of our database.


const client = new mongoclient(url); //Initialising our client.


const dbConnect = async () => {  //Making a new function for reading the data of our database

    const connection = await client.connect();  //Establishing connection with the help of the connection.

    const db = await connection.db(database); //Using database name with the connection to get into that particular database.

    return collection = db.collection('items');  //Then atlast providing collection name to get into the particular collection and see its data.

}

module.exports = dbConnect; //Exporting the function to use it in another file.