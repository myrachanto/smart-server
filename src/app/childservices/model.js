var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var ChildserviceSchema= new mongoose.Schema({
    category: { type: Schema.Types.ObjectId, ref: "Category", default: null },
    title: { type: String },
    metaTitle: { type: String },
    name: { type: String },
    metaDescription: { type: String },
    description: { type: String },
    majors: { type: String },
    h1: { type: String },
    url: { type: String, unique: true, required: true },
    rating: { type: Array },
    tags: { type: Array },
    others: { type: Array },
    sectionsContent: { type: Array },
});

module.exports=mongoose.model('Childservice', ChildserviceSchema);

