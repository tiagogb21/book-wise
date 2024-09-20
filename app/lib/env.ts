import { z } from "zod";

const envSchema = z.object({
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    GOOGLE_ID: z.string(),
    GOOGLE_SECRET: z.string(),
});

const envParsed = envSchema.safeParse(process.env);

if(envParsed.success === false) {
    console.error('❌ Invalid environment variables', envParsed.error.format())

    throw new Error('Invalid environment variables.')
}

export const env = envParsed.data
