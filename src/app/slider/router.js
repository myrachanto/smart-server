const  { findAll, findByUrl, findQuery, createRecord, deleteRecord } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);

router.route('/query/:url')
    .get(findQuery);

router.route('/:id')
    // .put(editMeta)
    .delete(deleteRecord)
    .get(findByUrl);

// router.route('/edit/:id')
//     .put(editMeta);

module.exports = router;