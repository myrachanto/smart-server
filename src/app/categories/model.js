var mongoose =require('mongoose');

var CategorySchema= new mongoose.Schema({
    name: { type : String },
    coverImage: { type: String },
    qty: { typye: Number},
    metaTitle: { type: String },
    metaDescription: { type: String },
    majorcategory: { type: String },
    h1: { type: String },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Category', CategorySchema);
