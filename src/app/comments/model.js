var mongoose =require('mongoose');

var CommentSchema= new mongoose.Schema({
    name: { type : String },
    email: { type : String },
    website: { type : String },
    message: { type : String },
});

module.exports=mongoose.model('Comment', CommentSchema);


