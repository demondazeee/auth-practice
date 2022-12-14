import { prisma } from "../db/prisma.client"
import jwt, {JwtPayload} from 'jsonwebtoken'
import * as argon from 'argon2'
import crypto from 'crypto'
import { Request, Response } from "express"

type UserBody = {
    username: string
    password: string
}

const jwt_token = (id: string, res: Response) =>{
    const payload = {id}
    const key = 'asd'
    const accessToken = jwt.sign(payload, key, {expiresIn: '15m'})
    const refreshToken = jwt.sign(payload, key)

    res.cookie('rt', refreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    })

    return accessToken
}

export const createUser = async (user: UserBody, res: Response) => {
    try {
        let { username, password} = user

        const salt = crypto.randomBytes(128)
        password = await argon.hash(password, {salt})

        const newUser = await prisma.user.create({
            data: {
                username,
                password
            }
        })
        
        const token = jwt_token(newUser.id, res)
        
        return {
           ...newUser,
           token
        }
    } catch(e: any){
        return {
            message: e.message
        }
    }
}

export const loginUser = async (userBody: UserBody, res: Response) => {
    try {
        let { username, password} = userBody

        const user = await prisma.user.findFirstOrThrow({
            where: {
                username
            }
        })
        
        if(!argon.verify(user.password, password)){
            throw new Error("Password is not matched!")
        }

        const token = jwt_token(user.id, res)
        
        return {
           ...user,
           token
        }
    } catch(e: any){
        return {
            message: e.message
        }
    }
}

export const logoutUser = (res: Response) =>{
    res.cookie('rt', '', {
        expires: new Date(0),
        httpOnly: true
    })
}

export const refresh_token = async (req: Request, res: Response) => {
    try {
        const oldToken = req.cookies['rt'];
        const key = 'asd'
    
        const decoded = jwt.verify(oldToken, key) as JwtPayload
        
        
        if(!decoded) {
            throw new Error("Invalid token")
        } 

        const user = await prisma.user.findUnique({
            where: {
                id: decoded['id']
            }
        })

        if(!user) {
            throw new Error("User not found")
        }

        const token = jwt_token(user.id, res)

        return res.status(200).send({
            ...user,
            token
        })
    }catch(e: any){
        return res.status(404).send({
            message: e.message
        })
    }
}