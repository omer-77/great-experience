import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <link rel="icon" type="image/png" href=" https://cdn.salla.network/images/logo/logo-square.png" />
        <link rel="apple-touch-icon-precomposed" href="https://cdn.salla.network/images/logo/logo-square.png" />

        <link rel="stylesheet" href="https://cdn.salla.network/fonts/pingarlt.css?v=1.0" />
        <link rel="stylesheet" href="https://cdn.salla.network/fonts/sallaicons.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
