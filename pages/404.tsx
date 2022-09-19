import NextLink from "next/link";
import Head from "next/head";
import { Link } from "@nextui-org/react";
import { FaHome } from 'react-icons/fa';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 you are lost 🥺</title>
        <meta name="description" content="Sorry you're lost" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container-pageNotFound">
        <h1>404 Page Not Found</h1>
        <NextLink href="/">
          <Link>
            <FaHome />
            Go to home :D
          </Link>
        </NextLink>
      </section>
    </>
  );
}