const jwt=require("jsonwebtoken");
const config=require("./config");

function verifyToken(req,res,next){
    var token=req.headers['x-access-token'];

    if(!token){
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            return res.status(401).send({auth:false,token:"session expired"})
        }
        req.userId=decoded.id
        next()
    })

}

module.exports = verifyToken;
