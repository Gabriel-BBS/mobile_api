const path = require('path');
const http = require("http");
const express = require('express');
const app = express();


//routes
app.get("/",function(req,res){
    res.sendFile('views/index.html', {root: __dirname })
});

app.use('/css',express.static('css'));
app.use('/views',express.static('views'));
//Start server
http.createServer(app).listen(3000,()=>console.log("Servidor está rodando!"));