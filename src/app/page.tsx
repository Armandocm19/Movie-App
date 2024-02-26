import movieService from '../services/movies';
import { MovieBannerHome, SlideMovies } from '../components/movies';

export default async function Page() {
  const topMovies = (await movieService.popular()).results;
  const trendingMovies = (await movieService.trending()).results;

  return (    
      <section>
        <MovieBannerHome movie={topMovies[0]} />
        <SlideMovies title='Most Popular' movies={ topMovies } movieFilter={ true } />
        <SlideMovies title='Trending' movies={ trendingMovies } movieFilter={ false } /> 
      </section>  
  )
}
