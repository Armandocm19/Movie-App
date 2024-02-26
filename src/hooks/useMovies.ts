"use client"
import useSWR, { SWRConfiguration } from 'swr'
import { IMovie } from '../interfaces'

export const useMovies = ( url: string, config: SWRConfiguration = {} ) => {

    const { data, error } = useSWR<IMovie[]>(`/api${url}`, config);

    return {
        movies: data || [],
        isLoading: !error && !data,
        isError: error
    }

}