import React from "react"

import styled from 'styled-components'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useHeaderVisible } from "../utils/useHeaderVisible";

import Logo from "../assets/Logo.png"

import useMediaQuery from '@mui/material/useMediaQuery';

interface StyledStackProps {
    visible: boolean
}

interface MediaProps  {
    desktop: boolean
}

const StyledStack = styled(Stack) <StyledStackProps>`
position: fixed;
transition-duration: .3s;
transition-property: top;
transition-timing-function: cubic-bezier(.4,0,.2,1);
background-color: #6e717a73;
z-index: 100;
width: 100%;
top: ${props => props.visible === true ? 0 : "-142px"};
`

const LogoDiv = styled.div`
display: flex;
flex-direction: column;
padding: 0.75rem;
`

const StyledImg = styled.img`
object-fit: contain;
width: 100%;
height: 75px;
cursor: pointer;
`

const StyledName = styled(Typography)<MediaProps>`
&& {
font-family: 'Cinzel', serif;
color: white;
font-size: ${props=> props.desktop === true ? "2.125rem" : "1.5rem"};
cursor: pointer;
}
`

interface Props {

}

export const Header: React.FunctionComponent<Props> = ({ }) => {

    const visible = useHeaderVisible()
    const desktop = useMediaQuery('(min-width:1024px)');

    const scrollTop = () => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
    }

    return (

        <StyledStack
            visible={visible}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
        >

            <LogoDiv>
                <StyledImg onClick={scrollTop} src={Logo}></StyledImg>
                <StyledName onClick={scrollTop} desktop={desktop} style={{}} variant="h4" >
                    Rupert Ellis Brown
                </StyledName>

            </LogoDiv>

        </StyledStack>

    )

}

export default Header