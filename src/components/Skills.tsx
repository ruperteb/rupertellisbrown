import React from "react"

import styled from 'styled-components'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


import Skill from "./Skill"
import { TsIcon } from "./SkillsIcons";
import { FaunaIcon } from "./SkillsIcons";
import { FluentIcon } from "./SkillsIcons";
import { BlueprintIcon } from "./SkillsIcons";
import { CloudinaryIcon } from "./SkillsIcons";
import { ReactRouterIcon } from "./SkillsIcons";
import { FaReact } from 'react-icons/fa';
import { SiNodedotjs } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiApollographql } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';
import { SiMapbox } from 'react-icons/si';

import useMediaQuery from '@mui/material/useMediaQuery';

interface MediaProps  {
    desktop: boolean
}

const StyledStack = styled(Stack)`
margin-top: 75px;
`

const TopDivText = styled.div`
display: flex;
flex-direction: column;
padding: 0.5rem;
`

const SkillsContainer = styled.div<MediaProps>`
display: flex;
flex-direction: row;
flex-wrap: wrap;
/* padding: 1rem; */
width: ${props => props.desktop === true ? "80%" : "90%"};
position: relative;
margin-top: 25px;
margin-left: auto;
margin-right: auto;
justify-content: center;

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



interface Props {

}

export const Skills: React.FunctionComponent<Props> = ({ }) => {

    const desktop = useMediaQuery('(min-width:1024px)');

    const SkillsControls = useAnimation();
    const [SkillsRef, SkillsInView] = useInView();

    const IconsControls = useAnimation();
    const [IconsRef, IconsInView] = useInView();


    React.useEffect(() => {
        if (SkillsInView) {
            SkillsControls.start("visible");
        }
    }, [SkillsInView, SkillsControls]);

    React.useEffect(() => {
        if (IconsInView) {
            IconsControls.start((i) => ({
                opacity: 1,
                transition: { delay: (i + 2) * 0.2 },
            }));
        }
    }, [IconsControls, IconsInView]);

    const skills = [
        {
            name: "TypeScript",
            href: "https://www.typescriptlang.org/",
            icon: <TsIcon />,
        },
        {
            name: "React",
            href: "https://reactjs.org",
            icon: <FaReact color="#00D8FF" />,
        },
        {
            name: "Node.js",
            href: "https://nodejs.org",
            icon: <SiNodedotjs color="#539E43" />,
        },
        {
            name: "GraphQL",
            href: "https://graphql.org",
            icon: <SiGraphql color="#E535AB" />,
        },
        {
            name: "Redux",
            href: "https://redux.js.org/",
            icon: <SiRedux color="#764abc" />,
        },
        {
            name: "Firebase",
            href: "https://firebase.google.com/",
            icon: <SiFirebase color="#ffcb2b" />,
        },
        {
            name: "Apollo",
            href: "https://www.apollographql.com/",
            icon: <SiApollographql color="#311c87" />,
        },
        {
            name: "Prisma",
            href: "https://www.prisma.io/",
            icon: <SiPrisma color="#aef0e5" />,
        },
        {
            name: "Netlify",
            href: "https://www.netlify.com/",
            icon: <SiNetlify color="#42a4bd" />,
        },
        {
            name: "PostgreSQL",
            href: "https://www.postgresql.org/",
            icon: <SiPostgresql color="#336791" />,
        },
        {
            name: "MongoDB",
            href: "https://www.mongodb.com/",
            icon: <SiMongodb color="#116149" />,
        },
        {
            name: "FaunaDB",
            href: "https://fauna.com/",
            icon: <FaunaIcon />,
        },
        {
            name: "Material UI",
            href: "https://mui.com/",
            icon: <SiMaterialui color="#007fff"  />,
        },
        {
            name: "Fluent UI",
            href: "https://developer.microsoft.com/en-us/fluentui#/controls/web",
            icon: <FluentIcon  />,
        },
        {
            name: "Blueprint",
            href: "https://blueprintjs.com/docs/",
            icon: <BlueprintIcon  />,
        },
        {
            name: "Cloudinary",
            href: "https://cloudinary.com/",
            icon: <CloudinaryIcon  />,
        },
        {
            name: "Mapbox",
            href: "https://www.mapbox.com/",
            icon: <SiMapbox color="white"  />,
        },
        {
            name: "React Router",
            href: "https://reactrouter.com/",
            icon: <ReactRouterIcon />,
        },
    ];

    return (

        <StyledStack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
        >
            <motion.div
                /* className={className} */
                ref={SkillsRef}
                animate={SkillsControls}
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
                        Skills
                    </StyledTitleText>
                    <StyledSubTitleText >
                        A selection of technologies, frameworks and tools I have gained some familiarity with over the course of my web development journey:
                    </StyledSubTitleText>

                </TopDivText>

                <SkillsContainer desktop={desktop} ref={IconsRef}>
                    {skills.map((skill, i) => (
                        <Skill {...skill} key={i} custom={i} IconsControls={IconsControls} />
                    ))}

                </SkillsContainer>

            </motion.div>
        </StyledStack>
    )

}

export default Skills