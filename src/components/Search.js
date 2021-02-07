import React from 'react';
// Style and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Background Image
import logo from '../img/Cryptocurrency_logos.jpg';

const Search = () => {
    return (
        <StyleSearch>
            <StyleInput>
                <input type="text" placeholder='Search Coin...' />
                <button>Search</button>
            </StyleInput>
        </StyleSearch>
    )
}

const StyleSearch = styled(motion.div)`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${logo});
    background-repeat:  no-repeat;
    /* background-size: cover; */
    background-position: center;
    p {
        padding: 2rem 10rem;
    }
`;

const StyleInput = styled(motion.div)`
`;

export default Search;