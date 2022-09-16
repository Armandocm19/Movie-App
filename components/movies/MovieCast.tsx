import { FC } from "react";
import { Text, Grid, Col, User, CSS, Card } from "@nextui-org/react";

import { Cast } from "../../types/credits";
import concatUrlImage from "../../utils/concatUrlImage";

interface Props {
    movieCast: Cast[]
}

const userCSS: CSS = { marginTop: 10, width: '90%' }

export const MovieCast: FC<Props> = ({ movieCast }) => {

    const castActor = movieCast.filter( data => data.known_for_department === 'Acting' )

    return (

        <>

            <Grid xs={12} sm={3.5} md={3} justify="center">
                 <Col className="containerCast">
                    <Text h2 size="2rem" weight="medium" css={{ pl: 10 }} > Cast </Text>
                        <div className="Cast-movie">
                            
                            {
                                castActor.slice(0, 10).map(( { id, name, character, profile_path } ) => (
                                    <Card css={ userCSS } key={id}>
                                        <Card.Body>
                                            <User
                                                src={ concatUrlImage.originalImage( profile_path ) }
                                                name={ name }
                                                size='lg'
                                                description={ character }
                                                className='container-cardUser'
                                            />
                                        </Card.Body>
                                    </Card>
                                ))
                            }
                        </div>
                </Col>
            </Grid>
        
        </>

    )

}