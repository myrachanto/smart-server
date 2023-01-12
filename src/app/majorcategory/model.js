var mongoose =require('mongoose');

var MajorcategorySchema= new mongoose.Schema({
    name: { type : String },
    title: { type: String },
    metaDescription: { type: String },
    h1: { type: String },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Majorcategory', MajorcategorySchema);
