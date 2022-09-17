import { FC } from "react"
import { Text, Button } from "@nextui-org/react";

import { popularResults } from "../../types/popular"
import concatUrlImage from "../../utils/concatUrlImage";
import { useRouter } from "next/router";

interface Props {
    movie: popularResults
}

export const MovieBannerHome: FC<Props> = ({ movie }) => {

    const { push } = useRouter();
    const poster = concatUrlImage.originalImage( movie.backdrop_path )

    const onPushPage = () => {
        push(`/movies/${ movie.id }`)
    }

    return (
        <>

            <section className="poster fadeIn" style={{ background: `linear-gradient(rgba(10, 1.0, 0, 0.3), rgba(10, 1.0, 0, 0.3)), url(${poster}) no-repeat center center/cover` }}>
                <div className="poster-data">
                    <Text h2 size="3rem" weight="medium" css={{ textShadow: "0 .25rem 1rem rgba(0,0,0,.75)" }} className="fadeIn">
                          {movie.title }
                    </Text>

                    <div className="buttons_banner">

                        <button>Reproducir</button>
                        <button className="button2" style={{ 'marginLeft': 19 }} onClick={ onPushPage }>Detalles</button>
            
                    </div>

                    <div className="text_banner fadeIn">
                        <Text h5>{ movie.overview }</Text>
                    </div>

                </div>
                
            </section>

        </>
    )

}