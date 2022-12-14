import { Request, Response } from "express";
import { createUser, loginUser, refresh_token } from "../services/auth.service";

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

export const refreshToken = async (req: Request, res: Response) => {
    const user = await refresh_token(req, res)
    res.status(200).send(user)
}