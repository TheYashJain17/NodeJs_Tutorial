//In this we are connecting our node with mongo and reading the data of our database which we created in our mongo.

// const {MongoClient} = require('mongodb'); Modern Way To Import Module.

const mongoClient = require('mongodb').MongoClient; //Above and this both are same , can use any of them.

const URL = 'mongodb://127.0.0.1:27017'; //Specifying The Path Of our Mongodb so that node can make a connection with it.

const database = "yash" // providing the name of our database.

const client = new mongoClient(URL); //Passing our mongodb path into mongoclient to tell node that we want to fetch our data from here/this path.

async function getData(){

    let connection = await client.connect();  //With this we have connected our node with our mongodb.

    let db = connection.db(database);   //Telling the node to connect with which database , if we have more than 1 database in our mongo then it will gonna be confusing for the node to connect with  which databse thats why it is important to specify the name of database like we have done here.

    let collection = db.collection('items')  //Have to specify the name of collection so that node can understand that to which collection node have to connect with because there can be many collections in a database.

    console.log(await collection.find({}).toArray()); //.find will give us all data which is inside our collection and we have written empty {} so that we can take the result in the form of object and then using toArray function to convert all the result into readale form.

}

getData();  //Change  directory while calling this fucntion as our file is in different folder so cd MongoDB then use nodemon/node.

