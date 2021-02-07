import React from 'react';
// Style and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Coin = ({ rank, image, name, price, mkt, pc_24h, id, circulating, low, high }) => {
    // Number Format 
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    // Captialize Function
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <StyleCoin>
            <td>{rank}</td>
            <td><img src={image} alt="logo" /></td>
            <td>{capitalizeFirstLetter(id)}</td>
            <td>{name.toUpperCase()}</td>
            <td>{currencyFormat(price)}</td>
            <td>{currencyFormat(low)}</td>
            <td><p>{pc_24h.toFixed(1)}%</p></td>
            <td>{currencyFormat(high)}</td>
            <td>{currencyFormat(circulating)}</td>
            <td>{currencyFormat(mkt)}</td>
        </StyleCoin>
    )
}

const StyleCoin = styled(motion.tr)`
    color: black;
    td {
        border: 1px solid #e3e3e3;
        padding: 1rem 1rem;
        /* p {
            color: ${({ percentageChange }) => (percentageChange ? 'blue' : 'yellow')}
        } */
        img {
            width: 3rem;
        }
    }
`;

export default Coin;
