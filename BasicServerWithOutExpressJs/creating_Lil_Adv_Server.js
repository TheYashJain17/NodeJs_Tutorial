const http = require('http');
const data = require('./APIsData');

http.createServer((req , res) => {

    res.writeHead(200, {'Content-Type':'application\json'})//this means we are sending response  in form of json.
    res.write(JSON.stringify(data));//then we are coverting that json data into string with the help of this function.
    res.end();

}).listen(80);