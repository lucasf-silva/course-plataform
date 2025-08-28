import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string()
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido"),
  password: z.string()
    .min(1, "Senha é obrigatória")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type SignInForm = z.infer<typeof loginSchema>;