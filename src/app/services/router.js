const  { findAll, findByUrl, createRecord,updateRecord, deleteRecord, deleteCategory,findAll1 } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);

router.route('/navs').get(findAll1);
router.route('/:id')
    .put(updateRecord)
    .delete(deleteRecord)
    .get(findByUrl);

router.route('/delete/category/:id')
    .delete(deleteCategory);

module.exports = router;