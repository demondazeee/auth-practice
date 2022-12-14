import { NextFunction, Request, Response } from "express";

import jwt, { JwtPayload } from 'jsonwebtoken'
import { prisma } from "../db/prisma.client";

export const authGuard = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const token = req.header("Authorization")?.split(" ").slice(1).join('') as string
        const key = 'asd'
        const decode = jwt.verify(token, key) as JwtPayload

        if(!decode){
            throw new Error("Invalid Token")
        }

        const user = await prisma.user.findUnique({
            where: {
                id: decode['id']
            }
        })

        if(!user){
            throw new Error("Unauthorized User")
        } else {
            req.user = user
            
        }

        next()
    } catch(e:any){
        res.status(404).send({
            message: e.message
        })
    }
}