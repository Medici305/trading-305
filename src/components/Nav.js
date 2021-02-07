import React from 'react';
// Style and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/blockchain.svg';
import { fadeIn } from '../animations';
// Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

const Nav = () => {
    return (
        <StyleNav style={fadeIn}>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>| Cripto</h1>
            </Logo>
            <div className="dark-mode">
                <FontAwesomeIcon size='2x' icon={faMoon} />
            </div>
        </StyleNav>
    )
}

const StyleNav = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 10vh;
    padding: .5rem 5rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
    img {
        width: 3.5rem;
        margin-right: .5rem;
    }
    svg {
        cursor: pointer;
        &:hover {
            color: #535353;
        }
    }
`;

const Logo = styled(motion.div)`
    display: flex;
`

export default Nav;