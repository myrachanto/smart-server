var mongoose =require('mongoose');

var SeoSchema= new mongoose.Schema({
    name: { type : String },
    title: { type : String },
    metaDescription: { type : String },
    h1: { type: String },
    description: { type: String },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Seo', SeoSchema);


