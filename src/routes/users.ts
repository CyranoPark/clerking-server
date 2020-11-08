import * as express from 'express';

import { getUser } from './controller/users';

const router: express.Router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/:userId', getUser);

export default router;
