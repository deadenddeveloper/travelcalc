import { z } from "@builder.io/qwik-city";

export const feedbackSchema = {
  name: z.string(),
  email: z
    .string()
    .email({ message: "email.invalid" })
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, { message: "string.min" }),
};
