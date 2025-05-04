import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(2, "Email must be at least 2 characters")
    .max(50, "Email must be less than 50 characters")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be less than 50 characters"),
});

export type FormSchema = z.infer<typeof formSchema>;
