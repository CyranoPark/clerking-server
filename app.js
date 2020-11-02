const createError = require('http-errors');
const express = require('express');
const http = require('http');

const initLoaders = require('./loaders');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8888;

const startServer = async () => {
    const app = express();

    await initLoaders({ app });

    app.use('/', indexRouter);
    app.use('/users', usersRouter);

    app.use((req, res, next) => {
        next(createError(404));
    });

    app.use((err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.send({ error: err });
    });

    app.set('port', port);

    const server = http.createServer(app);
    server.listen(port, (err) => {
        if (err) throw err;

        console.log(`> Ready on port ${port} [${env}]`);
    });
};

startServer();
