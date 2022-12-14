import styled from "styled-components"
import React from 'react'
import {Container} from '../../components/Layouts/Container'
import { H2 } from "../../components/Elements/Headings"


const DashboardMain = styled.main``

const DashboardContainer = styled.div``

const Dashboard = () =>{
    return (
        <>
            <DashboardMain>
                <Container>
                    <DashboardContainer>
                        <H2>Welcome!</H2>
                    </DashboardContainer>
                </Container>
            </DashboardMain>
        </>
    )
}