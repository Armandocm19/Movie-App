"use client";
import { FC } from "react";

import { popularResults } from "../../types/popular";
import concatUrlImage from "../../utils/concatUrlImage";
import { PlayButton } from "./PlayButton";
import { DetailButton } from "./DetailButton";

interface Props {
  movie: popularResults;
}

export const MovieBannerHome: FC<Props> = ({ movie }) => {
  const poster = concatUrlImage.originalImage(movie.backdrop_path);

  return (
    <>
      <section
        className="poster fadeIn"
        style={{
          background: `linear-gradient(rgba(10, 1.0, 0, 0.3), rgba(10, 1.0, 0, 0.3)), url(${poster}) no-repeat center center/cover`,
        }}
      >
        <div className="poster-data">
          <h2 className="font-medium text-5xl fadeIn">{movie.title}</h2>
          <div className="text_banner fadeIn">
            <h1>{movie.overview}</h1>
          </div>
          <div className="buttons_banner">
            <PlayButton />
            <DetailButton idMovie={movie.id} />
          </div>
        </div>
      </section>
    </>
  );
};
