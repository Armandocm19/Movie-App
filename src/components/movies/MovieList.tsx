import { popularResults } from "@/types/popular"
import { MovieCard } from "./MovieCard"

interface Props{
    movies: popularResults[]
}

export const MovieList = ({ movies }: Props) => {
  return (
    <section className="container-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
    </section>
  )
}
