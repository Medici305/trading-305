import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #090302;
        color: #fff;
    }

    h1 {
        font-family: 'Cookie', sans-serif;
        font-size: 4rem;
    }
`;

export default GlobalStyle;