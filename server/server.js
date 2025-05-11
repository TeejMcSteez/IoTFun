// Main server to communicate with all IoT devices
import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

import { DB } from './controllers/db.js'

const db = new DB();

fastify.listen({ port: 3000}, function (err, addr) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is listening at: ${addr}`);
});