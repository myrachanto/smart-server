var mongoose =require('mongoose');

var UserSchema= new mongoose.Schema({
    name: { type : String },
    email: { type : String },
    phone: { type : String },
    role: { type : Number },
    password: { type: String }
});

module.exports=mongoose.model('User', UserSchema);
