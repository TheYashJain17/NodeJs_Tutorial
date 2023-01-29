// For creating a new data base type:-
// use and database Name(Which we want to give like here we have given the name yash).
// use yash : this command will create a new database(db) for us with name yash and this(yash) database will come in use automatically.

// Use  Show collections to see all the collections of a database.

//Use db.(collection Name).drop to delete the collection.



//For switching into different databases just type

// use and then database name in which we want to get switched.





//For Inserting/Creating single data in database. 

db.items.insertOne({
    name: "Samsung 30s",
    price: 20000,
    rating: 4.5,
    qty: 233,
    sold: 98
})

//This command will gonna insert our data into our database.


    //CREATE


//For Inserting/Creating Many data in databsse.

db.items.insertMany([{
    name: "Samsung 30s",
    price: 20000,
    rating: 4.5,
    qty: 233,
    sold: 98
},

{
    name: "Moto 30s",
    price: 22000,
    rating: 5.5,
    qty: 253,
    sold: 198
}

]);


    //READ


//For Seeing/Reading what data we have added in our database. 

db.items.find();

// this command will show us all our data what we have added.


    //UPDATE


//For Updating one item/data in our database.

db.items.updateOne({name:"Moto 30s"} , {$set : {price : 2}})  //First parameter is always to find the data then second parameter is to set/update the  parameter which we want to update.

//If there are multiple items with same name (Moto 30s) then this commmand will only update the price of first data which would have this name(Moto 30s) parameter and remaining data will remain untouched means that will not be changed.

//This command will update the price of our data , This matter is case sensitive, we can set/update any parameter we want instead of price , just keep in mind that parameter should be available in our data like qty, sold, rating etc. 





//For Updating all items/data in our database.

db.items.updateMany({name: "Moto 30s"} , {$set: {price : 3 , rating : 1}}); //First parameter is always to find the data then second parameter is to set/update the  parameter which we want to update and there can be 3rd 4th and so on parameters for updating the data/items.

//In this we can set/update mulitple items/data in ust one go.

//This Command will update the price of all items/data. //This command will update the price of our data , This matter is case sensitive, we can set/update any parameter we want instead of price , just keep in mind that parameter should be available in our data like qty, sold, rating etc. 


    //DELETE


//For Deleting one item/data from our database.

db.items.deleteOne({price: 20000})  //If there are multiple items with same price (20000) then this commmand will delete the first  data  which would have this price(20000) parameter and same with all other parameters and remaining data will remain untouched means that will not delete.

//This will delete the data which has price:20000, we can give any parameter we want instead of price , just keep in mind that parameter should be available in our data like qty, sold, rating etc.





//For Deleting many items/data from the database.

db.items.deleteMany({price:20000})

//This will all the data which would have same price parameter , we can give any parameter we want instead of price , just keep in mind that parameter should be available in our data like qty, sold, rating etc. 



