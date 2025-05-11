const fastify = require('fastify')({
    logger: true
});

fastify.get('/', function (req, res) {
    res.send({ hello: 'world'});
});

fastify.listen({ port: 3000}, function (err, addr) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is listening at: ${addr}`);
});