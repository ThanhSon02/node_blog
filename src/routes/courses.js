const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.delete('/:id', courseController.delete);
router.put('/:id', courseController.update);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);

module.exports = router;
