import React, { FC } from "react";

import styled from 'styled-components'

const StyledIcon = styled.svg`
width: 2.25rem;
height: 2.25rem;
margin: auto;
`

type Props = {
    className?: string;
};

export const TsIcon: FC<Props> = ({ className }: Props) => {
    return (
        <StyledIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={className}
            viewBox="0 0 28 28"
        >
            <path fill="#007ACC" d="M0 14v14h28V0H0v14z"></path>
            <path
                fill="#fff"
                d="M6.192 14.093l-.009 1.146h3.644v10.356h2.578V15.24h3.645v-1.125c0-.622-.014-1.142-.031-1.155-.014-.018-2.231-.027-4.92-.023l-4.894.014-.013 1.142zM22.593 12.918a3.486 3.486 0 011.751 1.009c.258.276.64.778.671.898.01.035-1.208.853-1.946 1.31-.027.019-.134-.097-.254-.275-.36-.524-.737-.75-1.315-.79-.849-.059-1.396.386-1.391 1.128 0 .218.03.347.12.525.187.386.533.617 1.622 1.088 2.005.863 2.862 1.432 3.396 2.24.595.903.729 2.343.324 3.414-.444 1.164-1.547 1.955-3.098 2.218-.48.084-1.617.07-2.133-.023-1.125-.2-2.191-.755-2.849-1.484-.258-.284-.76-1.027-.729-1.08.014-.018.129-.089.258-.165.124-.07.596-.342 1.04-.6l.804-.466.17.249c.235.36.75.853 1.062 1.017.893.472 2.12.405 2.724-.137.258-.236.364-.48.364-.84 0-.325-.04-.467-.209-.711-.217-.312-.662-.574-1.924-1.12-1.444-.623-2.067-1.01-2.635-1.623a3.69 3.69 0 01-.77-1.4c-.106-.395-.133-1.386-.048-1.786.297-1.396 1.35-2.37 2.87-2.658.494-.093 1.64-.058 2.125.062z"
            ></path>
        </StyledIcon>
    );
};

export const FaunaIcon: FC<Props> = ({ className }: Props) => {
    return (
        <StyledIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={className}
            viewBox="0 0 40 40"
        >
            <path d="M21.6945 10.5028C19.7767 11.1429 18.8533 12.2911 18.2242 14.0793C18.0618 14.5569 17.6559 15.0852 17.1993 15.4408L18.7721 17.1275L13.7797 13.6323L0 4C0 4 0.994414 10.4621 1.33942 12.8397C1.58295 14.5162 1.99898 15.2681 3.3181 16.0302L3.84574 16.3147L6.11869 17.5136L4.76913 16.8125L10.9994 20.2163L10.9589 20.3078L4.25163 17.1986C4.60678 18.4179 5.29678 20.765 5.59104 21.8014C5.9056 22.919 6.26075 23.3255 7.34649 23.7217L9.34546 24.4533L10.5834 23.9656L9.01061 25.0121L1.14662 35C6.37237 30.1432 10.7965 28.4159 14.0334 27.0036C18.1633 25.2153 20.6493 24.0672 22.2728 19.942C23.4296 17.0462 24.3327 13.3376 25.4793 11.9049L27.9248 8.77548C27.9248 8.77548 22.8614 10.1167 21.6945 10.5028Z" fill="#3F00A5" />
        </StyledIcon>
    );
};

export const FluentIcon: FC<Props> = ({ className }: Props) => {
    return (
        <StyledIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={className}
            viewBox="0 0 2499.6 2500"
        >
            <path d="m1187.9 1187.9h-1187.9v-1187.9h1187.9z" fill="#f1511b" /><path d="m2499.6 1187.9h-1188v-1187.9h1187.9v1187.9z" fill="#80cc28" /><path d="m1187.9 2500h-1187.9v-1187.9h1187.9z" fill="#00adef" /><path d="m2499.6 2500h-1188v-1187.9h1187.9v1187.9z" fill="#fbbc09" />
        </StyledIcon>
    );
};

