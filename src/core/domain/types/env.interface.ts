import { z } from 'zod'

export const ConfigEnvSchema = z.object({
  SERVER_PORT: z.coerce.number().int().positive(),
  GLOBAL_PREFIX: z.string().optional().default('/api/'),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().int().positive(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string()
})
export type ConfigEnv = z.infer<typeof ConfigEnvSchema>
export type EnvironmentVariables = keyof ConfigEnv
