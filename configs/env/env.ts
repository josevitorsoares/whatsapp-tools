import { config } from "dotenv";
import "dotenv/config";
import { join } from 'path';
import { z } from "zod";

const result = config({
    path: join(__dirname, '..', '..', '.env'),
});

if (result.error) {
    if (result.error.message === 'ENOENT') {
        throw new Error('Missing ".env" file.');
    }

    throw new Error(result.error.message);
}

const envSchema = z.object({
    API_PORT: z.coerce.number().default(3333),
});

const env = envSchema.parse(process.env, {
    errorMap: () => ({
        message: `Missing Env Variables`,
    }),
});

const { API_PORT } = env;

export { API_PORT };
