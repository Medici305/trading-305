const initialState = {
    market: []
}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MARKET':
            return {
                ...state,
                market: action.payload.market
            }
        default:
            return {
                ...state
            }
    }
}

export default marketReducer;