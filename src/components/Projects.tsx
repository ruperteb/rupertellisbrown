import React from "react"

import styled from 'styled-components'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useHover } from "../utils/useHover";

import EBProps1 from "../assets/EBProps1.png"
import ContactDB1 from "../assets/ContactDB1.png"
import Beauhaus1 from "../assets/Beauhaus1.png"
import PSA1 from "../assets/PSA1.png"
import InvestorList1 from "../assets/InvestorList1.png"

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const StyledStack = styled(Stack)`
margin-top: 50px;
`

const TopDivText = styled.div`
display: flex;
flex-direction: column;
padding: 0.5rem;
`

const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;
position: relative;
height: 325px;
margin-top: 75px;
margin-left: auto;
margin-right: auto;

`


const ImageContainerLeft = styled(motion.div)`
z-index: -1;
width: 60%;
height: 100%;
position: absolute;
left: 0;
border-radius: 0.5rem;
`

const ImageContainerRight = styled(motion.div)`
z-index: -1;
width: 60%;
height: 100%;
position: absolute;
right: 0;
border-radius: 0.5rem;
`

const LinkContainerLeft = styled.a`
z-index: 20;
width: 60%;
height: 100%;
position: absolute;
left: 0;
border-radius: 0.5rem;
`

const LinkContainerRight = styled.a`
z-index: 20;
width: 60%;
height: 100%;
position: absolute;
right: 0;
border-radius: 0.5rem;
`

const StyledImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
border-radius: 0.5rem;
box-shadow: 0px 4px 20px rgb(0 0 0 / 25%);
opacity: .8;
`

const TextContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
`

const ProjectTitleRight = styled(Typography)`
&& {
color: white;
display:flex;
margin: auto;
margin-right: 0;
margin-top: 1rem;
text-align: right;
font-size: 1.5rem;
}
`

const ProjectTitleLeft = styled(Typography)`
&& {
color: white;
display:flex;
margin: auto;
margin-left: 0;
margin-top: 1rem;
text-align: left;
font-size: 1.5rem;
}
`

const ProjectDescriptionRight = styled(Typography)`
&& {
color: #c9c9cb;
display:flex;
margin: auto;
margin-right: 0;
margin-top: 2rem;
margin-bottom: 2rem;
text-align: right;
font-size: 1.1rem;
box-shadow: 0 4px 20px rgb(0 0 0 / 25%);
line-height: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 0.375rem;
    width: 45%;
    background-color: #171a23;
}
`

const ProjectDescriptionLeft = styled(Typography)`
&& {
color: #c9c9cb;
display:flex;
margin: auto;
margin-left: 0;
margin-top: 2rem;
margin-bottom: 2rem;
text-align: left;
font-size: 1.1rem;
box-shadow: 0 4px 20px rgb(0 0 0 / 25%);
line-height: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 0.375rem;
    width: 45%;
    background-color: #171a23;
}
`

const ProjectSkillsRight = styled(Typography)`
&& {
display:flex;
margin: auto;
margin-right: 0;
align-items: right;
}
`

const ProjectSkillsLeft = styled(Typography)`
&& {
display:flex;
margin: auto;
margin-left: 0;
align-items: left;
}
`

const ProjectSkillRight = styled(Typography)`
&& {
color: #c9c9cb;
display:flex;
margin: auto;
margin-right: 0;
text-align: right;
font-size: 1.1rem;
}
`

const ProjectSkillLeft = styled(Typography)`
&& {
color: #c9c9cb;
display:flex;
margin: auto;
margin-left: 0;
text-align: left;
font-size: 1.1rem;
}
`

const ProjectIconsRight = styled.div`
display: flex;
flex-direction: row;
margin: auto;
margin-right: 0;
margin-left: auto;
padding-top: 1rem;
`

const ProjectIconsLeft = styled.div`
display: flex;
flex-direction: row;
margin: auto;
margin-left: 0;
margin-right: auto;
padding-top: 1rem;
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

