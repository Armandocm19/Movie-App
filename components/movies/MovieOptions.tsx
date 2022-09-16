import { FC } from "react"

import { Grid, Row, CSS, Card, Button } from "@nextui-org/react";

import { PlayCircle, Favorite, Slideshow } from "@mui/icons-material";

interface Props {
    poster: string
}

const buttonCss: CSS = { minWidth: '75% !important' }

const rowCss: CSS = { flexDirection: "column", gap: "1rem", maxW: "320px" };

export const MovieOptions: FC<Props> = ({ poster }) => {

    return (
        <>
            <Grid xs={12} sm={2} md={2} justify="center">
                 <Row align="center" css={ rowCss } >

                    <Card.Image
                        src={ poster }
                        width={200}
                        height={300}
                     />

                    <Button bordered color="gradient" 
                        auto 
                        ghost
                        css={buttonCss}
                    >
                        <PlayCircle sx={{ mr: 1 }} />
                          View Trailer
                    </Button>

                    <Button bordered color="secondary" 
                        auto 
                        ghost
                        css={buttonCss}
                    >
                        <Favorite sx={{ mr: 1 }} />
                          Add to favorites
                    </Button>

                    <Button bordered color="success" 
                        auto 
                        ghost
                        css={buttonCss}
                    >
                        <Slideshow sx={{ mr: 1 }} />
                          Watch Movie
                    </Button>

                 </Row>
            </Grid>
        </>
    );

}