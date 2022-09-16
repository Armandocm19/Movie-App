export interface moviePopularResponse {
    page: number,
    results: popularResults[],
    total_results: number,
    total_pages: number,
}

export interface popularResults {
    poster_path?: string,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_lenguage: string,
    title: string,
    backdrop_path?: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,

}