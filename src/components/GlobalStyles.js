import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background:#fff;
        color: black;
        font-family: 'Lato';
    }

    h1 {
        font-family: 'Cookie', sans-serif;
        font-size: 3rem;
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #76bfff;
        color: white;
        border-top-right-radius: .5rem;
        border-bottom-right-radius: .5rem;
    };

    input {
        font-size: 1.5rem;
        padding: .5rem;
        border: none;
        outline: none;
        background: white;
        box-shadow: 0 0 5px 3px gray;
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
        color: black;
    }
`;

export default GlobalStyle;