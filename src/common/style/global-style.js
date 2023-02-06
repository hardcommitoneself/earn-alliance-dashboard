import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Rubik;
        font-weight: 300;
        src: url('../public/fonts/Rubik/static/Rubik-Light.ttf');
    }

    @font-face {
        font-family: Rubik;
        font-weight: 400;
        src: url('../public/fonts/Rubik/static/Rubik-Regular.ttf');
    }

    @font-face {
        font-family: Rubik;
        font-weight: 500;
        src: url('../public/fonts/Rubik/static/Rubik-Medium.ttf');
    }

    @font-face {
        font-family: Rubik;
        font-weight: 600;
        src: url('../public/fonts/Rubik/static/Rubik-SemiBold.ttf');
    }

    @font-face {
        font-family: Rubik;
        font-weight: 700;
        src: url('../public/fonts/Rubik/static/Rubik-Bold.ttf');
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
