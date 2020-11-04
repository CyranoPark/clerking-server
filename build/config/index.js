"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var env = process.env.NODE_ENV || 'development';
var dev = env === 'development';
if (dev)
    dotenv.config();
var config = {
    MONGODB_BASE_URL: process.env.MONGODB_BASE_URL,
    MONGODB_DATABASE_NAME: process.env.MONGODB_DATABASE_NAME,
};
exports.default = config;
//# sourceMappingURL=index.js.map