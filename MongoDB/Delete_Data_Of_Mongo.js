//In this file we are deleting our data in mongo with the help of node.

const dbConnect = require('./ExportConnectionWithMongo');   //Importing the dbconnect function from another file so that we can use it here.

const deleteData = async() => {

    const dbConnection = await dbConnect(); //Initialising dbconnect function so that we can make connection with the database.

    const result = await dbConnection.deleteOne(    //If there are multiple items with same price (20000) then this commmand will delete the first  data  which would have this price(20000) parameter and same with all other parameters and remaining data will remain untouched means that will not delete.

    //This will delete the data which has price:20000, we can give any parameter we want instead of price , just keep in mind that parameter should be available in our data like qty, sold, rating etc.
    

        {name : "Nokia"}

    )
    console.log(await result);

    
    
    const result2 = await dbConnection.deleteMany(  //This will all the data which would have same price parameter , we can give any parameter we want instead of price , just keep in mind that parameter should be available in our data like qty, sold, rating etc. 

        {name : "MicroMax"}

    )

    console.log(await result2);



}

deleteData();