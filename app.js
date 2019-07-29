var express = require('express');
var app = express();
var path = require('path');

app.use('/stylesheets', express.static('stylesheets'));
app.use('/img', express.static('img'));

app.get('/', function(req, res){
   //res.send("Hello world!");
   res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function() {
   console.log('Server started on port 3000...');
   console.log('Type localhost:3000 into URL');
});