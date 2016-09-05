import axios from 'axios';

export function fetchServices(){
    return {
        type: "FETCH_SERVICES",
        payload: axios.get('/api/marketing')
    }
}
