/*
	在nodejs中如何使用goAgent发送请求
	by subying
*/
/*
//简单的例子
var http = require('http')
	,req
	,opt={ 
		host:'www.baidu.com'
		,port:80
		,path:'/'
	}
;

req = http.get(opt,function(res){ 
	console.log(res.headers);
});
*/

var http = require('http')
	,req
	,opt={ 
		host:'127.0.0.1'//代理服务器的IP
		,port:8087//代理服务器的端口
		,path:'http://www.baidu.com'//真实请求的url
	}
;

req = http.get(opt,function(res){ 
	console.log(res.headers);
});