const StyledLaunchIcon = styled(LaunchIcon)`
&& {
    color: white;
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
text-align: center;
color: white;
font-weight: 400;
font-size: 1.2rem;
}

`

interface Props {

}

export const Projects: React.FunctionComponent<Props> = ({ }) => {

    const EBPropsControls = useAnimation();
    const [EBPropsRef, EBPropsInView] = useInView();

    const ContactDBControls = useAnimation();
    const [ContactDBRef, ContactDBInView] = useInView();

    const BeauhausControls = useAnimation();
    const [BeauhausRef, BeauhausInView] = useInView();

    const PSAControls = useAnimation();
    const [PSARef, PSAInView] = useInView();

    const InvestorListControls = useAnimation();
    const [InvestorListRef, InvestorListInView] = useInView();

    React.useEffect(() => {
        if (EBPropsInView) {
            EBPropsControls.start("visible");
        }
        if (ContactDBInView) {
            ContactDBControls.start("visible");
        }
        if (BeauhausInView) {
            BeauhausControls.start("visible");
        }
        if (PSAInView) {
            PSAControls.start("visible");
        }
        if (InvestorListInView) {
            InvestorListControls.start("visible");
        }
    }, [EBPropsControls, EBPropsInView, ContactDBInView, ContactDBControls, BeauhausInView, BeauhausControls, PSAInView, PSAControls, InvestorListInView, InvestorListControls]);

    const [hoverRefEBProps, isHoveredEBProps] = useHover<HTMLAnchorElement>();
    const [hoverRefContactDB, isHoveredContactDB] = useHover<HTMLAnchorElement>();
    const [hoverRefBeauhaus, isHoveredBeauhaus] = useHover<HTMLAnchorElement>();
    const [hoverRefPSA, isHoveredPSA] = useHover<HTMLAnchorElement>();
    const [hoverRefInvestorList, isHoveredInvestorList] = useHover<HTMLAnchorElement>();

    return (


        <StyledStack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
        >
            <motion.div
                /* className={className} */
                ref={EBPropsRef}
                animate={EBPropsControls}
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

                <TopDivText>
                    <StyledTitleText variant="h4" >
                        Projects
                    </StyledTitleText>
                    <StyledSubTitleText >
                        A few of the applications and websites I have worked on in the recent past:
                    </StyledSubTitleText>
                </TopDivText>

                <ProjectContainer>
                    <ImageContainerLeft
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: -5,
                            },
                        }}
                        animate={isHoveredEBProps ? "hovered" : "initial"}
                        initial="initial"
                    >
                        <StyledImg src={EBProps1} ></StyledImg>
                    </ImageContainerLeft>
                    <LinkContainerLeft ref={hoverRefEBProps} href="https://www.ellisbrown.co.za" target="_blank" rel="noopener noreferrer"></LinkContainerLeft>
                    <TextContainer>
                        <ProjectTitleRight variant="h4">
                            Ellis Brown Properties
                        </ProjectTitleRight>
                        <ProjectDescriptionRight variant="h5">
                            Simple single page company website utilising Framer Motion for animations, Cloudinary for image assets and Mapbox for a contact map.
                        </ProjectDescriptionRight>
                        <ProjectSkillsRight >
                            <ProjectSkillRight style={{ paddingRight: "1rem" }} variant="h5">
                                React
                            </ProjectSkillRight>
                            <ProjectSkillRight variant="h5">
                                Typescipt
                            </ProjectSkillRight>

                        </ProjectSkillsRight>

                        <ProjectIconsRight>
                            <a href="https://github.com/ruperteb/ebpropswebsite" target="_blank" rel="noopener noreferrer"><StyledGitHubIcon></StyledGitHubIcon></a>
                            <a href="https://www.ellisbrown.co.za" target="_blank" rel="noopener noreferrer"><StyledLaunchIcon></StyledLaunchIcon></a>
                        </ProjectIconsRight>
                    </TextContainer>

                </ProjectContainer>

            </motion.div>

            <motion.div
                /* className={className} */
                ref={ContactDBRef}
                animate={ContactDBControls}
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

                <ProjectContainer>
                    <ImageContainerRight
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: -5,
                            },
                        }}
                        animate={isHoveredContactDB ? "hovered" : "initial"}
                        initial="initial"
                    >
                        <StyledImg src={ContactDB1} ></StyledImg>
                    </ImageContainerRight>
                    <LinkContainerRight ref={hoverRefContactDB} href="https://ebpropscontacts.netlify.app/" target="_blank" rel="noopener noreferrer"></LinkContainerRight>
                    <TextContainer>
                        <ProjectTitleLeft variant="h4">
                            Contact Database
                        </ProjectTitleLeft>
                        <ProjectDescriptionLeft variant="h5">
                            Contact database with support for contact import from Microsoft Graph API. (Right click for contextual menu, login email: guest@gmail.com, password: Guest@123)
                        </ProjectDescriptionLeft>
                        <ProjectSkillsLeft >
                            <ProjectSkillLeft style={{ paddingRight: "1rem" }} variant="h5">
                                React
                            </ProjectSkillLeft>
                            <ProjectSkillLeft style={{ paddingRight: "1rem" }} variant="h5">
                                Typescipt
                            </ProjectSkillLeft>
                            <ProjectSkillLeft variant="h5">
                                Firebase
                            </ProjectSkillLeft>

                        </ProjectSkillsLeft>

                        <ProjectIconsLeft>
                            <a href="https://github.com/ruperteb/ebpropscontacts" target="_blank" rel="noopener noreferrer"><StyledGitHubIcon></StyledGitHubIcon></a>
                            <a href="https://ebpropscontacts.netlify.app/" target="_blank" rel="noopener noreferrer"><StyledLaunchIcon></StyledLaunchIcon></a>
                        </ProjectIconsLeft>
                    </TextContainer>

                </ProjectContainer>

            </motion.div>

            <motion.div
                /* className={className} */
                ref={BeauhausRef}
                animate={BeauhausControls}
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

                <ProjectContainer>
                    <ImageContainerLeft
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: -5,
                            },
                        }}
                        animate={isHoveredBeauhaus ? "hovered" : "initial"}
                        initial="initial"
                    >
                        <StyledImg src={Beauhaus1} ></StyledImg>
                    </ImageContainerLeft>
                    <LinkContainerLeft ref={hoverRefBeauhaus} href="https://beauhaus.netlify.app/" target="_blank" rel="noopener noreferrer"></LinkContainerLeft>
                    <TextContainer>
                        <ProjectTitleRight variant="h4">
                            Beauhaus (under construction)
                        </ProjectTitleRight>
                        <ProjectDescriptionRight variant="h5">
                            Antiques website with dashboard for managing content. Backend created using Netlify serverless functions, Apollo Server Lambda, GraphQL and FaunaDB. 
                        </ProjectDescriptionRight>
                        <ProjectSkillsRight >
                            <ProjectSkillRight style={{ paddingRight: "1rem" }} variant="h5">
                                React
                            </ProjectSkillRight>
                            <ProjectSkillRight style={{ paddingRight: "1rem" }} variant="h5">
                                Typescipt
                            </ProjectSkillRight>
                            <ProjectSkillRight style={{ paddingRight: "1rem" }} variant="h5">
                                Node.js
                            </ProjectSkillRight>
                            <ProjectSkillRight variant="h5">
                                FaunaDB
                            </ProjectSkillRight>

                        </ProjectSkillsRight>

                        <ProjectIconsRight>
                            <a href="https://github.com/ruperteb/beauhauswebsite" target="_blank" rel="noopener noreferrer"><StyledGitHubIcon></StyledGitHubIcon></a>
                            <a href="https://beauhaus.netlify.app/" target="_blank" rel="noopener noreferrer"><StyledLaunchIcon></StyledLaunchIcon></a>
                        </ProjectIconsRight>
                    </TextContainer>

                </ProjectContainer>

            </motion.div>

            <motion.div
                /* className={className} */
                ref={PSARef}
                animate={PSAControls}
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

                <ProjectContainer>
                    <ImageContainerRight
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: -5,
                            },
                        }}
                        animate={isHoveredPSA ? "hovered" : "initial"}
                        initial="initial"
                    >
                        <StyledImg src={PSA1} ></StyledImg>
                    </ImageContainerRight>
                    <LinkContainerRight ref={hoverRefPSA} href="https://psafrontendv2.herokuapp.com/" target="_blank" rel="noopener noreferrer"></LinkContainerRight>
                    <TextContainer>
                        <ProjectTitleLeft variant="h4">
                            Property Stock App
                        </ProjectTitleLeft>
                        <ProjectDescriptionLeft variant="h5">
                            Web app designed to manage commercial property stock details and create branded output for brokerage clients etc. Backend created with Apollo server, Prisma and GraphQL.
                        </ProjectDescriptionLeft>
                        <ProjectSkillsLeft >
                            <ProjectSkillLeft style={{ paddingRight: "1rem" }} variant="h5">
                                React
                            </ProjectSkillLeft>
                            <ProjectSkillLeft style={{ paddingRight: "1rem" }} variant="h5">
                                Typescipt
                            </ProjectSkillLeft>
                            <ProjectSkillLeft style={{ paddingRight: "1rem" }} variant="h5">
                                Node.js
                            </ProjectSkillLeft>
                            <ProjectSkillLeft variant="h5">
                               GraphQL
                            </ProjectSkillLeft>

                        </ProjectSkillsLeft>

                        <ProjectIconsLeft>
                            <a href="https://github.com/ruperteb/psafrontendv2" target="_blank" rel="noopener noreferrer"><StyledGitHubIcon></StyledGitHubIcon></a>
                            <a href="https://psafrontendv2.herokuapp.com/" target="_blank" rel="noopener noreferrer"><StyledLaunchIcon></StyledLaunchIcon></a>
                        </ProjectIconsLeft>
                    </TextContainer>

                </ProjectContainer>

            </motion.div>

            <motion.div
                /* className={className} */
                ref={InvestorListRef}
                animate={InvestorListControls}
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

                <ProjectContainer>
                    <ImageContainerLeft
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: -5,
                            },
                        }}
                        animate={isHoveredInvestorList ? "hovered" : "initial"}
                        initial="initial"
                    >
                        <StyledImg src={InvestorList1} ></StyledImg>
                    </ImageContainerLeft>
                    <LinkContainerLeft ref={hoverRefInvestorList} href="https://investorlistfrontend.herokuapp.com/" target="_blank" rel="noopener noreferrer"></LinkContainerLeft>
                    <TextContainer>
                        <ProjectTitleRight variant="h4">
                            Investor List
                        </ProjectTitleRight>
                        <ProjectDescriptionRight variant="h5">
                            Web app designed to manage a database of investors, developers and other commercial property related contacts. Backend created with Apollo server, Prisma and GraphQL.
                        </ProjectDescriptionRight>
                        <ProjectSkillsRight >
                            <ProjectSkillRight style={{ paddingRight: "1rem" }} variant="h5">
                                React
                            </ProjectSkillRight>
                            <ProjectSkillRight style={{ paddingRight: "1rem" }} variant="h5">
                                Typescipt
                            </ProjectSkillRight>
                            <ProjectSkillRight style={{ paddingRight: "1rem" }} variant="h5">
                                Node.js
                            </ProjectSkillRight>
                            <ProjectSkillRight variant="h5">
                                GraphQL
                            </ProjectSkillRight>

                        </ProjectSkillsRight>

                        <ProjectIconsRight>
                            <a href="https://github.com/ruperteb/investorlistfrontend" target="_blank" rel="noopener noreferrer"><StyledGitHubIcon></StyledGitHubIcon></a>
                            <a href="https://investorlistfrontend.herokuapp.com/" target="_blank" rel="noopener noreferrer"><StyledLaunchIcon></StyledLaunchIcon></a>
                        </ProjectIconsRight>
                    </TextContainer>

                </ProjectContainer>

            </motion.div>

        </StyledStack>




    )

}

export default Projects