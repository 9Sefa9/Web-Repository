var fileSystem = require('fs');
var url = require('url');
/*
fileSystem.appendFile()
fileSystem.open()
fileSystem.writeFile()
Read files
Create files
Update files
Delete files
Rename files
*/
//read the HTML file, and return the content:
var http = require('http');

http.createServer(function(request, response){

    fileSystem.readFile('demoFileSystem.html', function(err, data) {
      if(err){
        //gib 404 aus, wenn Seite nicht vorhanden.
        response.writeHead(404, {'Content-Type': 'text/html'});
        return response.end("404 Not Found");
      }
      else{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
      }
        
      });
 

}).listen(8080);
//Split a web address into readable parts:
console.log("ServerStarted");

function appendFile(){
//appends to mynewFile1.txt if not => create new one.
fileSystem.appendFile('mynewfile1.txt', 'mynewfile1', function (err) {
  if (err) throw err;
  console.log('mynewfile1 wurde erstellt');
});
}

function writeToFile(){
//Create a new file using the writeFile() method:
fileSystem.writeFile('mynewfile2.txt', 'Dokument erstellt und geschrieben..',function(err){
  if(err) throw err;
  else console.log("mynewfile2 wurde erstellt");
});
}

function deleteFile(){
  //delete Files:
  fileSystem.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    else console.log("mynewfile2 gelöscht!");
  });
}

function renameFile(){
//datei umbennen 
fileSystem.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  else console.log('mynewfile1 geändert zu myrenamedfile');
});
}

function OpenFileStream(){
  var rs = fileSystem.createReadStream('myrenamedfile.txt');
  rs.on('open', function(){
  console.log('The file myrenamedfile is open');
  });
}

function eventbasierteSachen(){
  var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
}