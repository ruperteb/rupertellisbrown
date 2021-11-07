import React from "react"

import styled from 'styled-components'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ProfilePic from "../assets/ProfilePic.png"

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import useMediaQuery from '@mui/material/useMediaQuery';

interface MediaProps  {
    desktop: boolean
}

const StyledStack = styled(Stack)<MediaProps>`
margin-top: ${props => props.desktop === true? "200px" : "150px"} ;
`

const TopDiv = styled.div<MediaProps>`
display: flex;
flex-direction: ${props => props.desktop === true? "row" : "column"};
`

const TopDivText = styled.div`
display: flex;
flex-direction: column;
padding: 0.5rem;
`

const IconDiv = styled.div`
display: flex;
flex-direction: row;
margin: auto;
margin-top: 0px;
padding-top: 1rem;
`

const BottomDiv = styled.div<MediaProps>`
display: flex;
flex-direction: row;
padding: ${props => props.desktop === true? "3rem" : "0.5rem"};
`


const StyledImg = styled.img<MediaProps>`
object-fit: contain;
width: 100%;
height: ${props => props.desktop === true? "250px" : "200px"} ;
padding: 0.5rem;
margin-right: ${props => props.desktop === true? "50px" : "auto"} ;
`

const StyledTitleText = styled(Typography)<MediaProps>`
&& {
    margin-top: ${props => props.desktop === true? "4rem" : "50px"} ;
/* font-family: 'Cinzel', serif; */
margin: auto;
color: white;
white-space:nowrap;
}

`

const StyledSubTitleText = styled(Typography)`
&& {
color: #c9c9cb;
display:flex;
margin: auto;
margin-top: 0.5rem;
text-align: center;
font-size: 1.25rem;
    line-height: 1.75rem;
}

`

const StyledEmailIcon = styled(EmailIcon)`
&& {
    color: white;
    padding-left: 1rem;
    padding-right: 1.5rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
:hover {
    transform: scale(1.15) rotate(10deg)
}

`

const StyledAssignmentIndIcon = styled(AssignmentIndIcon)`
&& {
    color: white;
    padding-right: 1.5rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
:hover {
    transform: scale(1.15) rotate(10deg)
}
`

const StyledGitHubIcon = styled(GitHubIcon)`
&& {
    color: white;
    padding-right: 1.5rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
:hover {
    transform: scale(1.15) rotate(10deg)
}
`

const StyledProfileText = styled(Typography)`
&& {
color: #c9c9cb;
display:flex;
margin: auto;
margin-top: 0.5rem;
text-align: center;
font-size: 1.25rem;
    line-height: 1.75rem;
}

`

interface Props {

}

export const Profile: React.FunctionComponent<Props> = ({ }) => {

    const desktop = useMediaQuery('(min-width:1024px)');

    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (

        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                hidden: {
                    /*  y: 30, */
                    opacity: 0,
                },
                visible: {
                    /*  y: 0, */
                    opacity: 1,
                },
            }}
            transition={{
                delay: 0.4,
                duration: 0.5,
                damping: 5,
                mass: 1,
            }}
        >
            <StyledStack
                desktop={desktop}
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
            >

                <TopDiv desktop={desktop}>
                    <StyledImg  desktop={desktop} src={ProfilePic}></StyledImg>
                    <TopDivText>
                        <StyledTitleText desktop={desktop} variant="h4" >
                            Hi, I'm Rupert!
                        </StyledTitleText>
                        <StyledSubTitleText >
                            Junior Web Developer
                        </StyledSubTitleText>
                        <IconDiv>
                            <a href="mailto:ruperteb@gmail.com" target="_blank" rel="noopener noreferrer"><StyledEmailIcon fontSize={"large"}></StyledEmailIcon></a>
                            <a href="/Rupert_Ellis_Brown_CV.pdf" download><StyledAssignmentIndIcon fontSize={"large"}></StyledAssignmentIndIcon></a>
                            <a href="https://github.com/ruperteb" target="_blank" rel="noopener noreferrer"><StyledGitHubIcon fontSize={"large"}></StyledGitHubIcon></a>
                        </IconDiv>
                    </TopDivText>
                </TopDiv>

                <BottomDiv desktop={desktop}>
                    <StyledProfileText variant="h6">
                        Aspiring web developer, highly motivated to expand my skillset and coding experience. Inquisitive and hard working, I embrace the challenge of creating complex applications and solving smaller, incremental problems alike.
                    </StyledProfileText>

                </BottomDiv>

            </StyledStack>
        </motion.div>



    )

}

export default Profile