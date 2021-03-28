import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import HeroLogo from "@components/HeroLogo";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roxbury Poetry Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="hero">
          <div className="flex flex-col justify-between max-w-7xl mx-auto px-6">
            <div className="flex items-center">
              <h1 className="mt-20">
                <span className="hidden">Roxbury Poetry Festival</span>
                <svg height="305" width="557">
                  <use xlinkHref="#icon-logo" />
                </svg>
              </h1>
              <div className="w-1/4 ml-10 mt-10">
                <img
                  alt="Poetry writing book gif"
                  className="w-full"
                  src="/img/gif-black.gif"
                />
              </div>
            </div>
            <div className="font-mono mt-10">
              <p className="text-3xl uppercase">
                June 05, 2021 / 10 am - 9 pm ET
              </p>
              <p className="text-lg mt-8">
                A vital gathering of national and local writers
              </p>
            </div>
          </div>
          <div className="bottom-0 bg-gray-900 fixed h-16 items-center -ml-6 lg:-ml-0 z-50 text-white text-2xl uppercase w-full">
            <div className="flex h-full items-center justify-end">
              Registration Opens April 15th
              <svg className="fill-current ml-6" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
              <svg className="fill-current ml-6" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
              <svg className="fill-current mx-6" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </div>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center justify-between mb-10 md:mb-14 md:mt-80 mt-24">
            <h2 className="font-bold mb-10 md:mb-0 text-4xl">
              Featured Speakers
            </h2>
            <Link href="/speakers">
              <a className="border border-white inline-flex items-center px-5 py-3 rounded-full text-lg">
                See all the Speakers
                <svg className="fill-current ml-2" height="12" width="15">
                  <use xlinkHref="#icon-rightarrow" />
                </svg>
              </a>
            </Link>
          </div>
          <ul className="gap-x-10 gap-y-20 grid mb-20 md:grid-cols-2 lg:grid-cols-3">
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/amandag.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/amandag.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
          </ul>
        </div> */}
      </div>
    </Layout>
  );
}
