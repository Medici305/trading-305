import React from 'react';
// Style and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/blockchain.svg';

const Nav = () => {
    return (
        <StyleNav>
            <StyleLogo>
                <img src={logo} alt="logo" />
                <h1>| Cripto</h1>
            </StyleLogo>
            <Search>
                <input type="text" placeholder='enter cripto' />
                <button>Search</button>
            </Search>
        </StyleNav>
    )
}

const StyleNav = styled(motion.div)`
    //border: 3px solid white;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    img {
        width: 4rem;
        margin-right: 2rem;
    }
`;

const StyleLogo = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    //border: 2px solid #fff;
    margin-bottom: 2rem;
`;

const Search = styled(motion.div)`
    //border: 2px solid #fff;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: .5rem;
        border: none;
        outline: none;
        box-shadow: 0 0 5px 3px gray;
        background: transparent;
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
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
    }
`;

export default Nav;