var express = require("express")
var app = express()
const PORT = 3000;
var path=require("path")
var bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('static'))
//
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/static/home.html"))
})
var savedLevels=[]
app.post("/saveLevel",function(req,res){
    // console.log(req.body)
    savedLevels.push(req.body)
    console.log(savedLevels)
})
app.post("/loadOptionsSavedLevels",function(req,res){
    var tab=[]
    for(let i=0;i<savedLevels.length;i++){
        tab.push(savedLevels[i].saveName)
    }
    res.send(tab)
})
app.post("/loadLevel",function(req,res){
    for(let i=0;i<savedLevels.length;i++){
        if(req.body.name==savedLevels[i].saveName){
            res.send(savedLevels[i].levelInfo)
        }
    }
})
app.get("/hex",function(req,res){
    res.sendFile(path.join(__dirname+"/static/hex.html"))
})
app.get("/game",function(req,res){
    res.sendFile(path.join(__dirname+"/static/game.html"))
})
//
app.listen(PORT, function () { 
    console.log("start serwera na porcie " + PORT )
})