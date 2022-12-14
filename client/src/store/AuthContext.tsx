import { createContext, ReactNode, useEffect, useState } from "react"
import { useAuthProvider } from "../hooks/useAuth"
import axios from 'axios'

type UserBody = {
    id? :string
    username: string,
    password: string
}

export const authContext=  createContext({
    isLoggedIn: false,
    user: {},
    isLoading: false,
    signIn: async (username: string, password: string) => {},
    refreshToken: async () => {},
    registerUser: async(username: string, password: string)=> {}
})

const AuthContext = ({children}:{children: ReactNode} ) => {
    const auth = useAuthProvider();


    useEffect(() =>{
        auth.refreshToken()
        const timeout = setTimeout(()=>{
            auth.refreshToken()
            console.log('execute')
        }, 3000)
        

        return () => {
            console.log('cleared')
            clearTimeout(timeout)
        }
    },[])


    return (
        <authContext.Provider value={{
            ...auth
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContext