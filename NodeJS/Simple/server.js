	// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
const fs = require("fs");
const path = require("path");
//CREATE EXPRESS APP
const app = express();

//um auf Css und Javascript daten zuzugreifen.
app.use(express.static("publicFiles"));

app.get('/index.html', function(req,res){
    res.sendFile(__dirname + '/');
});
//zeigt den homepage
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
 
app.listen(8080, () => console.log('Server started on port 8080'));

//a directory where all our files will be saved,
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
        const dir = path.join(file.originalname+new Date().toISOString().replace(/:/g, '-'));
        fs.mkdir(dir, err => cb(err, dir));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname /*+ '-' + Date.now()+file.*/);
    }
  });
var upload = multer({ storage: storage });

//Now we need to create an endpoint in the Express application.
//myFile aus name="myFile".
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
   
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }else{
		res.sendFile(__dirname+ '/done.html');
        //res.send(file)
    }
  
  })		

  //Uploading multiple files
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
   
      res.send(files)
  })










/*const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
 
/* 
mongoose.connect("geturown", {
    useNewUrlParser: true
}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Connected to the database");
    }
});

 
var gameSchema = new mongoose.Schema({
    title: String,
    creator: String,
    width: Number,
    height: Number,
    fileName: String,
    thumbnailFile: String
});
 
var Game = mongoose.model("Game", gameSchema);
 */
// const games = [{
//     title: "Learn to Fly 2",
//     creator: "light_bringer777",
//     width: 640,
//     height: 480,
//     fileName: "learntofly2.swf",
//     thumbnailFile: "Learn_To_Fly_2.jpg"
// },
// {
//     title: "Run 3",
//     creator: "player_03",
//     width: 800,
//     height: 600,
//     fileName: "run3.swf",
//     thumbnailFile: "run3.jpg"
// },
// {
//     title: "Continuity",
//     creator: "glimajr",
//     width: 640,
//     height: 480,
//     fileName: "continuity.swf",
//     thumbnailFile: "booty.png"
// }
// ]
 
//Sets the public folder as the external file folder
//app.use(express.static("public"));
 
//app.use(bodyParser.urlencoded({extended: true}));
 
//Officially sets the view engine as ejs, therefore setting the default file type for readering to .ejs
//app.set("view engine", "ejs");
 
//app.use(fileUpload());
 
//app.get("/", function (req, res) {
//    res.render("homepage");
//});
 /*
app.get("/game/:id", function (req, res) {
    var id = req.params.id;
 
    Game.findById(id, function(error, foundGame){
        if(error){
            console.log("Couldn't find game with that id:");
        }else{
            res.render("game", {
                title: foundGame.title,
                creator: foundGame.creator,
                width: foundGame.width,
                height: foundGame.height,
                fileName: foundGame.fileName
            });
        }
    });
});
 
app.get("/list", function (req, res) {
 
    Game.find({}, function(error, games){
        if(error){
            console.log("There was a problem retrieving all of the games from the database.");
            console.log(error);
        }else{
            res.render("list", {
                gamesList: games
            });
        }
    });
 
});
 
app.get("/addgame", function(req, res){
    res.render("addgame");
});
 
app.post("/addgame", function(req, res){
    var data = req.body;
 
    //a variable representation of the files
    var gameFile = req.files.gamefile;
    var imageFile = req.files.imagefile;
 
    //Using the files to call upon the method to move that file to a folder
    gameFile.mv("public/games/" + gameFile.name, function(error){
        if(error){
            console.log("Couldn't upload the game file");
            console.log(error);
        }else{
            console.log("Game file succesfully uploaded.");
        }
    });
    imageFile.mv("public/games/thumbnails/" + imageFile.name, function(error){
        if(error){
            console.log("Couldn't upload the image file");
            console.log(error);
        }else{
            console.log("Image file succesfully uploaded.");
        }
    });
    
    Game.create({
        title: data.title,
        creator: data.creator,
        width: data.width,
        height: data.height,
        fileName: gameFile.name,
        thumbnailFile: imageFile.name
    }, function(error, data){
        if(error){
            console.log("There was a problem adding this game to the database");
        }else{
            console.log("Game added to database");
            console.log(data);
        }
 
    });
    res.redirect("/list");
});
 
app.listen("8080", function () {
    console.log("Website has started up! ");
});
*/
