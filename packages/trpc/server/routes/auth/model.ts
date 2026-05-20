import { z } from "zod";



export const createUserWithEmailAndPasswordInputModel = z.object({
    fullName: z.string().describe('The full name of the user. Must be between 1 and 80 characters.'),
    email: z.email().describe('The email address of the user. Must be a valid email format and between 1 and 255 characters.'),
    password: z.string().describe('The password for the user account. Must be between 6 and 128 characters.'),
})



export const createUserWithEmailAndPasswordOutputModel = z.object({
    id: z.string().describe('id of the user created'),
})