const express=require('express');
const cors = require("cors");
const path=require('path');
const dotenv=require('dotenv');

const app=express();

dotenv.config();
const port=process.env.PORT || 3001;

app.use(cors());

const publicPath=path.join(__dirname,'build');

app.use(express.static(path.join(publicPath)));

app.get("*",(req,res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(port,()=>{
    console.log("server runing on port: "+port)
});