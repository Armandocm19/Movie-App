import { PlayIcon } from "@/assets/Icons";

export function PlayButton() {
  return (
    <button className="flex justify-center items-center bg-white font-bold rounded-full text-[#000] pl-8 pr-10 py-2">
      <PlayIcon />
      Watch Movie
    </button>
  );
}
