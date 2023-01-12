var mongoose =require('mongoose');

var ServiceSchema= new mongoose.Schema({
    name: { type : String },
    coverImage: { type: String },
    category: { type: String},
    title: { type: String },
    metaDescription: { type: String },
    majorcategory: { type: String },
    description: { type: String },
    h1: { type: String },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Service', ServiceSchema);


