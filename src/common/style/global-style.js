import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Rubik;
        font-weight: 300;
        src: url('fonts/Rubik/static/Rubik-Light.ttf');
    }

    @font-face {
        font-family: Rubik;
        font-weight: 400;
        src: url('fonts/Rubik/static/Rubik-Regular.ttf');
    }

    @font-face {
        font-family: Rubik;
        font-weight: 500;
        src: url('fonts/Rubik/static/Rubik-Medium.ttf');
    }

    @font-face {
        font-family: Rubik;
        font-weight: 600;
        src: url('fonts/Rubik/static/Rubik-SemiBold.ttf');
    }

    @font-face {
        font-family: Rubik;
        font-weight: 700;
        src: url('fonts/Rubik/static/Rubik-Bold.ttf');
    }

    body {
        margin: 0;
        font-family: Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    select:not([size]) {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5em 1.5em;
        padding-right: 2.5rem;
        -webkit-print-color-adjust: exact;
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
    }
`;

export default GlobalStyle;
