const  { findAll, findByUrl, findFlowers, createRecord, deleteFlower } = require('./index.js');
const router = require('express').Router();

router.route('/')
    .get(findAll)
    .post(createRecord);

router.route('/query/:url')
    .get(findFlowers);

router.route('/:id')
    // .put(editMeta)
    .delete(deleteFlower)
    .get(findByUrl);

// router.route('/edit/:id')
//     .put(editMeta);

module.exports = router;