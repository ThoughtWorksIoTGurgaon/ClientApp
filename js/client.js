$(function(){
  console.log("hello!!!!")
  var socket = io.connect();
  socket.on('connect', function () {
    socket.on('message', function(message) {
      console.log("hahaha!!!!")
    });
    socket.on('disconnect', function() {
      console.log("hehehe!!!!")
    });
  });
});