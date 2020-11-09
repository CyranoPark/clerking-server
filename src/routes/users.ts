import * as express from 'express';

import { getUser } from './controller/users';

const router: express.Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - content
 *     properties:
 *       _id:
 *         type: string
 *         description: ObjectID
 *       content:
 *         type: string
 *         description: 할일 내용
 *       done:
 *         type: boolean
 *         description: 완료 여부
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Returns User list
 *     tags: [User]
 *     responses:
 *       200:
 *         description: user list
 *         schema:
 *           type: object
 *           properties:
 *             users:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/User'
 */

router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/:userId', getUser);

export default router;