export const BlueprintIcon: FC<Props> = ({ className }: Props) => {
    return (
        <StyledIcon
            /* width="256px" height="298px" */ viewBox="0 0 298 298" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
        >
            <g>
                <polyline fill="#00B46F" points="192 112.384 256 150.326857 256 224.768 192 261.248 128 224.768 128 150.345143"></polyline>
                <polyline fill="#2294D9" points="128 0 192 37.9428571 192 112.384 128 148.864 64 112.384 64 37.9611429"></polyline>
                <polyline fill="#2294D9" points="192 37.9428571 256 75.8857143 256 150.336 192 186.816 128 150.336 128 75.8857143"></polyline>
                <polyline fill="#F85551" points="64 37.9428571 128 75.8857143 128 150.336 64 186.816 0 150.336 0 75.8857143"></polyline>
                <polyline fill="#F85551" points="64 112.384 128 150.326857 128 224.768 64 261.248 0 224.768 0 150.345143"></polyline>
                <polyline fill="#00B46F" points="128 148.873143 192 186.816 192 261.257143 128 297.737143 64 261.257143 64 186.816"></polyline>
                <path d="M192,37.9428571 L128,75.8857143 L64,37.9428571 L128,0 L192,37.9428571 Z M256,75.8857143 L192,113.846857 L128,75.904 L192,37.9611429 L256,75.904 L256,75.8857143 Z" fill="#30B2E9"></path>
                <polyline fill="#00AB64" points="128 223.305143 128 148.882286 64 186.825143 64 261.248"></polyline>
                <polyline fill="#00CE8E" points="192 186.816 128 223.296 64 186.816 128 148.873143"></polyline>
                <polygon fill="#00C783" points="128 223.305143 64 186.825143 128 148.882286"></polygon>
                <polygon fill="#2CAEE7" points="128 75.8857143 64 37.9428571 128 0"></polygon>
                <polyline fill="#FB716C" points="128 75.8857143 64 113.846857 0 75.904 64 37.9611429"></polyline>
                <polyline fill="#1F8ED6" points="256 150.336 192 186.816 128 148.873143 192 113.856"></polyline>
                <polygon fill="#F64743" points="63.0125714 260.626286 0 224.146286 63.0125714 186.185143 63.0125714 260.626286"></polygon>
                <polyline fill="#F96560" points="64 113.846857 64 37.9611429 128 75.904 128 148.864"></polyline>
                <polyline fill="#B71D1D" points="128 148.873143 128 75.8857143 64 113.846857 64 186.806857"></polyline>
                <polygon fill="#B21A1A" points="128 148.873143 64 113.856 128 75.8857143"></polygon>
                <polygon fill-opacity="0.2" fill="#10161A" /* style="mix-blend-mode: soft-light;" */ points="256 224.768 192 186.825143 256 150.345143 256 224.768"></polygon>
                <path d="M192,261.257143 L192,186.816 L128,223.296 L128,297.746286 L192,261.266286 L192,261.257143 Z M256,224.777143 L256,150.336 L192,186.816 L192,261.257143 L256,224.777143 Z" fill="#007233"></path>
                <polygon fill="#00682C" points="256 224.768 192 186.825143 256 150.345143 256 224.768"></polygon>
                <polyline fill="#0759BA" points="256 150.336 256 75.8857143 192 113.846857 192 186.806857"></polyline>
                <polygon fill="#0860BF" points="256 150.336 192 113.856 256 75.8857143"></polygon>
                <path d="M0,75.8857143 L64,112.384 L128,75.904 L65.4628571,114.578286 L64,186.514286 C64,186.541714 64,186.514286 64,186.514286 L62.5371429,114.56 L0,75.8857143 Z" fill="#FEBCB7" opacity="0.78"></path>
                <polyline fill="#4EDCF8" opacity="0.78" points="128 75.8857143 192 112.384 256 75.904 193.462857 114.578286 192 186.806857 190.537143 114.578286"></polyline>
                <path d="M64,186.816 L128,221.851429 L192,186.816 L129.462857,224.027429 L128,297.691429 C128,297.718857 128,297.691429 128,297.691429 L126.537143,224.036571 L64,186.825143 L64,186.816 Z" fill="#00F3C9" opacity="0.78"></path>
            </g>
        </StyledIcon>
    );
};

