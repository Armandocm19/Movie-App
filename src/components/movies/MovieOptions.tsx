import { FC } from "react"

import { Button, Image } from "@nextui-org/react";

import { FaPlayCircle, FaHeart, FaFileVideo } from 'react-icons/fa';

interface Props {
    poster: string
}

export const MovieOptions: FC<Props> = ({ poster }) => {

    return (
        <section className="max-w-[320px] flex flex-col">
            <div className="flex justify-center flex-col gap-[1rem]" >
               <Image
                   src={ poster }
                   width={640}
                   height={960}
                   className="w-[80%] h-[20rem] rounded-2xl"
                   alt="Poster movie"
                />
    
               <Button radius="full" className="w-[80%] bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                   <FaPlayCircle className="icons-options"/>
                     View Trailer
               </Button>
    
               <Button radius="full" className="w-[80%] bg-gradient-to-tr from-violet-500 to-green-500 text-white shadow-lg">
                   <FaHeart className="icons-options"/>
                     Add to favorites
               </Button>
    
               <Button radius="full" className="w-[80%] bg-gradient-to-tr from-green-500 to-violet-500 text-white shadow-lg">
                   <FaFileVideo className="icons-options"/>
                     Watch Movie
               </Button>
            </div>   
        </section>
    );

}