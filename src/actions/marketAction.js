import axios from 'axios';
import { listAllURL } from '../api';

export const loadMarket = () => async (dispatch) => {
    const marketData = await axios.get(listAllURL())

    dispatch({
        type: 'FETCH_MARKET',
        payload: {
            market: marketData.data
        }
    })
}