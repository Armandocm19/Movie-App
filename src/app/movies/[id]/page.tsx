import movieService from "../../../services/movies";

import { Cast } from "../../../types/credits";
import { MovieDetailResponse } from "../../../types/detailmovie";
import { popularResults } from "../../../types/popular";

import concatUrlImage from "../../../utils/concatUrlImage";

import { MovieOptions, MovieCast, MovieList } from "../../../components/movies";
import { MovieDetailInfo } from "../../../components/movies/MovieDetailInfo";

import { NotFoundComponent } from "@/components/common";

interface Props {
  movie: MovieDetailResponse | null;
  movieCast: Cast[];
  moviesRecommendations: popularResults[];
}

const getData = async (id: string | string[]): Promise<Props> => {
  try {
    const movie = await movieService.movie(id as string);
    const movieCast = await movieService.credits(id as string);
    const moviesRecommendations = await movieService.recommendations(
      id as string
    );
    return {
      movie,
      movieCast: movieCast.cast,
      moviesRecommendations: moviesRecommendations.results,
    };
  } catch (error) {
    console.log(error);
    return {
      movie: null,
      movieCast: [],
      moviesRecommendations: [],
    };
  }
};

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage(props: MoviePageProps) {
  const { params } = props;
  const { id } = params;
  const { movie, movieCast, moviesRecommendations } = await getData(id);
  const img = concatUrlImage.originalImage(movie?.backdrop_path ?? "");
  return movie ? (
    <>
      <div
        className="movie-detail"
        style={{
          background: `linear-gradient(rgba(10, 1.0, 0, 0.3), rgba(10, 1.0, 0, 0.3)), url(${img}) no-repeat center center/cover`,
        }}
      ></div>

      <section className="relative bottom-5 grid grid-cols-1 lg:grid-cols-[320px_minmax(0,50%)_minmax(0,_1fr)]">
        <MovieOptions
          poster={concatUrlImage.originalImage(movie!.poster_path)}
        />

        <MovieDetailInfo
          title={movie!.title}
          genres={movie!.genres}
          duration={movie!.runtime}
          lenguage={movie!.original_language}
          release_date={movie!.release_date}
          description={movie!.overview}
          vote_average={movie!.vote_average}
        />

        <MovieCast movieCast={movieCast} />
      </section>

      <h3 className="font-bold text-2xl flex justify-start mt-20">
        Recommendations {`(${moviesRecommendations.length})`}
      </h3>

      <MovieList movies={moviesRecommendations} /> 
    </>
  ) : (
    <section className="w-full fullscreen-minus-4rem">
      <NotFoundComponent />
    </section>
  );
}
