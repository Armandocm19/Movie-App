import { FC } from "react"

import { Grid, Text, Col, Row, Spacer } from "@nextui-org/react"
import { Stars } from "@mui/icons-material";
import { formatDate } from '../../utils/formatDate';

type genreMovie = {
    id: number,
    name: string
}

interface Props {
    title: string,
    genres: genreMovie[],
    duration: number,
    lenguage: string,
    release_date: string,
    description: string,
    vote_average: number,
}


export const MovieDetailInfo: FC<Props> = ({ title, genres, duration, lenguage, release_date, description, vote_average }) => {

    return (
        <>
        
        <Grid xs={12} sm={6.5} md={7} justify="center" css={{ mt: 70 }}>
            <Col >
                <Text h2 size="3rem" weight="medium" className="title-detailInfo">
                    { title }
                </Text>

                <Row wrap="wrap">
                    {
                        genres.map(( {name}, index ) => (
                            <Text key={index} h4 size="1rem" className='genresMovie'>
                               { name }
                            </Text>
                        ))
                    }
                </Row>

                <Spacer />

                <Text h2 size="1rem" weight="medium" >
                   Duration: { duration } min
                </Text>

                <Text h2 size="1rem" weight="medium" >
                   Lenguage: { lenguage } 
                </Text>

                <Text h2 size="1rem" weight="medium" >
                   Release date:  { formatDate( release_date ) } 
                </Text>

                <Row>
                    <Text h5 size={15} weight='medium' css={{ pr: 5, ml: 0 }}>Calificacion:</Text>
                    <Stars />  
                    <Text
                        h5
                        css={{ color: "inherit", ml: 5}}
                         size={15}
                    >
                        { Number( vote_average ).toFixed(1) }
                    </Text>
                </Row>

                <Text
                  h1
                  size={30}
                  css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                  weight="bold"
                >
                  Description:
                </Text>

                <Text h2 size="1rem" weight="medium" css={{ textShadow: "0 .25rem 1rem rgba(0,0,0,.75)", maxW: 700 }}>
                    { description }
                </Text>
            </Col>
        </Grid>
        
        </>
    )

}