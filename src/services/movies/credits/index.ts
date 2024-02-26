import { BaseURL } from '../../movieApi/movieApi';
import { MovieCreditsResponse } from '../../../types/credits';

export const credits = async ( id: string ): Promise<MovieCreditsResponse> => {

    if (!id) throw new Error("No id provided");
    
      const response = await BaseURL.get<MovieCreditsResponse>(`/movie/${id}/credits`);
      return response.data;
};