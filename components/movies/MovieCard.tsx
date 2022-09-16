import { FC } from "react";
import NextLink from 'next/link'
import { Stars } from "@mui/icons-material";
import { Text, Card, Col, Row, Loading } from "@nextui-org/react";


import { popularResults } from "../../types/popular";
import { formatDate } from "../../utils/formatDate";
import concatUrlImage from "../../utils/concatUrlImage";

interface Props {

    movie: popularResults,
    index?: number

}


export const MovieCard: FC<Props> = ({ movie, index }) => {

    return (
        <>

            <NextLink href={`/movies/${ movie.id }`}>
                 <Card isHoverable isPressable css={{ w: "90%", h: "400px", cursor: 'pointer' }} className='card-item fadeIn' >
            
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                       {
                            index && (
                                <Row align="center" justify="flex-end">
                                    <span className="position">{ index }</span>
                                </Row>
                            )
                       }
                    </Card.Header>
            
                    <Card.Body css={{ p: 0 }}>
                        {
                            movie.poster_path ? (
                                <Card.Image
                                    src={ concatUrlImage.originalImage( movie.poster_path ) }
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                    alt="Card example background"
                                />
                            ) : (
                                <Loading size="md" css={{ height: '100%', display: 'flex', justifyContent: 'center'}}/>
                            )
                        }
                    </Card.Body>
            
                    <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        p:'12px',
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                    >
                        <Row align="center" css={{ padding: 3, position: 'relative' }}>
                            <Col>
                                <Text h1 size="1rem" weight="medium" css={{ width: '90%', textShadow: "0 .25rem 1rem rgba(0,0,0,.75)", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                    { movie.title }
                                </Text>
                                <Text color="#d1d1d1" size={12} weight='bold'>
                                    { formatDate( movie.release_date ) }
                                </Text>
                            </Col>
            
                            <Col css={{ width: "auto" }}>
            
                                <Row gap={0.5} justify="flex-end" align="center" >
                                    <Stars />  
                                    <Text
                                        css={{ color: "inherit", margin: '0 auto'}}
                                        size={15}
                                    >
                                    { Number(movie.vote_average).toFixed(1) }
                                    </Text>
                                </Row>
            
                            </Col>
                        </Row>
            
                    </Card.Footer>
            
                </Card>
            </NextLink>

        </>
    )

}