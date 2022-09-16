import { FC } from 'react';

import useMatchMedia from 'react-use-match-media';

import { Text } from "@nextui-org/react";
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { popularResults } from "../../types/popular";
import { MovieCard } from './MovieCard';

interface Props {
    title: string
    movies: popularResults[],
    movieFilter: boolean
}


export const SlideMovies: FC<Props> = ({ title, movies, movieFilter }) => {

    let amountSlidesToShow = 4;

    //Estas variables definiran la cantidad de le peliculas que se mostrarán por slide según el tamaño de la pantall. Con el fin de mejorar el responsive
    const isWideViewport1000 = useMatchMedia('(max-width: 1000px)');//Si se cumple la el tamaño máximo indicado, este devolverá true
    const isWideViewport800 = useMatchMedia('(max-width: 800px)');
    const isWideViewport640 = useMatchMedia('(max-width: 640px)');

    if ( movieFilter ) {
        movies = movies.filter( ( movies, index ) => index !== 0 );
    }

    if( isWideViewport1000 ) amountSlidesToShow = 3;

    if( isWideViewport800 ) amountSlidesToShow = 2;

    if( isWideViewport640 ) amountSlidesToShow = 1;

    return(
    <>

        <Text h1 size="3rem" weight="medium" css={{ mt: 25 }} className='titleSlides'>
               { title }
        </Text>

        <Slide slidesToScroll={amountSlidesToShow} slidesToShow={amountSlidesToShow} >

            {
                 movies.map( (movie, index) => (
                    <MovieCard key={index} movie={movie} index={index+1} />
                 ))
            }

        </Slide>


    </>
    )

}