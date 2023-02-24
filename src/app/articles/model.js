var mongoose =require('mongoose');

var ArticleSchema= new mongoose.Schema({
    title: { type : String },
    metaTitle: { type : String },
    h1: { type : String },
    meta: { type: String },
    body: { type: String },
    image: { type: String },
    otherImages: { type: Array },
    url: { type: String, unique: true, required: true },
    keywords: { type: Array },
    author: { type: String },
    featured: { type: Boolean },
    tags: { type: Array },
    published: { type: Boolean },
    altTag: { type: String },
    created: { type: Date },
});

module.exports=mongoose.model('Article', ArticleSchema);


