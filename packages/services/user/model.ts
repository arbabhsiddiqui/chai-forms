


import { z } from 'zod'


export const createUserWithEmailAndPasswordInput = z.object({
    fullName: z.string().min(1).max(80).describe('The full name of the user. Must be between 1 and 80 characters.'),
    email: z.email().max(255).describe('The email address of the user. Must be a valid email format and between 1 and 255 characters.'),
    password: z.string().min(6).max(128).describe('The password for the user account. Must be between 6 and 128 characters.'),
})

export type CreateUserWithEmailAndPasswordInputType = z.infer<typeof createUserWithEmailAndPasswordInput>

export const generateUserTokenPayload = z.object({
    id: z.string().describe("id of the user")
})


export type GenerateUserTokenPayloadType = z.infer<typeof generateUserTokenPayload>