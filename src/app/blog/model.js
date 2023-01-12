var mongoose =require('mongoose');

var BlogSchema= new mongoose.Schema({
    title: { type : String },
    metaTitle: { type : String },
    h1: { type : String },
    h2: { type : String },
    metaTitle: { type: String },
    metaDescription: { type : String },
    content: { type: String },
    coverImage: { type: String },
    otherImages: { type: Array },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Blog', BlogSchema);


