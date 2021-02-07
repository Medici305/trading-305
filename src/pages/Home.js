import React, { useEffect } from 'react';
import Coin from '../components/Coin';
import Search from '../components/Search';
// Style and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadMarket } from '../actions/marketAction';

/*
high_24h: 38615
id: "bitcoin"
low_24h: 36244
name: "Bitcoin"
price_change_24h: -216.588536
price_change_percentage_24h: -0.586
*/

const Home = () => {
    // Dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMarket())
    }, [dispatch]);
    // Selector
    const { market } = useSelector(state => state.list);
    console.log(market);
    return (
        <div>
            <Search />
            <StyleHome>
                <Table>
                    <tbody>
                        <Row style={{ background: 'black' }}>
                            <th>#</th>
                            <th colSpan='3'>Coin</th>
                            <th>Price</th>
                            <th>High 24h</th>
                            <th>24h</th>
                            <th>Low 24h</th>
                            <th>Circulating Supply</th>
                            <th>Market Capital</th>
                        </Row>
                        {market.map((state) => (
                            <Coin
                                rank={state.market_cap_rank}
                                image={state.image}
                                name={state.symbol}
                                price={state.current_price}
                                circulating={state.circulating_supply}
                                mkt={state.market_cap}
                                key={state.market_cap_rank}
                                pc_24h={state.price_change_percentage_24h}
                                low={state.low_24h}
                                high={state.high_24h}
                                id={state.id}
                            />
                        ))}
                    </tbody>
                </Table>
            </StyleHome>
        </div>
    )
}

const StyleHome = styled(motion.div)`
    background: #fff;
    padding: 5rem 5rem;
    overflow-x: auto;
`;

const Table = styled(motion.table)`
    border-collapse: collapse;
    width: 100%;
    background: #e0e0e0;
    box-shadow:  28px 28px 54px #949494,
             -28px -28px 54px #ffffff;
`;

const Row = styled(motion.tr)`
    th {
        text-align: left;
        background: #76bfff;
        color: #fff;
        padding: 1.5rem 2rem;
    }
`;

export default Home;