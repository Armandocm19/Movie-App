
import { GetServerSideProps, NextPage } from "next";
import { Grid, Text } from "@nextui-org/react";

import { MovieLayout } from "../../components/layout";
import { MovieOptions, MovieDetailInfo, MovieCast, MovieCard } from "../../components/movies";
import movieService from "../../services/movies"
import { Cast } from "../../types/credits";
import { MovieDetailResponse } from '../../types/detailmovie';
import { popularResults } from "../../types/popular";
import concatUrlImage from "../../utils/concatUrlImage";

interface Props {
    movie: MovieDetailResponse,
    movieCast: Cast[]
    moviesRecommendations: popularResults[]
}

const MoviePage: NextPage<Props> = ({ movie, movieCast, moviesRecommendations }) => {

    const img = concatUrlImage.originalImage( movie.backdrop_path );

    return(
       <>
       
        <MovieLayout title="Pelicula" pageDescription="Detalles de la película">

            <div className="movie-detail" style={{ background: `linear-gradient(rgba(10, 1.0, 0, 0.3), rgba(10, 1.0, 0, 0.3)), url(${img}) no-repeat center center/cover` }}></div>
            
            <Grid.Container css={{ position: "relative", bottom: "10rem" }}>

                <MovieOptions poster={concatUrlImage.w185Image(movie.poster_path)} />

                <MovieDetailInfo 
                    title={ movie.title } 
                    genres={ movie.genres }
                    duration={ movie.runtime }
                    lenguage={ movie.original_language }
                    release_date={ movie.release_date }
                    description={ movie.overview }
                    vote_average={ movie.vote_average }
                />

                <MovieCast movieCast={ movieCast } />

            </Grid.Container>

            <Text h3 weight="bold" size="2rem" className="text-recommendations">
                 Recommendations {`(${moviesRecommendations.length})`}
            </Text>

            <section className="container-list">

                {
                    moviesRecommendations.map( (movie, index) => (
                        <MovieCard key={index} movie={movie} />
                     ))
                }

            </section>

        </MovieLayout>
       
       </>
    )

}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params;

    try {
        const movie = await movieService.movie( id as string );
        const movieCast = await movieService.credits( id as string );
        const moviesRecommendations = await movieService.recommendations( id as string );
        return{
            props: {
                movie,
                movieCast: movieCast.cast,
                moviesRecommendations: moviesRecommendations.results
            },
    };
    } catch (error) {
        return {
            redirect: {
                destination: "/404",
                 permanent: false,
            },
        };
    }

}

export default MoviePage;

