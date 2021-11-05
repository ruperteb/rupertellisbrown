import React from "react"

import styled from 'styled-components'


import Typography from '@mui/material/Typography';

const FooterDiv = styled.div`
/* height: 3rem; */
width: 100%;
margin-top: 100px;
`

const FooterText = styled(Typography)`
&& {
padding-top: 2rem;
padding-bottom: 2rem;
font-size: .875rem;
line-height: 1.25rem;
color: #c9c9cb;
font-weight: 300;
margin: auto;
text-align: center;
}

`


interface Props {

}

export const Footer: React.FunctionComponent<Props> = ({ }) => {




    return (
        <FooterDiv>
            <a style={{textDecoration: "none"}} href="https://github.com/ruperteb/rupertellisbrown" target="_blank" rel="noopener noreferrer">
            <FooterText>
                Created by Rupert Ellis Brown © 2021
            </FooterText>
            </a>
            

        </FooterDiv>
    )

}

export default Footer