import { z } from 'zod';

export const doshaQuizSchema = z.object({
  answers: z.array(z.enum(['vata', 'pitta', 'kapha']))
});
