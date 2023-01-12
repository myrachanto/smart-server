const  { findAll, findByUrl, createRecord } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);

router.route('/:id')
    // .put(editMeta)
    // .delete(removeMeta)
    .get(findByUrl);

// router.route('/edit/:id')
//     .put(editMeta);

module.exports = router;