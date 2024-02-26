import Head from "next/head"
import { FC } from "react";
import NavbarUI from "../ui/Navbar/NavBar";
import FooterUI from "../ui/Footer/Footer";

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: JSX.Element | JSX.Element[];
}

export const MovieLayout: FC<Props> = ({ title, pageDescription, imageFullUrl, children }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="decription" content={ pageDescription } />

            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }
        </Head>

        <NavbarUI />

        <main>
            { children }
        </main>

        <footer>
            <FooterUI />
        </footer>

    </>
  )
}