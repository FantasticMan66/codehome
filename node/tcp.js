var net = require("net");

var sever = net.createServer(function (socket) {
    socket.on('data',function(data){
        socket.write('hello');
    });
    socket.on('end',function(){
        console.log('hello2');
    });
    socket.write("hello23");
});

sever.listen('8124',function(){
    console.log('server bound.');
});
