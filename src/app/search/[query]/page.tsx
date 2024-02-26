import movieService from "../../../services/movies";
import { popularResults } from "../../../types/popular";
import { MovieList } from "../../../components/movies";

interface Props {
  inputQuery: string;
  resultsQuery: popularResults[];
  moviesRecommendations: popularResults[];
}

const getData = async (query: string): Promise<Props> => {
    const resultsQuery = await movieService.search(query);
    let moviesRecommendations: popularResults[] = []
    if(resultsQuery.results.length === 0){
      const res = await movieService.recommendations("1072790");
      moviesRecommendations = res.results
    }
    return {
      inputQuery: query,
      resultsQuery: resultsQuery.results,
      moviesRecommendations: moviesRecommendations
    };
};

interface MoviePageProps {
  params: {
    query: string;
  };
}

export default async function MoviePage(props: MoviePageProps) {
  const { params } = props;
  const { query } = params;
  const { inputQuery, resultsQuery, moviesRecommendations } = await getData(query);
  return (
    <>
      <p className="font-bold flex gap-2 justify-start text-2xl mt-10 title-result">
        { resultsQuery.length === 0 ? "No results found for: " : "Results found for: " }
        <span className="font-bold capitalize text-2xl items-center title-result text-yellow-300" >
          {`${inputQuery}`}
        </span>
      </p>
      <MovieList movies={moviesRecommendations?.length === 0 ? resultsQuery : moviesRecommendations} /> 
    </>
  );
}
