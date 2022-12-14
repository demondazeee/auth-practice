import { Router } from "express";
import { refreshToken, signInUser, signUpUser } from "../controllers/auth.controller";

export const authRouter = Router()

authRouter.post('/login', signInUser)
authRouter.post('/register', signUpUser)
authRouter.post('/refresh', refreshToken)