var mongoose =require('mongoose');

var ProjectSchema= new mongoose.Schema({
    title: { type : String },
    content: { type: String },
    coverImage: { type: String },
    otherImages: { type: Array },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Project', ProjectSchema);


