const  { findAll, findByUrl, findModels, createRecord } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);

router.route('/:url')
    // .put(editMeta)
    // .delete(removeMeta)
    .get(findByUrl);

router.route('/make/:id')
    // .put(editMeta)
    // .delete(removeMeta)
    .get(findModels);

// router.route('/edit/:id')
//     .put(editMeta);

module.exports = router;