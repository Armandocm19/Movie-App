import { BaseURL } from '@/services/movieApi';
import { moviePopularResponse } from '../../../types/popular';

const params = {
    lenguage: 'en-US',
    page: 1
}

export const recommendations = async ( id: string ): Promise<moviePopularResponse> => {

    if (!id) throw new Error("No id provided");

    const { data } = await BaseURL.get<moviePopularResponse>(`/movie/${id}/recommendations`, {
        params,
    });
    return data;
}