const Router = require('express').Router;
const router = new Router();
const applicationsRouter = require('./applicationsRouter');
const participantsRouter = require('./participantsRouter');
const userRouter = require('./userRouter');

router.use('/applications', applicationsRouter);
router.use('/participants', participantsRouter);
router.use('/user', userRouter);

module.exports = router;
