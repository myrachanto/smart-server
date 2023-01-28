const  { findAll, findByUrl, createRecord,createRecord2 } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);
router.route('/contact').post(createRecord2);

router.route('/:url')
    // .put(editMeta)
    // .delete(removeMeta)
    .get(findByUrl);

// router.route('/edit/:id')
//     .put(editMeta);

module.exports = router;