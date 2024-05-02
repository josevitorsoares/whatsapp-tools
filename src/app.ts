import fastify from 'fastify';
import { ZodError } from 'zod';

export const app = fastify();

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Validation Env's Error",
      error: error.format(),
    });
  }

  return reply.status(500).send({
    error: 'Internal Server Error',
  });
});