export const CloudinaryIcon: FC<Props> = ({ className }: Props) => {
    return (
        <StyledIcon
        /* width="256px" height="168px" */ viewBox="0 0 256 168" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
        >
            <g>
                <path d="M218.621451,161.618939 C215.360833,161.618939 212.325156,159.543784 211.255171,156.275009 C209.923769,152.205759 212.142772,147.826451 216.213984,146.495028 C230.962755,141.66786 240.491296,128.740696 240.491296,113.560042 C240.491296,94.3344571 224.850871,78.6917573 205.625591,78.6917573 C204.290136,78.6917573 202.853357,78.7971363 201.104499,79.0241064 L193.523411,80.0069681 L192.435188,72.4379198 C187.776295,39.9811923 159.502751,15.5048965 126.667585,15.5048965 C99.522794,15.5048965 75.3569387,31.7555519 65.1089949,56.9066786 L63.1797795,61.6386003 L58.0730327,61.7318202 C34.6042889,62.1634687 15.5107301,81.599812 15.5107301,105.056769 C15.5107301,122.180854 25.4526744,137.797209 40.8377623,144.839362 C44.7306435,146.622699 46.4430248,151.222897 44.6597165,155.11584 C42.8764081,159.008783 38.2783095,160.717138 34.3854283,158.939881 C13.4964022,149.378765 0,128.230013 0,105.056769 C0,74.9021669 23.2336713,49.6416082 52.7453988,46.5390077 C66.3431254,18.1069468 94.8416095,1.42108547e-14 126.665558,1.42108547e-14 C164.755405,1.42108547e-14 197.866173,26.7054667 206.452397,63.1949669 C233.848473,63.6387745 256,86.0622067 256,113.562069 C256,135.231636 241.94834,154.38832 221.037023,161.231874 C220.236561,161.493295 219.421913,161.618939 218.621451,161.618939 Z" fill="#0071CE"></path>
                <path d="M100.01656,164.973281 C100.014536,164.971257 100.014536,164.971257 100.012512,164.971257 C100.010489,164.971257 100.008465,164.969233 100.006441,164.969233 L100.004418,164.969233 L100.002394,164.967209 L100.00037,164.965186 C100.00037,164.965186 99.9983464,164.965186 99.9983464,164.963162 L99.9963227,164.963162 L99.994299,164.961138 C99.9963227,164.959115 99.9922752,164.959115 99.9922752,164.959115 L99.9902515,164.957091 L99.9882278,164.957091 L99.9862041,164.955067 C99.9882278,164.957091 99.9841804,164.953043 99.9841804,164.953043 C99.9841804,164.953043 99.9801329,164.95102 99.9781092,164.95102 L99.9760855,164.948996 L99.9760855,164.948996 L99.9740618,164.946972 L99.9720381,164.944949 C99.9659669,164.942925 99.9679907,164.942925 99.9659669,164.942925 C99.9639432,164.944949 99.9639432,164.940901 99.9619195,164.940901 L99.9598958,164.938877 C99.9598958,164.938877 99.9578721,164.936854 99.9558484,164.936854 L99.9538246,164.93483 C99.9518009,164.932806 99.9477535,164.932806 99.9457298,164.932806 C99.9437061,164.932806 99.9396586,164.930783 99.9376349,164.930783 C99.9356112,164.928759 99.9356112,164.928759 99.9335875,164.928759 L99.9315638,164.928759 C99.9295401,164.926735 99.9275163,164.926735 99.9254926,164.926735 C99.9234689,164.924711 99.9194215,164.924711 99.9194215,164.924711 L99.9173978,164.924711 L99.9133503,164.922688 C99.9113266,164.922688 99.9113266,164.920664 99.9113266,164.920664 L99.9093029,164.920664 C99.7899037,164.878166 99.6624096,164.851858 99.5288444,164.845787 L99.524797,164.845787 L99.5207495,164.845787 L99.5167021,164.845787 C99.5167021,164.845787 99.5167021,164.845787 99.5146784,164.845787 L99.5126547,164.845787 L99.510631,164.845787 L99.5086073,164.843763 L99.5045598,164.843763 L99.5005124,164.843763 L99.4984887,164.843763 L99.496465,164.843763 L99.4944412,164.843763 L99.4903938,164.843763 L99.4883701,164.843763 L99.4903938,164.843763 L99.4883701,164.843763 L99.4863464,164.843763 L99.4843227,164.843763 L99.482299,164.843763 L99.4802752,164.843763 L99.4782515,164.843763 L99.4762278,164.843763 L99.4742041,164.843763 C96.1229314,164.843763 93.380797,162.115794 93.3605598,158.772617 L93.3605598,90.6422134 L98.5554373,90.6422134 L98.5817456,90.6422134 C99.3770658,90.6766166 99.9194215,90.0654545 99.9194215,89.3308458 C99.9194215,88.782419 99.5834847,88.312917 99.1058879,88.1166166 L74.0543148,70.8259921 C73.6050499,70.5163636 73.0121013,70.5163636 72.5628365,70.8259921 L47.314963,88.2522055 C46.8414136,88.5780237 46.6370183,89.1750198 46.8070104,89.7234466 C46.9790262,90.2718735 47.4849551,90.6442372 48.0596903,90.6442372 L53.280876,90.6442372 L53.2849235,158.79083 C53.3112318,163.50204 57.0955796,167.347099 61.9099986,167.468522 C61.9646389,167.474593 62.0172555,167.47864 62.0718958,167.47864 L99.4721804,167.47864 L99.4944412,167.47864 C99.8384729,167.472569 100.150125,167.334957 100.380829,167.114372 C100.380829,167.114372 100.380829,167.114372 100.382852,167.112348 C100.3869,167.1083 100.390947,167.104253 100.392971,167.102229 C100.394995,167.100206 100.397018,167.100206 100.399042,167.096158 L100.401066,167.094134 L100.403089,167.092111 L100.405113,167.090087 L100.407137,167.088063 L100.409161,167.08604 L100.411184,167.084016 C100.415232,167.081992 100.413208,167.081992 100.415232,167.079968 C100.415232,167.079968 100.415232,167.079968 100.417255,167.077945 L100.419279,167.075921 C100.419279,167.075921 100.419279,167.075921 100.421303,167.073897 C100.647959,166.839146 100.789619,166.521423 100.791643,166.169296 L100.791643,166.165249 L100.791643,166.163225 L100.791643,166.161202 L100.791643,166.159178 L100.791643,166.157154 L100.791643,166.15513 L100.791643,166.153107 L100.791643,166.149059 C100.781524,165.630988 100.467848,165.177676 100.01656,164.973281 Z" fill="#DC8327"></path>
                <path d="M154.124635,164.973281 C154.124635,164.973281 154.122611,164.971257 154.120588,164.971257 C154.118564,164.971257 154.11654,164.969233 154.114516,164.969233 L154.112493,164.969233 L154.110469,164.967209 L154.108445,164.965186 L154.106422,164.965186 L154.104398,164.963162 L154.102374,164.961138 C154.104398,164.959115 154.10035,164.959115 154.098327,164.959115 L154.096303,164.957091 L154.094279,164.957091 C154.092256,164.957091 154.092256,164.955067 154.092256,164.955067 C154.088208,164.957091 154.088208,164.953043 154.088208,164.953043 L154.084161,164.95102 L154.082137,164.948996 L154.080113,164.948996 L154.07809,164.946972 L154.076066,164.944949 C154.074042,164.942925 154.072018,164.942925 154.072018,164.942925 C154.069995,164.944949 154.069995,164.940901 154.065947,164.940901 L154.063924,164.938877 L154.0619,164.936854 C154.0619,164.936854 154.059876,164.936854 154.057852,164.93483 C154.055829,164.932806 154.051781,164.932806 154.049758,164.932806 C154.047734,164.932806 154.043686,164.930783 154.041663,164.930783 C154.039639,164.928759 154.039639,164.928759 154.037615,164.928759 C154.035592,164.928759 154.035592,164.928759 154.033568,164.926735 C154.033568,164.926735 154.031544,164.926735 154.02952,164.924711 C154.023449,164.922688 154.027497,164.922688 154.025473,164.922688 C154.019402,164.922688 154.023449,164.922688 154.021426,164.920664 C154.021426,164.920664 154.019402,164.91864 154.017378,164.91864 L154.015354,164.916617 L154.013331,164.916617 C153.893931,164.874119 153.766437,164.84781 153.632872,164.841739 L153.628825,164.841739 L153.626801,164.841739 L153.622754,164.841739 L153.62073,164.841739 L153.618706,164.841739 L153.616682,164.841739 L153.614659,164.839715 L153.610611,164.839715 L153.606564,164.839715 L153.60454,164.839715 L153.602516,164.839715 L153.600493,164.839715 L153.596445,164.839715 L153.592398,164.839715 L153.590374,164.839715 L153.58835,164.839715 L153.586327,164.839715 L153.584303,164.839715 L153.582279,164.839715 L153.580256,164.839715 L153.578232,164.839715 L153.576208,164.839715 L153.574184,164.839715 C150.224935,164.839715 147.482801,162.111747 147.462564,158.768569 L147.462564,105.899004 L152.681726,105.899004 C152.699939,105.89698 152.714105,105.89698 152.734343,105.899004 C153.458833,105.899004 154.04571,105.312126 154.04571,104.587636 C154.04571,104.039209 153.709773,103.569708 153.232177,103.373407 L128.17858,86.0827826 C127.729315,85.7731542 127.136366,85.7731542 126.687101,86.0827826 L101.449346,103.506972 C100.975797,103.832791 100.771402,104.429787 100.941394,104.978213 C101.11341,105.52664 101.619339,105.899004 102.194074,105.899004 L107.390975,105.899004 L107.395022,158.788806 C107.417283,163.50204 111.207702,167.349123 116.024145,167.468522 C116.076761,167.474593 116.129378,167.476617 116.181995,167.476617 L153.582279,167.476617 L153.60454,167.476617 C153.948572,167.470545 154.260224,167.332933 154.490928,167.112348 C154.490928,167.112348 154.490928,167.112348 154.492951,167.110324 C154.496999,167.106277 154.505094,167.102229 154.50307,167.100206 C154.505094,167.098182 154.507117,167.098182 154.509141,167.094134 L154.511165,167.092111 L154.513188,167.090087 L154.515212,167.088063 C154.515212,167.088063 154.517236,167.088063 154.517236,167.08604 L154.51926,167.084016 C154.521283,167.084016 154.521283,167.081992 154.521283,167.081992 C154.527354,167.079968 154.525331,167.079968 154.525331,167.077945 C154.525331,167.077945 154.525331,167.077945 154.527354,167.075921 C154.527354,167.075921 154.527354,167.075921 154.529378,167.073897 C154.529378,167.073897 154.529378,167.073897 154.531402,167.071874 C154.758058,166.837123 154.899718,166.519399 154.901742,166.167273 L154.901742,166.163225 L154.901742,166.161202 L154.901742,166.159178 L154.901742,166.157154 L154.901742,166.15513 L154.901742,166.153107 L154.901742,166.151083 L154.901742,166.147036 C154.889599,165.630988 154.575924,165.177676 154.124635,164.973281 Z" fill="#F4B21B"></path>
                <path d="M208.37438,164.973281 L208.370333,164.971257 C208.368309,164.971257 208.366285,164.969233 208.364262,164.969233 L208.362238,164.969233 L208.360214,164.967209 L208.358191,164.965186 C208.356167,164.965186 208.356167,164.965186 208.356167,164.963162 L208.354143,164.963162 L208.352119,164.961138 L208.350096,164.959115 C208.350096,164.959115 208.348072,164.959115 208.348072,164.957091 L208.346048,164.957091 L208.344025,164.955067 C208.342001,164.957091 208.342001,164.953043 208.339977,164.953043 C208.342001,164.95102 208.337953,164.95102 208.33593,164.95102 L208.333906,164.948996 L208.331882,164.948996 L208.329859,164.946972 L208.327835,164.944949 C208.321764,164.942925 208.323787,164.942925 208.323787,164.942925 C208.321764,164.944949 208.321764,164.940901 208.317716,164.940901 L208.315693,164.938877 C208.317716,164.936854 208.313669,164.936854 208.311645,164.936854 C208.311645,164.936854 208.309621,164.936854 208.309621,164.93483 C208.307598,164.932806 208.30355,164.932806 208.301527,164.932806 C208.299503,164.932806 208.295455,164.930783 208.293432,164.930783 L208.289384,164.928759 C208.289384,164.928759 208.287361,164.928759 208.285337,164.926735 L208.281289,164.924711 C208.275218,164.922688 208.275218,164.922688 208.277242,164.922688 C208.271171,164.922688 208.271171,164.922688 208.273195,164.920664 C208.271171,164.920664 208.271171,164.91864 208.271171,164.91864 C208.269147,164.91864 208.267123,164.916617 208.267123,164.916617 L208.2651,164.916617 C208.1457,164.874119 208.018206,164.84781 207.884641,164.841739 L207.882617,164.841739 L207.87857,164.841739 L207.872499,164.841739 L207.870475,164.841739 L207.868451,164.841739 L207.866428,164.841739 C207.864404,164.839715 207.864404,164.839715 207.86238,164.839715 L207.858333,164.839715 L207.854285,164.839715 L207.852262,164.839715 L207.850238,164.839715 L207.848214,164.839715 L207.844167,164.839715 L207.840119,164.839715 C207.840119,164.839715 207.840119,164.839715 207.838096,164.839715 L207.836072,164.839715 L207.834048,164.839715 L207.832025,164.839715 L207.830001,164.839715 L207.827977,164.839715 L207.825953,164.839715 L207.834048,164.839715 L207.832025,164.839715 C204.482776,164.839715 201.740641,162.111747 201.720404,158.768569 L201.720404,121.149723 L206.927424,121.149723 L206.953732,121.149723 C207.692388,121.13151 208.291408,120.572964 208.291408,119.838356 C208.291408,119.289929 207.955471,118.820427 207.477874,118.624126 L182.424278,101.333502 C181.977036,101.023874 181.382064,101.023874 180.932799,101.333502 L155.684926,118.757692 C155.211376,119.08351 155.006981,119.680506 155.176973,120.228933 C155.348989,120.77736 155.854918,121.149723 156.429653,121.149723 L161.636673,121.149723 L161.64072,158.788806 C161.667029,163.50204 165.455424,167.351146 170.269843,167.468522 C170.322459,167.474593 170.375076,167.476617 170.427693,167.476617 L207.827977,167.476617 L207.850238,167.476617 C208.19427,167.470545 208.505922,167.332933 208.736625,167.112348 L208.738649,167.110324 C208.742697,167.106277 208.748768,167.102229 208.748768,167.100206 C208.750791,167.098182 208.752815,167.098182 208.754839,167.094134 L208.756863,167.092111 L208.758886,167.090087 L208.76091,167.088063 L208.762934,167.08604 L208.764957,167.084016 L208.766981,167.081992 C208.773052,167.079968 208.769005,167.079968 208.771029,167.077945 C208.771029,167.077945 208.771029,167.077945 208.773052,167.075921 L208.775076,167.073897 C208.775076,167.073897 208.775076,167.073897 208.7771,167.071874 C209.003756,166.837123 209.145416,166.519399 209.14744,166.167273 L209.14744,166.163225 L209.14744,166.161202 L209.14744,166.159178 L209.14744,166.157154 L209.14744,166.15513 L209.14744,166.153107 L209.14744,166.151083 L209.14744,166.147036 C209.139345,165.630988 208.823645,165.177676 208.37438,164.973281 Z" fill="#F2D864"></path>
            </g>
        </StyledIcon>
    );
};

