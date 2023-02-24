var mongoose =require('mongoose');

var CategorySchema= new mongoose.Schema({
    title: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
    h1: { type: String },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Category', CategorySchema);
