module.exports = {
    method: "GET",
    async execute(fastify, request, reply) {
        try {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send({ message: "I'm super api" });
        }
        catch (error) {
            reply
                .code(500)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send({ message: "This is very bad =(" });
        }
    }
}