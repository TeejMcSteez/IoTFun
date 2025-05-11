// Main server to communicate with all IoT devices
import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

import { DB } from './controllers/db.js'

const db = new DB();

fastify.get('/', function (req, res) {
    res.send({ hello: 'world'});
});

fastify.get('/write', function (req, res) {
    db.writeJson('goober', {test: "This is a test"});
    res.send({JSON: db.readJSON('goober')});
});

fastify.listen({ port: 3000}, function (err, addr) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is listening at: ${addr}`);
});