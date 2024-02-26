import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";

import { popularResults } from "../../types/popular";
import { formatDate } from "../../utils/formatDate";
import concatUrlImage from "../../utils/concatUrlImage";
import Link from "next/link";

interface Props {
  movie: popularResults;
  index?: number;
}

export const MovieCard = ({ movie, index }: Props) => {
  return (
    <>
      {movie.poster_path && (
        <Link href={`/movies/${movie.id}`}>
          <Card
            isHoverable
            isFooterBlurred
            isPressable
            className="card-item fadeIn relative w-[90%] h-[450px] cursor-pointer"
          >
            <CardHeader className="absolute z-0 top-5">
              {index && (
                <div className="flex items-center justify-end">
                  <span className="position">{index}</span>
                </div>
              )}
            </CardHeader>

            <Image
              src={concatUrlImage.originalImage(movie.poster_path)}
              width={2000}
              height={3000}
              alt="Card example background"
            />
            <CardFooter className="justify-between before:bg-white/5 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-base text-white/80">{movie.title}</p>
              <div className="text-tiny text-white bg-black/20 rounded-lg p-2">
                {formatDate(movie.release_date)}
              </div>
            </CardFooter>
          </Card>
        </Link>
      )}
    </>
  );
};
