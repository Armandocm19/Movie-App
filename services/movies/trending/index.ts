
import { BaseURL } from "../../../api";
import { moviePopularResponse } from '../../../types/popular';

const params = {
    lenguage: 'en-US',
    page: 1
}

export const trending = async (): Promise<moviePopularResponse> => {
    const { data } = await BaseURL.get<moviePopularResponse>('/trending/movie/day', {
        params,
    });
    return data;
}