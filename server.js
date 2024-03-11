var http =require("http")

http.createServer(function(request,response){

    response.writeHead(200,{'content-Type':'test/play'});


    response.end('hello world');

}).listen(5000)