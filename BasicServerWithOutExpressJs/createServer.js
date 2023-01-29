const http = require('http');

//using nodemon with this so that we dont have to refresh it again and again.
http.createServer((req , res) => {

    res.write("<h1>GoodBye World</h1>");
    res.end();

}).listen(4500);



//Method of sending response with creation of a function.

// function sendingRes(req , res){
//     res.write("Tata World");
//     res.end();
// }
// http.createServer(sendingRes).listen(4500);
