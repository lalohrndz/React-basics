import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";

export default function ComponentesEstilizados(){
    let mainColor = "#db7093",
    mainAlfaColor80 = "#db709380";

    const setTransitionTime = (time) => `background-color ${time} ease-in-out`;
    
    const fadeIn = keyframes`
        0%{
            opacity:0;
        }

        100%{
            opacity:1;
        }
    `

    const MyH3 = styled.h3`
        padding:2rem;
        text-align:center;
        background-color:${mainColor};
        color:${(props)=>props.color};
        color:${({color})=>color};
        color:${({color})=>color || "#000"};
        animation:${fadeIn} 5s ease-out;

        ${(props)=>props.isButton && css`
            margin:auto;
            max-width:50%;
            border-radius:0.25rem;
            cursor:pointer;
        `}

        &:hover{
            background-color:${mainAlfaColor80};
            transition:${setTransitionTime("1s")};
        }
    `;

    const light = {
        color:"#000",
        bgColor:"#f0f0f0"
    }

    const dark = {
        color:"#DDD",
        bgColor:"#222"
    }

    const Box = styled.div`
      padding:1rem;
      margin:1rem;
      color:${({theme})=>theme.color};
      background-color:${({theme})=>theme.bgColor}
    `;

    const BoxRounded = styled(Box)`
        border-radius:1rem;
    `;

    const GlobalStyle = createGlobalStyle`
        h2{
            color:#61dafb;
        }
    `;

    return(
        <>
            <GlobalStyle></GlobalStyle>

            <h3>Componentes Estilizados</h3>

            <MyH3>Hola soy un h3 estilizado con styled components</MyH3>
            <MyH3 color="#64dafb">Hola soy un h3 estilizado con styled components</MyH3>
            <MyH3 isButton color="#fff">Soy un h3 estilizado como boton</MyH3>
            
            <ThemeProvider theme={light}>
              <Box>Soy una caja light</Box>
            </ThemeProvider>

            <ThemeProvider theme={dark}>
            <Box>Soy una caja dark</Box>
            </ThemeProvider>

            <ThemeProvider theme={light}>
                <BoxRounded>Soy una caja redondeada light</BoxRounded>
            </ThemeProvider>

            <ThemeProvider theme={dark}>
                <BoxRounded>Soy una caja redondeada dark</BoxRounded>
            </ThemeProvider>
        </>
    )
}