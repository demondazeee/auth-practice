import styled from "styled-components"
import React, { useContext } from 'react'
import {Container} from '../../components/Layouts/Container'
import { H2 } from "../../components/Elements/Headings"
import { PrimaryButton } from "../../components/Elements/Buttons"
import { authContext } from "../../store/AuthContext"


const DashboardMain = styled.main`
`

const DashboardContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
`

const Dashboard = () =>{
    const {user,logoutUser} = useContext(authContext)

    return (
        <>
            <DashboardMain>
                <Container>
                    <DashboardContainer>
                        <H2>Welcome! {}</H2>
                        <PrimaryButton onClick={()=>{
                            logoutUser()
                        }}>Logout</PrimaryButton>
                    </DashboardContainer>
                </Container>
            </DashboardMain>
        </>
    )
}

export default Dashboard