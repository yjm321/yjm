const express=require("express");
const http=express();
const dbModle=require("./js/mongodbFZ.js");
const db=new dbModle("lucky");

http.listen(8080,()=>{
	console.log("ok")
})
http.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*")
	next();
})

//添加一條數據
http.get("/add",(req,res)=>{
	let data=req.query;
	console.log(data);
	db.insertOne("list",data,(err,data1)=>{
		res.send("run")
	})
})           
//获取所有数据
http.get("/msg",(req,res)=>{
	db.find("list",{},(err,data2)=>{
		sj(data2)
		console.log(data2)
		if(data2.length>8){
			 data2=data2.slice(0,8)
			console.log(data2)
			res.send(data2)
		}else if(data2.length<=8){
			res.send(data2)
		}
	})
})
function sj (arr) {
	var temp;
	for (var i = 0; i < arr.length; i++) {
		var index = parseInt(Math.random()*arr.length)
		temp = arr[index];
		arr[index]=arr[i]
		arr[i]=temp;
	}
	return arr;
}
//删除一条数据
http.get("/del",(req,res)=>{
	let data =req.query.id;
	db.deleteById("list",data,(err,data)=>{
		res.send(data);
		
	})
})

//修改数据
http.get("/app",(req,res)=>{
	let id=req.query.id;
	db.findById("list",id,(err,data0)=>{
		if(err){
			
		}else{
			data0.flag=1;
			db.updateById("list",id,{flag:data0.flag},(err,data)=>{
				res.send(data)
				
				
			})
			
			
		}
	})
})







