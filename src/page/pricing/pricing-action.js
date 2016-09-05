import axios from 'axios';

export function fetchPricing(){
    return {
        type: "FETCH_PRICING",
        payload: axios.get('/api/pricing')
    }
}
