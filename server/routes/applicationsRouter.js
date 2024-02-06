const Router = require('express').Router;
const router = new Router();
const applicationsController = require('../controllers/ApplicationsController');

router.get('/', applicationsController.getAll);
router.post('/', applicationsController.create);
router.patch('/:id', applicationsController.edit);

module.exports = router;
