const express=require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const path=require('path');
const router=require('./router');
const db = require("./db");
const port=process.env.PORT || 8000;
const app=express();

const publicPath=path.join(__dirname,'..','build');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(publicPath)));

app.use("/",router);

app.get("*",(req,res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(port,()=>{
    console.log("server runing on port: "+port)
});