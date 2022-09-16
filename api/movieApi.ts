import axios from "axios"

const headersList = {
    Accept: "*/*",
};

export const BaseURL = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: headersList,
    params: {
        api_key: process.env.NEXT_APP_MOVIE_API_KEY
    },
});