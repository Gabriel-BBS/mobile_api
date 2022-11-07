const path = require('path');
const http = require("http");
const express = require('express');
// const { Router } = require('express');
// const handlebars = require('express-handlebars');
const app = express();
// const urlencodeParser = bodyParser.urlencoded({extended:false});


//teste
app.get("/",function(req,res){
    res.sendFile('views/index.html', {root: __dirname })
});

// app.use('/js',express.static('js'));
app.use('/css',express.static('css'));
app.use('/views',express.static('views'));

//Start server
http.createServer(app).listen(3000,()=>console.log("Servidor está rodando!"));