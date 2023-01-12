const  { findAll, findByUrl, createRecord,updateRecord } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);

router.route('/:url')
    .put(updateRecord)
    // .delete(removeMeta)
    .get(findByUrl);

// router.route('/edit/:id')
//     .put(editMeta);

module.exports = router;