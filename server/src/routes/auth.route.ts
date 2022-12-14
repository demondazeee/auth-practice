import { Router } from "express";
import { refreshToken, signInUser, signOutUser, signUpUser } from "../controllers/auth.controller";
import { authGuard } from "../middleware/auth.guard";

export const authRouter = Router()

authRouter.post('/login', signInUser)
authRouter.post('/register', signUpUser)
authRouter.post('/refresh', refreshToken)
authRouter.post('/logout', signOutUser)


authRouter.post('/test', authGuard, (req, res) => {
    res.send("Test");
})