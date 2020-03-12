const mongoose=require("mongoose");

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://picreds:picreds-admin01@picreds-ok6at.mongodb.net/picreds?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });

const registerSchema=mongoose.Schema({
    email:{type:String,unique:true,required:true},
    username:String,
    password:String,
    dob:Date
});



const Register=mongoose.model("Users",registerSchema);

module.exports.Register=Register;
