import React, { cloneElement } from "react"

import styled from 'styled-components'
import Typography from '@mui/material/Typography';

import { motion, AnimationControls } from "framer-motion";


const IconContainer = styled(motion.a)`
padding-top: 0.75rem;
padding-bottom: 0.5rem;
border-radius: 0.375rem;
box-shadow: rgb(0 0 0 / 10%) 0px 4px 20px;
display: flex;
flex-direction: column;
width: fit-content;
margin: auto;
background-color: #363b49;
cursor: pointer;
text-decoration: none;
margin: 1rem;
`

const StyledTitleText = styled(Typography)`
&& {
  /*   font-family: 'Cinzel', serif; */
color: #c9c9cb;
white-space:nowrap;
text-align: center;
padding-top: 0.5rem;
/* padding-bottom: 0.5rem; */
width: 7rem;
}
:link {
    text-decoration: none;
}


`



interface Props {
    name: string;
    icon: React.ReactElement;
    href: string;
    IconsControls: AnimationControls;
    custom: number;
}

export const Skill: React.FunctionComponent<Props> = ({
    name,
    icon,
    href,
    IconsControls,
    custom }) => {


    return (
        <IconContainer
            target="_blank"
            href={href}
            variants={{
                initial: {
                    opacity: 0,
                },
                hover: {
                    y: -3,
                },
            }}
            whileHover="hover"
            animate={IconsControls}
            initial="initial"
            custom={custom}
        >
            {cloneElement(icon, {style:{width: "2.25rem", height: "2.25rem", margin: "auto"}})}
            <StyledTitleText>
                {name}
            </StyledTitleText>
        </IconContainer>
        /* <LinkContainerLeft ref={hoverRefEBProps} href="https://www.ellisbrown.co.za" target="_blank" rel="noopener noreferrer"></LinkContainerLeft> */



    )

}

export default Skill