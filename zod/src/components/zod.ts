import { z } from "zod";

const userSchema = z.object({
  username: z.string().nullish(), //nullish - null or undefined || nullable - only null
  age: z.number().optional(), //it can be optional if optional is mentioned else required
  DOB: z.date(),
  isProgrammer: z.boolean().default(true), // can provide default values
  hobby: z.enum(["Programming", "Gym", "Books"]),
});

type User = z.infer<typeof userSchema>;

const user = {
  username: "shashidhar",
};

console.log(userSchema.parse(user));
