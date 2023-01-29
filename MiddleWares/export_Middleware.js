//If we want to keep our middleware in a separate file just make the middleware in separate file then use module.exports then this middleware will be exported then just import this file in any file we can use our middleware in that particular file.

module.exports =  reqfilter = (req , res , next) => {

    if(!req.query.age){
        res.send("<h1>Please Provide Your Age</h1>");
    }

    else if(req.query.age<18){
        res.send("<h1>Your age is less than 18</h1>");
    }
    else{
        next();
    }

}