"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var users_1 = require("./controller/users");
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/:userId', users_1.getUser);
exports.default = router;
//# sourceMappingURL=users.js.map