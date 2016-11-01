var express = require('express');
var port = process.env.PORT || 8080;
//middlewares


var app = express();
app.set('view engine','ejs');

// var routes = require('./routes/index');
app.get('/',function(req,res){
  res.render('index');
});

app.use('/assets',express.static(__dirname+'/public'));
//default path is ./views/index.ejs
// app.set('views',path_join(__dirname,'views'));

app.use(express.static(__dirname+'/client'));

app.listen(port,function(){
  console.log("App is running on port:",port);
});
