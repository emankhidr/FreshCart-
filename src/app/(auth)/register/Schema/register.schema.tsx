import * as zod from 'zod';

export const registerSchema = zod.object({
  name: zod.string().nonempty("Name is required").min(3).max(10),
  email: zod.string().nonempty("Email is required").email(),
  password: zod.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  rePassword: zod.string().nonempty("Confirm Password is required"),
  phone: zod.string().nonempty("Phone number is required").regex(/^01[0125][0-9]{8}$/)
}).refine((data) => data.password === data.rePassword, {
  message: "Passwords don't match",
  path: ["rePassword"]
});

export type registerSchemaType = zod.infer<typeof registerSchema>;