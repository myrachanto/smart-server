var mongoose =require('mongoose');

var ProductSchema= new mongoose.Schema({
    title: { type : String },
    make: { type : String },
    model: { type : String },
    mileage: { type : Number },
    year: { type : Number },
    engine: { type: String },
    condition: { type: String },
    featured: { type: Boolean },
    sold: { type: Boolean },
    interiorcolor: { type: String },
    exteriorcolor: { type: String },
    transmission: { type: String },
    drivetrain: { type: String },
    price: { type: Number },
    specs: { type: Array},
    coverImage: { type: String },
    otherImages: { type: Array },
    metaTitle: { type: String },
    metaDescription: { type: String },
    description: { type: String },
    url: { type: String, unique: true, required: true }	
});

module.exports=mongoose.model('Product', ProductSchema);


