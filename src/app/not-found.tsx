import { NotFoundComponent } from "@/components/common";
import Head from "next/head";

export default function NotFound() {
  return (
    <section className="w-full fullscreen-minus-4rem">
      <Head>
        <title>404 you are lost 🥺</title>
        <meta name="description" content="Sorry you're lost" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFoundComponent />
    </section>
  );
}