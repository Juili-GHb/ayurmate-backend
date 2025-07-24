import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

// import { email, z } from 'zod';

// export const registerSchema = z.object({
//     name: z.string().min(2),
//     email: z.string.apply().email(),
//     password: z.string().min(6)
// });

// export const loginSchema = z.objec({
//     email: z.string().email(),
//     password: z.string().min(6)
// });