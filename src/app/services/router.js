const  { findAll, findByUrl, createRecord,updateRecord, deleteRecord, deleteCategory } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);

router.route('/:id')
    .put(updateRecord)
    .delete(deleteRecord)
    .get(findByUrl);

router.route('/delete/category/:id')
    .delete(deleteCategory);

module.exports = router;