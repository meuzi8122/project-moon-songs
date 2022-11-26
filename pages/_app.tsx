import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../layouts";
import "../styles/globals.css";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <Head>
            <meta charSet="utf-8" lang="ja" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>PM Songs</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  );
}
