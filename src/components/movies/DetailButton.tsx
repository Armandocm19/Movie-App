import { ArrowRigthIcon } from "@/assets/Icons";
import { useRouter } from "next/navigation";

interface Props {
    idMovie: number;
}

export function DetailButton({ idMovie }: Props) {
    const { push } = useRouter();
    const onPushPage = () => {
        push(`/movies/${idMovie}`);
    };
    return (
        <button 
            className="w-auto flex justify-center items-center border border-white rounded-full text-white py-2 px-10"
            onClick={onPushPage}
        >
            More Info
            <ArrowRigthIcon />
        </button>
    )
}