//In this file we are updating the data of our mongodb with the help of nodejs.

const dbconnect = require('./ExportConnectionWithMongo');   //Importing dbconnect function from another file so that we can use it here.

const updateData = async() => {

const dbConnection = await  dbconnect();    //Intialising connection with database by calling the function .

const result = await dbConnection.updateOne( //First parameter is always to find the data then second parameter is to set/update the  parameter which we want to update. We can change/update multiple things/parameters.

//If there are multiple items with same name (Moto 30s) then this commmand will only update the price of first data which would have this name(Moto 30s) parameter and remaining data will remain untouched means that will not be changed.

//This command will update the price of our data , This matter is case sensitive, we can set/update any parameter we want instead of price , just keep in mind that parameter should be available in our data like qty, sold, rating etc. 

    {name :"MicroMax"},
        {$set: {name : "MicroMax5" , price : 999999}}

)

const result2 = await dbConnection.updateMany(  //First parameter is always to find the data then second parameter is to set/update the  parameter which we want to update and there can be 3rd 4th and so on parameters for updating the data/items.

//In this we can set/update mulitple items/data in ust one go.

//This Command will update the price of all items/data. //This command will update the price of our data , This matter is case sensitive, we can set/update any parameter we want instead of price , just keep in mind that parameter should be available in our data like qty, sold, rating etc. 


    {name : "MicroMax"},
        {$set : {name : "MicroMax5" , price : 800000}}


)

    console.log(result);

    console.log(result2);

}

updateData();