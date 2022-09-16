import { BaseURL } from "../../../api";
import { moviePopularResponse } from '../../../types/popular';

export const search = async ( query: string ): Promise<moviePopularResponse> => {

    const params = {
        query
    }

    const { data } = await BaseURL.get<moviePopularResponse>(`/search/movie`, {
        params,
    });
    return data;
}