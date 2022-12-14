import { useState } from "react"

export const useAuthProvider = () =>{
    const url = 'http://localhost:3001'
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const signIn = async (username: string, password: string) =>{
        setIsLoading(true)
        const res = await fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username,
                password
            })
        })
        if (res.ok){
            const data = await res.json()
            setUser(data)
            setIsLoggedIn(true)
            setIsLoading(false)
        } else {
            const data = await res.json()
            console.log(data.error)
        }
    }

    const registerUser = async (username: string, password: string) =>{
        setIsLoading(true)
        const res = await fetch(`${url}/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username,
                password
            })
        })
        if (res.ok){
            const data = await res.json()
            setUser(data)
            setIsLoggedIn(true)
            setIsLoading(false)
        } else {
            const data = await res.json()
            console.log(data.error)
        }
    }
    const refreshToken = async () =>{
        setIsLoading(true)
        const res = await fetch(`${url}/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })

        if (res.ok){
            const data = await res.json()
            setUser(data)
            setIsLoggedIn(true)
            setIsLoading(false)
        } else {
            const data = await res.json()
            console.log(data.error)
        }
    }

    return {
        user,
        isLoading,
        isLoggedIn,
        signIn,
        refreshToken,
        registerUser
    }
}