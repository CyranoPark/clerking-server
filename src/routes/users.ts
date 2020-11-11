import * as express from 'express';

import { getUser } from './controller/users';

const router: express.Router = express.Router();

/**
 * @swagger
 * /user/:userId:
 *   get:
 *     summary: "Returns User"
 *     tags:
 *       - "User"
 *     responses:
 *       "200":
 *         description: "User Data"
 */

router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/:userId', getUser);

export default router;
