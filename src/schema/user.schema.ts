import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required'
        }),
        password: string({
            required_error: 'Password is required'
        }).min(8, "Password too short - should be 8 chars minimum"),
        passwordConfirmation:  string({
            required_error: 'PasswordConfirmation is required'
        }),
        email: string({
            required_error: "Email is required"
        }).email('Not a valid email')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Password do not match",
        path: ['passwordConfirmation']
    })
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;