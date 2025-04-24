import { z } from "zod";
import { fromZodError } from "zod-validation-error";
const userSchema = z
  .object({
    id: z.union([z.string(), z.number()]).optional(), // id can be a string or number
    otherId: z.string().or(z.number()).optional(), // id can be a string or number
    username: z.string({
      required_error: "username is required",
    }), //nullish - null or undefined || nullable - only null
    age: z.number().min(5, "min length must be 5"),
    DOB: z.date().optional(), //it can be optional if optional is mentioned else required
    isProgrammer: z.boolean().default(true), // can provide default values
    hobby: z.enum(["Programming", "Gym", "Books"]),
    experience: z.number(),
    friends: z.array(z.string()).nonempty(), // array of strings
  })
  .strict(); //cannot define any other extra variable like "company" if you want to add to your obj
// shape - tells the shape
//partial - makes everything optional
//deeppartial - similar to partial but applies for deep nested levels as well
// merge - can merge extra objects

type User = z.infer<typeof userSchema>;

const user = {
  username: "Shashidhar",
  age: 21,
  hobby: "Gym",
  experience: 2,
  friends: ["sss", "aaa"],
};

const result = userSchema.safeParse(user);

if (!result.success) {
  console.log(fromZodError(result.error));
}
