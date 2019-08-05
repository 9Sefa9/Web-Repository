var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

//create a server object:
http.createServer(function (request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/html'});
 // response.write('Hello World!'); //write a response to the client
 // response.write('This is a Date: '+dt.myDateTime());
  //response.write("This is my URL "+request.url);

  var q = url.parse(request.url, true).query;
  var txt = q.year + " " + q.month;
  response.end(txt);
}).listen(8080); //the server object listens on port 8080

function getUrlName(request, url){
  return url.parse(request.url, true).query;
}
function getDateFrom(url){
  return url.year + " " + url.month;
}