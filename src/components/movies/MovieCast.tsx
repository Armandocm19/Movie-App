import { FC } from "react";
import { User, Card, CardBody } from "@nextui-org/react";

import { Cast } from "../../types/credits";
import concatUrlImage from "../../utils/concatUrlImage";

interface Props {
  movieCast: Cast[];
}

export const MovieCast: FC<Props> = ({ movieCast }) => {
  const castActor = movieCast.filter(
    (data) => data.known_for_department === "Acting"
  );

  return (
    <>
      <section className="w-full">
        <div className="mt-5 flex flex-col gap-5">
          <h2 className="text-4xl font-medium"> Cast </h2>
          <div className="overflow-y-scroll custom-scroll h-full max-h-[400px] pr-2">
            {castActor
              .slice(0, 10)
              .map(({ id, name, character, profile_path }, i) => (
                <Card key={id} className={`${i !== 0 && "mt-4"}`}>
                  <CardBody>
                    <User
                      avatarProps={{
                        src: concatUrlImage.originalImage(profile_path!),
                      }}
                      name={name}
                      description={character}
                      className="flex justify-start overflow-y-hidden"
                    />
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
