import axios from 'axios';

export function fetchAbout(){
    return {
        type: "ABOUT_FETCH",
        payload: axios.get('/api/about')
    }
}

export function fetchTeam(){
    return {
        type: "TEAM_FETCH",
        payload: axios.get('/api/team')
    }
}
