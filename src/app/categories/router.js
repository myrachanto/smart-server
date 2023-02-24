const  { findAll, findByUrl, createRecord,updateRecord, deleteRecord, queryMenus } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);

router.route('/get/menus')
    .get(queryMenus);

router.route('/:url')
    .put(updateRecord)
    .get(findByUrl);

router.route('/delete/:id')
.delete(deleteRecord);

module.exports = router;