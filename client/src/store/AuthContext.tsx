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
    registerUser: async(username: string, password: string)=> {},
    logoutUser: async () => {}
})

const AuthContext = ({children}:{children: ReactNode} ) => {
    const auth = useAuthProvider();


    useEffect(() =>{
        auth.refreshToken()
        if(auth.isLoggedIn) {
            const time = setInterval(()=>{
                auth.refreshToken()
            }, 5000)
            
            return () =>{
                clearInterval(time)
            }
        }
    },[auth.isLoggedIn])


    return (
        <authContext.Provider value={{
            ...auth
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContext