var mongoose =require('mongoose');

var ChildserviceSchema= new mongoose.Schema({
    name: { type : String },
    title: { type: String },
    metaDescription: { type: String },
    description: { type: String },
    majors: { type: String },
    h1: { type: String },
    url: { type: String, unique: true, required: true },
    rating: { type: Array },
    tags: { type: Array },
    others: { type: Array },
});

module.exports=mongoose.model('Childservice', ChildserviceSchema);


