var express = require('express');

//create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log("EXPRESS SERVER IS UP ON 3000");
})
