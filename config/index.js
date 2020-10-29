const env = process.env.NODE_ENV || 'development';
const dev = env === 'development';

if (dev) require('dotenv').config();

module.exports = {
    MONGODB_BASE_URL: process.env.MONGODB_BASE_URL,
    MONGODB_DATABASE_NAME: process.env.MONGODB_DATABASE_NAME,
};
