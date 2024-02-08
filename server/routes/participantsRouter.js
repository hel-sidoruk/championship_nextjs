const Router = require('express').Router;
const router = new Router();
const participantsController = require('../controllers/ParticipantsController');

router.get('/', participantsController.getAll);
router.post('/', participantsController.create);
router.patch('/:id', participantsController.edit);

module.exports = router;
