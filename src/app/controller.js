export default function (modelName) {
    const Model = require(`./${modelName}/model.js`);
  
    return {
        getSome () {},

        search (query) {
            return Model.find(query).populate('company').limit(6).exec();
        },

        getAll () {
            return Model.find({}).exec();
        },

        findListings (query, num) {
            return Model.find(query).populate('owner').sort({ created: 'desc' }).limit(num).exec();
        },

        find (query, num) {
            return Model.find(query).sort({ created: 'desc' }).limit(num).exec();
        },
        findsum () {
            const aggregatorOpts = [
              {
                $group: {
                  _id: "$make",
                  count: {
                    $sum: 1
                  }
                }
              }
        ]
        
            return Model.aggregate(aggregatorOpts).exec();
        },
  
  
        findOne (query) {
            return Model.findOne(query).exec();
        },

        findById (id) {
            return Model.findById(id).exec();
        },

        create (_record) {
            let newRecord = new Model(_record);
  
            return new Promise((resolve, reject) => {
                newRecord.save(function (err, record) {
                    if (err) { reject(err); }
  
                    resolve(record);
                });
            });
        },

        update (record, id) {
            const query = { _id: id };
            const update = record;
            const options = { new: true };
  
            return Model.findOneAndUpdate(query, update, options).exec();
        },

        updateArray (query, id) {
            return Model.findByIdAndUpdate(id, query, {safe: true, upsert: true} ).exec();
        },

        remove (id) {
            return Model.findByIdAndRemove(id).exec();
        },

        removeMany (query) {
            return Model.deleteMany(query).exec();
        },

        findInArray (field, item, limit) {
            //  console.log(field, item, limit);
            /* find a record with $item in $field array */
            return Model.find({ [field]: { '$in': [item] } }).limit(limit).exec();
        },

        productAds (query, limit) {
            // fetch ads
            return Model.find(query).limit(limit).exec();
        },

        findProduct (query, num=100) {
            return  Model.find(query).populate({path :'company', select :'name owner url location verified phone website'}).limit(num).exec();
        },

        productById (query) {
            return  Model.findOne(query).populate({path :'company', select :'name owner url county location verified phone website'}).exec();
        },

        findPaginate(query, {page, limit}) {
            const sort = { category: -1, subcategory: 1 };
        
            const options = {
                populate:[ {path:'company', select:'name url location county verified phone website owner'} ],
                page: page, 
                limit: limit,
                sort
            };
            return Model.paginate(query, options);
        }
  
    };
}
