var mongoose =require('mongoose');

var FlowerSchema= new mongoose.Schema({
    title: { type : String },
    size: { type : String },
    description: { type: String },
    coverImage: { type: String },
    otherImages: { type: Array },
    url: { type: String, unique: true, required: true },
    categoryUrl : { type: String }	
});

module.exports=mongoose.model('Flower', FlowerSchema);
