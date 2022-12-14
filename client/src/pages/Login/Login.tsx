import React, { FormEvent, useContext, useState } from 'react'
import styled from "styled-components"
import { PrimaryButton } from '../../components/Elements/Buttons'
import {H2} from '../../components/Elements/Headings'
import { TextInput } from "../../components/Elements/Inputs"
import { Container } from '../../components/Layouts/Container'
import { authContext } from '../../store/AuthContext'

const LoginContainer = styled.div`
    height: 100vh;
`

const LoginFormContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`

const LoginForm = styled.form`
    flex-basis: 30rem;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.25);
    padding: 1rem;
`

const LoginFormBody = styled.div`
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const LoginInputContainer = styled.div``

const LoginActionContainer = styled.div`
    margin-top: 20px;
    text-align: center;

    & > * {
        padding: 1rem;
        width: 100%;
    }
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const authCtx = useContext(authContext)

    const submitLogin = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await authCtx.signIn(username, password)
        console.log("asdasad")
    }

    return(
        <>
           <LoginContainer>
                <Container>
                    <LoginFormContainer>
                        <LoginForm onSubmit={submitLogin}>
                            <H2>Login</H2>
                            <LoginFormBody>
                                <LoginInputContainer>
                                    <TextInput placeholder="Username" onChange={(e) =>{
                                        setUsername(e.target.value)
                                    }} />
                                </LoginInputContainer>
                                <LoginInputContainer>
                                    <TextInput placeholder="Password" type="password" onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}/>
                                </LoginInputContainer>
                                <LoginActionContainer>
                                    <button type='submit'>Login</button>
                                </LoginActionContainer>
                            </LoginFormBody>
                        </LoginForm>
                    </LoginFormContainer>
                </Container>
           </LoginContainer>
        </>
    )
}

export default Login