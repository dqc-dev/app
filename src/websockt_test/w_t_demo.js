var ws = new WebSocket("ws://192.168.6.132:8080/service/websocket?cid=1&sid=3");

// 连接 webocket
ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!"); // 发送消息
};

// 接收消息
ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  // ws.close(); // 主动关闭连接
};


// 已关闭
ws.onclose = function(evt) {
  console.log("Connection closed.");
};      