export default (state = {
        services: [],
        slider: [],
        testimonials: [],
        works: [],
        fetching: false,
        fetched: false,
        error: null
    }, action) => {

    switch (action.type){
        case "FETCH_SERVICES": {
            return {
                ...state,
                fetching: true
            }
            break;
        }
        case "FETCH_SERVICES_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        }
        case "FETCH_SERVICES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                services: action.payload.data
            }
            break;
        }
    }

    return state;
}
