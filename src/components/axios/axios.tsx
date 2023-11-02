import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE3M2E1MTFmMTYxY2FmNWZkYjdlODM4ZDc2Y2EzNCIsInN1YiI6IjY1NDA1MDVjNjNlNmZiMDExZTIzZjEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oRhD1WPcYGYkg8XPstG1SWyGEkeTtHvgjaFxUn2Zlps',
        'accept': 'application/json'
    }
})

export default instance;