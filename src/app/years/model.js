var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var YearsSchema= new mongoose.Schema({
    category: { type: String },
    name: { type : String },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Years', YearsSchema);
