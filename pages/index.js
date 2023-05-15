import Link from "next/link";
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
      <div className="w-full">
        <div className="hero">
          <div className="flex flex-col justify-between max-w-7xl mx-auto px-6">
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
                  className="fill-current hidden md:block h-full w-full md:max-w-md lg:max-w-xl"
                  height="305"
                  width="557"
                >
                  <use xlinkHref="#icon-logo" />
                </svg>
              </h1>
              <div className="md:w-1/4 md:mt-10 mt-6 mx-auto w-2/3">
                <img
                  alt="Poetry writing book gif"
                  className="mx-auto"
                  height="300"
                  src="/img/gif-black.gif"
                  width="300"
                />
              </div>
            </div>
            <div className="font-mono md:mt-10 mt-6 md:text-left mb-20 pb-20 text-center">
              <p className="md:text-3xl text-2xl">
                August 5, 2023 - Save the date!
              </p>
              <div className="md:flex md:text-lg mt-8 items-start">
                <div className="flex md:justify-start justify-center">
                  A
                  <div className="border-b border-black italic relative text-center w-32 mx-4">
                    <div className="scroll-words">vital</div>
                    <div className="scroll-words">joyful</div>
                    <div className="scroll-words">lively</div>
                    <div className="scroll-words">riveting</div>
                    <div className="scroll-words">experimental</div>
                    <div className="scroll-words">futuristic</div>
                    <div className="scroll-words">curious</div>
                  </div>{" "}
                  gathering
                </div>
                <p className="mt-2 md:mt-0 ml-2">
                  of national and local writers
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto mb-40 px-6">
          <div className="md:flex items-center justify-between mb-10 md:mb-14">
            <h2 className="font-bold mb-10 md:mb-0 text-4xl">
              Poem For Roxbury
            </h2>
          </div>
          <ul className="gap-x-20 grid md:grid-cols-2">
            <li className="border-t border-black">
              <h3 className="mb-4 mt-8 text-5xl uppercase">
                Rashawnda Williams
              </h3>{" "}
              <p className="mb-8 text-lg">Roxbury Love</p>
              <video
                controls
                src="/rashawnda-williams.mp4"
                poster="/rashawnda-williams.jpg"
              ></video>
            </li>
            <li className="border-t border-black">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Durane West</h3>
              <p className="mb-8 text-lg">617 Roxbury</p>
              <video
                controls
                src="/durane-west.mp4"
                poster="/durane-west.jpg"
              ></video>
            </li>
          </ul>
        </div> */}
        {/* <div className="max-w-7xl mx-auto pb-16 px-6">
          <div className="md:flex items-center justify-between mb-10 md:mb-14">
            <h2 className="font-bold mb-10 md:mb-0 text-4xl">
              Festival Headliners
            </h2>
            <Link href="/speakers">
              <a className="border border-black inline-flex items-center px-5 py-3 rounded-full text-lg">
                See all Speakers
                <svg className="ml-3" height="12" width="15">
                  <use xlinkHref="#icon-rightarrow" />
                </svg>
              </a>
            </Link>
          </div>
          <ul className="gap-x-28 gap-y-20 grid md:grid-cols-2 lg:grid-cols-3">
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Jericho Brown</h3>
              <p className="mb-8 text-lg">Poet, Educator</p>
              <img alt="Jericho Brown" src="/img/speakers/jericho-brown.jpg" />
              <details className="font-mono mt-6 text-lg">
                and the National Endowment for the Arts. Brown’s first book,
                Please (2008), won the American Book Award. His second book, The
                New Testament (2014), won the Anisfield-Wolf Book Award and was
                named one of the best of the year by Library Journal, Coldfront,
                and the Academy of American Poets. He is also the author of the
                collection The Tradition (2019), which was a finalist for the
                2019 National Book Award and the winner of the 2020 Pulitzer
                Prize for Poetry. His poems have appeared in Buzzfeed, The
                Nation, The New York Times, The New Yorker, The New Republic,
                Time, and The Pushcart Prize Anthology, and several volumes of
                The Best American Poetry anthologies. He is the Charles Howard
                Candler Professor of Creative Writing and the Director of the
                Creative Writing Program at Emory University in Atlanta.
                <summary className="focus:outline-none textWrap">
                  <a
                    className="underline"
                    href="https://www.jerichobrown.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Jericho Brown
                  </a>{" "}
                  (he / him) is the recipient of a Whiting Writers’ Award and
                  fellowships from the John Simon Guggenheim Foundation, the
                  Radcliffe Institute for Advanced Study at Harvard University,
                </summary>
              </details>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Rachel McKibbens</h3>
              <p className="mb-8 text-lg">Poet, Witch, Noisemaker</p>
              <img
                alt="Rachel McKibbens"
                src="/img/speakers/rachel-mckibbens.jpg"
              />
              <p className="font-mono mt-6 text-lg">
                <a
                  className="underline"
                  href="https://www.rachelmckibbens.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Rachel McKibbens
                </a>{" "}
                (she / her) is a witch, a writer and a thinker. She founded the
                Pink Door Writing Retreat for fellows and resides in upstate New
                York.
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
              <details className="font-mono mt-6 text-lg">
                African Poets and an Arab American Book Award, Girls That Never
                Die (One World/Random House 2021), and the novel in verse
                <a
                  className="px-3 underline"
                  href="https://bookshop.org/books/home-is-not-a-country-9780593177068/9780593177051"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Home Is Not A Country
                </a>
                , 2021). With Fatimah Asghar, she is co-editor of the anthology
                Halal If You Hear Me (Haymarket Books, 2019). She is currently a
                Wallace Stegner Fellow at Stanford University and lives in
                Oakland.
                <summary className="focus:outline-none textWrap">
                  <a
                    className="underline"
                    href="https://safia-mafia.com/bio"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Safia Elhillo
                  </a>{" "}
                  (she / her) is the author of The January Children (University
                  of Nebraska Press, 2017), which received the the Sillerman
                  First Book Prize for (Make Me A World/Random House
                </summary>
              </details>
            </li>
          </ul>
        </div> */}
      </div>
    </Layout>
  );
}
