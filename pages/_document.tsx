import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/IBMPlexSerif-Bold.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBMPlexSerif-Regular.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBMPlexSerif-SemiBold.ttf" as="font" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
