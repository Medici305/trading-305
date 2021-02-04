// Base_URL 

/*
    Come back later to cusomize number item on page and currency.
*/
const base_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

// Basic URL
export const listAllURL = () => base_url;