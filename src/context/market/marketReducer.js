import { 
    FETCH_MARKETS, 
    CLEAR_MARKETS, 
    FETCH_FAILED} from '../types';

export default (state, action) => {
    switch(action.type){
        case FETCH_MARKETS: 
            return {
                ...state,
                markets: action.payload
            }
        case FETCH_FAILED:
        case CLEAR_MARKETS: {
            return {
                ...state,
                markets: null
            }
        }
        default: 
            return state;
    }
}