var http = require('http');
var dt = require('./myModules');
var url = require('url');

//create a server object:
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  //falls url so aussieht : http://localhost:8080/?year=2017&month=July
  //dann kann man parsen: 
  var urlName = getUrlName(request,url);
  var txt = getDateFrom(urlName);

  response.end(txt);

}).listen(8080); //the server object listens on port 8080
console.log("Server started");

function getUrlName(request, url){
  return url.parse(request.url, true).query;
}
function getDateFrom(url){
  return url.year + " " + url.month;
}