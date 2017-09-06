/* var http = require('http');

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end("pages/buttons.html");
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/'); */

//引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");
//引入url模块
var url = require("url");
//开启本地http服务，监听相应端口号
http.createServer(function(req, res) {
    //获取requset信息中的host地址
    var hostname = req.headers.host;
    //获取pathname
    var pathname = url.parse(req.url).pathname;
    //判断是否为域名地址（简单路由）
    if (pathname === "/index") {
    //   console.log("pathname === '/'");
      readFileAndResponse("/index.html", res);
    }
    else {
      res.end("not index");
    }
  })
  .listen(9999);
//读取文件并返回response
function readFileAndResponse(pathname, response) {
  //判断文件是否存在
  fs.readFile(pathname.substr(1), "", function(err, data) {
    //文件不存在或读取错误返回404，并打印page not found
    if (err) {
      response.writeHead(404);
      response.end("page not found");
    } else {
      //读取成功返回相应页面信息
      response.end(data);
    }
  });
}
console.log("Server running at http://127.0.0.1:9999/");
