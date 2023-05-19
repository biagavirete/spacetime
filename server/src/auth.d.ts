import '@fastify/jwt';
import { number, string } from 'zod';

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string;
      name: string;
      avatarUrl: string;
    };
  }
}