import { GetServerSideProps, NextPage } from "next";
import { Text } from "@nextui-org/react";

import movieService from "../../services/movies";
import { popularResults } from "../../types/popular";
import { MovieCard } from "../../components/movies";
import { MovieLayout } from "../../components/layout";

interface Props {
    inputQuery: string,
    resultsQuery: popularResults[]
}

const MoviePage: NextPage<Props> = ({ inputQuery, resultsQuery }) => {

    return (
        <>
            
            <MovieLayout title={`MovieApp - ${inputQuery}`} pageDescription={`Resultados de la búsqueda de: ${inputQuery}`}>

                <Text h3 weight="bold" size="2rem" css={{ mt: 50 }}>
                    Resultados encontrados de:  {`${inputQuery}`}
                </Text>
            
                <section className="container-list">

                    {
                        resultsQuery.map( data => (
                            <MovieCard key={data.id} movie={data} />
                        ))
                    }

                </section>

            </MovieLayout>
        
        </>
    )

}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { query } = params;

    try {
        const resultsQuery = await movieService.search( query as string );
        return{
            props: {
                inputQuery: query,
                resultsQuery: resultsQuery.results
            },
    };
    } catch (error) {
        console.log(error)
        return {
            redirect: {
                destination: "/404",
                 permanent: false,
            },
        };
    }

}


export default MoviePage;