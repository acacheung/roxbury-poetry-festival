import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import HeroLogo from "@components/HeroLogo";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [scrollState, setScrollState] = useState(0);

  useEffect(function mount() {
    function onScroll() {
      setScrollState(window.pageYOffset + window.innerHeight - 64);
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <Layout>
      <Head>
        <title>Roxbury Poetry Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="hero">
          <div className="flex flex-col justify-between max-w-7xl md:mb-20 lg:pb-32 mx-auto px-6 ">
            <div className="items-center md:flex md:flex-row md:w-max">
              <h1 className="mt-20">
                <span className="hidden">Roxbury Poetry Festival</span>
                <svg
                  className="fill-current h-32 md:hidden w-full"
                  height="305"
                  width="557"
                >
                  <use xlinkHref="#icon-logo-center" />
                </svg>
                <svg
                  className="fill-current hidden md:block md:h-60 md:-ml-10 lg:ml-0 lg:h-full w-full max-w-xl"
                  height="305"
                  width="557"
                >
                  <use xlinkHref="#icon-logo" />
                </svg>
              </h1>
              <div className="md:w-1/4 md:mt-10 md:-ml-6 mt-6 lg:ml-8 mx-auto w-2/3">
                <img
                  alt="Poetry writing book gif"
                  className="w-3/4 mx-auto"
                  src="/img/gif-black.gif"
                />
              </div>
            </div>
            <div className="font-mono md:mt-10 mt-6 md:text-left text-center">
              <p className="md:text-3xl text-2xl uppercase">
                June 05, 2021 / 10 am - 9 pm ET
              </p>
              <p className="md:text-lg mt-8">
                A vital gathering of national and local writers
              </p>
            </div>
          </div>
          <div
            className="background-banner bottom-0 fixed h-16 items-center z-50 text-white md:text-2xl uppercase w-full"
            style={{
              backgroundPositionY: scrollState,
            }}
          >
            <div className="banner-text bg-gray-900 flex h-full items-center justify-end">
              <p>Registration Opens April 15th</p>
              <svg
                className="fill-current hidden md:block ml-6"
                height="12"
                width="15"
              >
                <use xlinkHref="#icon-rightarrow" />
              </svg>
              <svg
                className="fill-current hidden md:block ml-6"
                height="12"
                width="15"
              >
                <use xlinkHref="#icon-rightarrow" />
              </svg>
              <svg className="fill-current mx-4 md:mx-6" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-28 md:py-20 px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="font-bold mb-10 md:mb-0 text-4xl">
              Featured Speakers
            </h2>
          </div>
          <ul className="gap-x-20 gap-y-20 grid md:grid-cols-2 lg:grid-cols-3">
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Rachel McKibbens</h3>
              <p className="mb-8 text-lg">Poet, Witch, Noisemaker</p>
              <img
                alt="Rachel McKibbens"
                src="/img/speakers/rachel-mckibbens.jpg"
              />
              <p className="font-mono mt-6 text-lg">
                ​Rachel McKibbens (she / her) is a witch, a writer and a
                thinker. She founded the Pink Door Writing Retreat for fellows
                and resides in upstate New York.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Jericho Brown</h3>
              <p className="mb-8 text-lg">TBD</p>
              <img alt="Jericho Brown" src="/img/speakers/jericho-brown.jpg" />
              <p className="font-mono mt-6 text-lg">
                2020 Pulitzer Prize winner, Jericho Brown will read from his
                book The Tradition and answer a few questions from the audience.
                This talk will be moderated by a local artist.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">
                Safia
                <br />
                Elhillo
              </h3>
              <p className="mb-8 text-lg">Author, Teaching Artist, Editor</p>
              <img alt="​Safia Elhillo" src="/img/speakers/safia-elhillo.jpg" />
              <p className="font-mono mt-6 text-lg">
                ​
                <a
                  className="underline"
                  href="https://safia-mafia.com/bio"
                  target="_blank"
                >
                  Safia Elhillo
                </a>{" "}
                (she / her) is the author of The January Children (University of
                Nebraska Press, 2017), which received the the Sillerman First
                Book Prize for African Poets and an Arab American Book Award,
                Girls That Never Die (One World/Random House 2021), and the
                novel in verse{" "}
                <a
                  className="underline"
                  href="https://bookshop.org/books/home-is-not-a-country-9780593177068/9780593177051"
                  target="_blank"
                >
                  Home Is Not A Country
                </a>{" "}
                (Make Me A World/Random House, 2021). With Fatimah Asghar, she
                is co-editor of the anthology Halal If You Hear Me (Haymarket
                Books, 2019). She is currently a Wallace Stegner Fellow at
                Stanford University and lives in Oakland.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
