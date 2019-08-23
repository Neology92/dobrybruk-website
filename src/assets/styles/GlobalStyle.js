import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


    *, *::before, *::after{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Sansation", sans-serif;
    }

    html {
        font-size: 62.5%;
        margin:0; 
        padding:0;
    }

    body {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
    }

    h1,h2,h3,h4,h5,h6 {
        color: ${({ theme }) => theme.color.darkGreen};
        font-weight: 500;
        font-family: ${({ theme }) => theme.font.family.sansation};        
    }


`;

export default GlobalStyle;
