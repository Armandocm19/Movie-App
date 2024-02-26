import Link from "next/link";
import { FaHome } from "react-icons/fa";

export const NotFoundComponent = () => {
  return (
    <section className="container-pageNotFound">
      <h1 className="text-5xl">404 Page Not Found</h1>
      <Link
        href="/"
        className="flex justify-center items-center mt-5 gap-1 text-xl"
      >
        <FaHome />
        Go to home 🍿
      </Link>
    </section>
  );
};
