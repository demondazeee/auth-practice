import { Request, Response } from "express";
import { createUser, loginUser, logoutUser, refresh_token } from "../services/auth.service";

export const signUpUser = async (req: Request, res: Response) => {
    const {username, password} = req.body
    const user = await createUser({username, password}, res)
    res.status(201).send(user)
}

export const signInUser = async (req: Request, res: Response) => {
    const {username, password} = req.body
    const user = await loginUser({username, password}, res)
    res.status(200).send(user)
}

export const signOutUser = async (req: Request, res: Response) => {
    const user = logoutUser(res)
    res.status(200).send({
        message: "user logged out"
    })
}

export const refreshToken = async (req: Request, res: Response) => {
    const user = await refresh_token(req, res)
    return user
}