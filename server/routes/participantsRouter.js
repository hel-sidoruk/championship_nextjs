const Router = require('express').Router;
const router = new Router();
const participantsController = require('../controllers/ParticipantsController');

router.get('/', participantsController.getAll);
router.post('/', participantsController.create);

module.exports = router;
