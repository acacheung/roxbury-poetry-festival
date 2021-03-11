import Link from "next/link";
import Head from "next/head";
import Layout from "@components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Roxbury Poetry Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto px-6 md:px-0 w-full">
        <Link href="/">
          <a className="flex h-32 items-center justify-center">
            <h1 className="hidden">Roxbury Poetry Festival</h1>
            <svg className="fill-current" height="30" width="615">
              <use xlinkHref="#icon-logo-wide" />
            </svg>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
