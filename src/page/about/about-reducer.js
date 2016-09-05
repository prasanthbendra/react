export default (state = {
        about: null,
        skills: [],
        team: [],
        fetching: false,
        fetched: false,
        error: null
    }, action) => {

    switch(action.type){
        case "ABOUT_FETCH": {
            return {
                ...state,
                fetching: true
            }
            break;
        }
        case "ABOUT_FETCH_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        }
        case "ABOUT_FETCH_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                about: action.payload.data
            }
            break;
        }
        case "TEAM_FETCH": {
            return {
                ...state,
                fetching: true
            }
            break;
        }
        case "TEAM_FETCH_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        }
        case "TEAM_FETCH_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                team: action.payload.data
            }
            break;
        }
    }

    return state;
}
