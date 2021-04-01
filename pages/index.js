import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
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
        <div className="hero pb-32">
          <div className="flex flex-col justify-between max-w-7xl md:mb-20 lg:pb-32 mx-auto px-6">
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
                <span className="scroll-word"></span> gathering of national and
                local writers
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
      </div>
    </Layout>
  );
}
