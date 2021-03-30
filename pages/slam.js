import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";

export default function Slam() {
  return (
    <>
      <Layout>
        <Head>
          <title>Publisher's Poetry Slam | Roxbury Poetry Festival</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <Link href="/">
            <a className="hidden md:flex h-32 items-center justify-center">
              <h1 className="hidden">Roxbury Poetry Festival</h1>
              <svg className="fill-current" height="30" width="615">
                <use xlinkHref="#icon-logo-wide" />
              </svg>
            </a>
          </Link>
          <div className="md:flex items-center justify-between mb-10 mt-24">
            <h2 className="font-bold mb-6 md:mb-0 md:text-4xl text-3xl">
              Publisher's Poetry Slam
            </h2>
            <div className="border border-black inline-flex items-center px-5 py-3 rounded-full text-lg">
              Registration Opens April 15
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </div>
          </div>
          <div className="border-t border-black md:flex md:pt-20 pt-10">
            <div className="mb-10 md:mb-0 md:mr-20 md:text-3xl text-2xl xl:mr-32 w-full">
              <p className="mb-6">
                The Poetry Slam takes place outdoors in the Blair Lot on June 5,
                2021 from 5pm-7pm ET.
              </p>
            </div>
            <div className="font-mono md:text-lg md:max-w-md lg:max-w-2xl xl:max-w-3xl">
              <h3 className="mb-8 md:mb-10 text-4xl md:text-5xl uppercase">
                Rules & Guidelines
              </h3>
              <ul className="list-disc list-outside pl-6">
                <li className="pl-6 mb-8">
                  10 poets will compete in three rounds. Poets must perform
                  original work and can not use prop, costume change or any
                  musical accompaniment outside of their voice. Each poet will
                  have 3 minutes and a 10 second grace period. There will be a
                  half point time penalty for every 10 seconds over time limit.
                </li>
                <ul className="pl-6 md:pl-16">
                  <li className="mb-6">
                    <span className="font-bold">Round 1:</span> 10 poets with
                    random draw
                  </li>
                  <li className="mb-6">
                    <span className="font-bold">Round 2:</span> 7 poets,
                    organized high to low
                  </li>
                  <li className="mb-10">
                    <span className="font-bold">Final Round:</span> 3 poets,
                    random draw from stage
                  </li>
                </ul>
                <li className="pl-6 mb-10">
                  Judges are TBD. Poem and performance will be judged on a
                  scale.
                </li>
                <li className="pl-6">
                  Winner will receive a chapbook deal from Button Poetry along
                  with supporting resources to write their book.
                </li>
              </ul>
            </div>
          </div>
          <p className="max-w-4xl lg:text-5xl md:mt-20 md:mb-40 md:text-4xl mt-12 mx-auto text-2xl text-center">
            The Poetry Slam will be filmed and published by{" "}
            <a
              className="underline"
              href="https://buttonpoetry.com/"
              target="_blank"
            >
              Button Poetry
            </a>
          </p>
        </div>
      </Layout>
    </>
  );
}
