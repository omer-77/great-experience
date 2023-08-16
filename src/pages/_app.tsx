import type { AppProps } from "next/app";
import "../styles/app.scss";

import MainLayout from "../layouts/layout";
import Head from "next/head";

import { GlobalContextProvider } from "@/context/global";
import { CartContextProvider } from "@/context/Cart";
import { useRouter } from "next/router";
import { PageNames } from "@/constants";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const pageTitle = PageNames[router.route];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=1"
        />

        <meta name="msapplication-TileColor" content="#BAF3E6" />
        <meta name="msapplication-TileImage" content="https://cdn.salla.network/images/logo/logo-square.png" />

        <meta name="theme-color" content="#BAF3E6" />
        <meta name="msapplication-navbutton-color" content="#BAF3E6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#BAF3E6" />
        <title>{pageTitle}</title>
      </Head>
      <GlobalContextProvider>
        <CartContextProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </CartContextProvider>
      </GlobalContextProvider>
    </>
  );
}
