import { z } from 'zod';

const envSchema = z.object({
  OPENAI_API_KEY: z.string(),
  HEDERA_ACCOUNT_ID: z.string(),
  HEDERA_PRIVATE_KEY: z.string(),
  HEDERA_NETWORK: z.union([z.literal('testnet'), z.literal('mainnet')])
});

export const env = envSchema.parse(process.env);
