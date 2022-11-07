// const path = require('path');
// const cors = require("cors")
const http = require("http");
const express = require('express');
// const handlebars = require('express-handlebars');
const app = express();
// const urlencodeParser = bodyParser.urlencoded({extended:false});


//teste
app.get("/",function(req,res){
    res.send("index.html");
});

// app.use('/js',express.static('js'));
// app.use('/img',express.static('img'));

//Start server
http.createServer(app).listen(3000,()=>console.log("Servidor está rodando!"));