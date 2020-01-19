var http = require('http');
var url = require('url');
var fs = require('fs');

var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

    fs.appendFile('mynewfile2.txt', 'Hello content!', function(err){
        if(err) throw err;
        console.log('Saved!');
    });
    fs.open('mynewfile2.txt', 'w', function(err, file){
        if (err) throw err;
        console.log('Opened!');
    });
      fs.writeFile('mynewfile2.txt', 'This is my text', function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });
      fs.unlink('mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
    
  
  //var q = url.parse(req.url, true).query;
  //var txt = q.year + " " + q.month;
  //res.write("The date and time: " + dt.myDateTime());
  //res.write(req.url);
  
  
}).listen(8080);