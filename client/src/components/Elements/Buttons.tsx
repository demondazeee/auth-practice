import styled from "styled-components";

export const PrimaryButton = styled.a`
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;

    background-color: #3B82F6;
    color: #fff;
    padding: .5rem 1.5rem;
    border-radius: 5px;
    
    transition: background-color .2s ease-out;

    &:hover {
        cursor: pointer;
        background-color: #2563EB;
    }
`