export const ReactRouterIcon: FC<Props> = ({ className }: Props) => {
    return (
        <StyledIcon
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" /* width="1.83em" height="1em" */ preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 140"
        >
            <path d="M78.066 92.588c12.818 0 23.209-10.391 23.209-23.21c0-12.817-10.391-23.208-23.21-23.208c-12.817 0-23.208 10.39-23.208 23.209c0 12.818 10.391 23.209 23.209 23.209zm-54.857 46.417c12.818 0 23.209-10.39 23.209-23.209c0-12.817-10.391-23.208-23.21-23.208C10.392 92.588 0 102.978 0 115.796c0 12.818 10.39 23.21 23.209 23.21zm209.582 0c12.818 0 23.209-10.39 23.209-23.209c0-12.817-10.39-23.208-23.209-23.208c-12.818 0-23.209 10.39-23.209 23.208c0 12.818 10.391 23.21 23.21 23.21z" fill="#000" /><path d="M156.565 70.357c-.742-7.754-1.12-14.208-7.06-18.744c-7.522-5.744-16.044-2.017-26.54-5.806C112.65 43.312 105 34.155 105 23.24C105 10.405 115.578 0 128.626 0c9.665 0 17.974 5.707 21.634 13.883c5.601 10.64 1.96 21.467 8.998 26.921c8.333 6.458 19.568 1.729 32.104 7.848a23.614 23.614 0 0 1 9.84 8.425A22.858 22.858 0 0 1 205 69.718c0 10.915-7.65 20.073-17.964 22.568c-10.497 3.789-19.019.062-26.541 5.806c-8.46 6.46-3.931 17.267-10.826 28.682c-3.913 7.518-11.867 12.663-21.043 12.663c-13.048 0-23.626-10.405-23.626-23.24c0-9.323 5.582-17.364 13.638-21.066c12.536-6.12 23.77-1.39 32.104-7.848c4.807-3.726 5.823-9.473 5.823-16.926z" fill="#D0021B" />
        </StyledIcon>
    );
};