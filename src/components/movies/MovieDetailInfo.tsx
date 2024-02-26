import { FaStar } from "react-icons/fa";
import { formatDate } from "../../utils/formatDate";

type genreMovie = {
  id: number;
  name: string;
};

interface Props {
  title: string;
  genres: genreMovie[];
  duration: number;
  lenguage: string;
  release_date: string;
  description: string;
  vote_average: number;
}

export const MovieDetailInfo = ({
  title,
  genres,
  duration,
  lenguage,
  release_date,
  description,
  vote_average,
}: Props) => {
  return (
    <section className="flex flex-col pt-10 lg:pr-20">
      <h1 className="font-medium text-white text-5xl">{title}</h1>

      <div className="flex justify-start gap-1 pt-6">
        {genres.map(({ name }, index) => (
          <h3 key={index} className="mr-5 border border-[#274494] p-3 rounded-lg text-sm lg:text-base">
            {name}
          </h3>
        ))}
      </div>
      <div className="flex flex-col justify-start gap-3 pt-5">
        <p className="font-bold flex gap-2 items-center">
          Lenguage:
          <span className="font-extralight">{duration} min</span>
        </p>
        <p className="font-bold flex gap-2 items-center">
          Duration:
          <span className="font-extralight">{lenguage}</span>
        </p>
        <p className="font-bold flex gap-2 items-center">
          Release date:
          <span className="font-extralight">{formatDate(release_date)} </span>
        </p>
        <p className="font-bold flex gap-2 items-center">
          Calificacion:
          <FaStar />
          <span className="font-extralight">
            {Number(vote_average).toFixed(1)}
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-start gap-3 pt-5">
        <h2 className="text-3xl font-bold self-start text-gradient">Description:</h2>
        <p className="text-start">{description}</p>
      </div>
    </section>
  );
};
