const express=require('express')
const app=express()
const path=require('path')
const port=process.env.PORT || 8000;

publicPath=path.join(__dirname,'..','build')

app.use(express.static(path.join(publicPath)));

app.get("*",(req,res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
})
app.listen(port,()=>{
    console.log("server runing on port: "+port)
});