import { BaseURL } from "../../../api";
import { moviePopularResponse } from '../../../types/popular';

const params = {
    lenguage: 'en-US',
    page: 1
}

export const popular = async (): Promise<moviePopularResponse> => {
    const { data } = await BaseURL.get<moviePopularResponse>('/movie/popular', {
        params,
    });
    return data;
}