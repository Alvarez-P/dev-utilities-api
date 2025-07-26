import { z } from 'zod'

export const ConfigEnvSchema = z.object({
  SERVER_PORT: z.coerce.number().int().positive(),
  GLOBAL_PREFIX: z.string().optional().default('/api/')
})
export type ConfigEnv = z.infer<typeof ConfigEnvSchema>
export type EnvironmentVariables = keyof ConfigEnv
