//This method works for only 1 search thing thats why not sure whether we should use it or not.

const product = require('./ModelsAndSchemas'); //Requiring the model and schema we made.

require('./ConnectionWithMongoThroughMongoose'); //requiring the connection with the mongo with the help of mongoose.

const express = require('express');

const app = express();

app.use(express.json()); //using express.json() so that we can read the data which we will send from the postman.

app.get('/search/:key' , async(req ,res) => { //making an API of search and providing parmas as key so we can get the data which the user want to search and get him the desired result.

    console.log(req.params.key); //Consoling the key which the user is entering.

    let data = await product.find( //using our model and on it we are using .find method to find the data.

//This is the syntax of finding the data with the help of regex.
        {

            "$or":[

                {"name" : {$regex: req.params.key}},
                // {"price" : {$regex: req.params.key}},
                // {rating : {$regex: req.params.key}},
                // {qty : {$regex: req.params.key}},
                // {sold : {$regex: req.params.key}}


            ]

        }


    );

    console.log(data);

    res.send(data); //sending the  data for which the user waas searching for.

})

app.listen(80);