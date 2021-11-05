import React from "react"
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const StyledStack = styled(Stack)`
margin-top: 75px;
`

const TopDivText = styled.div`
display: flex;
flex-direction: column;
padding: 0.5rem;
`

const StyledTitleText = styled(Typography)`
&& {
color: white;
white-space:nowrap;
text-align: center;
margin-bottom: 1rem;
}
`

const StyledSubTitleText = styled(Typography)`
/* font-family: 'Cinzel', serif; */
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

const StyledLinkText = styled(Typography)`
/* font-family: 'Cinzel', serif; */
&& {
color: white;
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

export const Contact: React.FunctionComponent<Props> = ({ }) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (

        <motion.div
            /* className={className} */
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                hidden: {
                     y: 30,
                    opacity: 0,
                },
                visible: {
                     y: 0,
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
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
            >
                <TopDivText>

                    <StyledTitleText variant="h4" >
                        Contact
                    </StyledTitleText>

                    <StyledSubTitleText >
                        Feel free to send me a message if you have any web development opportunities you would like to discuss.
                    </StyledSubTitleText>

                    <a style={{textDecoration: "none", margin: "auto"}} href="mailto:ruperteb@gmail.com" target="_blank" rel="noopener noreferrer">
                        <StyledLinkText >
                            ruperteb@gmail.com
                        </StyledLinkText>
                    </a>

                </TopDivText>

            </StyledStack>
        </motion.div>



    )

}

export default Contact