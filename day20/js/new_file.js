const express=require("express");
const http=express();
const dbMol=require(".js/mongodbFZ.js");
const db=new dbMol("whe");

http.listen(8080,{
	console.log("run")
})
http.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*")
	next();
})

http.get("/add",(req,res)=>{
	var data=req.query;
	console.log(data)
	db.insertOne("list",data,(res,data)=>{
		res.send("ok")
	})
})

http.get("/dee",(req,res)=>{
	db.find("list",{},(err,data)=>{
		if(err){
			console.log(err)
		}else{
			res.send(data)
		}
	})
})
http.get("/one",(req,res)=>{
	var data=req.query.ree;
	console.log(data);
	db.insertOne("list",data,(err,data)=>{
		if(err){
			res.send(err)
		}else{
			res.send(data)
		}
	})
})
http.get("/xiu",(req,res)=>{
	var data=req.query.id;
	console.log(data);
	db.findById("list",data,(err,data)=>{
		if(err){
			res.send(err)
		}else{
			res.send(data)
		}
	})
})
http.get("/zxc",(req,res)=>{
	var data=req.query
	var id=req.query.id
	db.findById("list",data,id,(err,data)=>{
		if(err){
			res.send(err)
		}else{
			res.send(data)
		}
	})
})

