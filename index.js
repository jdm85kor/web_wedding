var express = require('express');

var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//
app.get('/',function(req,res){
  res.render('index',
  {msg:'동민&유리 결혼합니다'});
});
//image
app.get('/img1',function(req,res){
  fs.readFile('./img/mobile1.jpg',function(error,data){
     res.writeHead(200,{'Content-Type' : 'text/html' });
     res.end(data);
  });
});
app.get('/img2',function(req,res){
  fs.readFile('./img/mobile2.jpg',function(error,data){
     res.writeHead(200,{'Content-Type' : 'text/html' });
     res.end(data);
  });
});
app.get('/img3',function(req,res){
  fs.readFile('./img/mobile3.jpg',function(error,data){
     res.writeHead(200,{'Content-Type' : 'text/html' });
     res.end(data);
  });
});
app.get('/img4',function(req,res){
  fs.readFile('./img/mobile4.jpg',function(error,data){
     res.writeHead(200,{'Content-Type' : 'text/html' });
     res.end(data);
  });
});
app.get('/img5',function(req,res){
  fs.readFile('./img/mobile5.jpg',function(error,data){
     res.writeHead(200,{'Content-Type' : 'text/html' });
     res.end(data);
  });
});
app.get('/img6',function(req,res){
  fs.readFile('./img/mobile6.jpg',function(error,data){
     res.writeHead(200,{'Content-Type' : 'text/html' });
     res.end(data);
  });
});
http
.createServer(app)
.listen(
app.get('port'),
function(){
console.log(
'Express.js server listening on port '+app.get('port')
);
}
);
