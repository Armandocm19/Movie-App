import type { GetServerSideProps, NextPage } from 'next'

import { MovieLayout } from '../components/layout';
import movieService from '../services/movies';
import { popularResults } from '../types/popular';
import { MovieBannerHome } from '../components/movies';
import { SlideMovies } from '../components/movies';

interface Props {
  topMovies: popularResults[]
  trendingMovies: popularResults[]
}

const HomePage: NextPage = ({ topMovies, trendingMovies }: Props) => {

  return (
   <>
    <MovieLayout title='MovieApp - Home'  pageDescription='Encuentra las mejores películas actuales aqui'>
        <MovieBannerHome movie={topMovies[0]} />
        <SlideMovies title='Most Popular' movies={ topMovies } movieFilter={ true } />
        <SlideMovies title='Trending' movies={ trendingMovies } movieFilter={ false } /> 
    </MovieLayout>
   </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const topMovies = await movieService.popular();
  const trendingMovies = await movieService.trending();

  const { results } = topMovies;

  return {
    props: {
      topMovies: results,
      trendingMovies: trendingMovies.results
    },
    revalidate: 86400,
  }

}

export default HomePage;
