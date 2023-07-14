import Link from 'next/link'
import Layout from '@components/Layout'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [scrollState, setScrollState] = useState(0)

  useEffect(function mount() {
    function onScroll() {
      setScrollState(window.pageYOffset + window.innerHeight - 64)
    }

    window.addEventListener('scroll', onScroll)

    return function unMount() {
      window.removeEventListener('scroll', onScroll)
    }
  })

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
                August 5, 2023 - registration now open!
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
                  </div>{' '}
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
        <div className="max-w-7xl mx-auto pb-16 px-6">
          <div className="md:flex items-center justify-between mb-10 md:mb-14">
            <h2 className="font-bold mb-10 md:mb-0 text-4xl">
              Festival Headliners
            </h2>
            <Link href="/schedule">
              <a className="border border-black inline-flex items-center px-5 py-3 rounded-full text-lg">
                See the Schedule
                <svg className="ml-3" height="12" width="15">
                  <use xlinkHref="#icon-rightarrow" />
                </svg>
              </a>
            </Link>
          </div>
          <ul className="gap-x-28 gap-y-20 grid md:grid-cols-2">
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Hanif Abdurraqib</h3>
              <p className="mb-8 text-lg">Keynote Address</p>
              <img
                alt="Hanif Abdurraqib"
                src="/img/speakers/hanif-abdurraqib.jpg"
              />
              <details className="font-mono mt-6 text-lg">
                He released Go Ahead In The Rain: Notes To A Tribe Called Quest
                with University of Texas press in February 2019. The book became
                a New York Times Bestseller, was a finalist for the Kirkus
                Prize, and was longlisted for the National Book Award. His
                second collection of poems, A Fortune For Your Disaster, was
                released in 2019 by Tin House, and won the 2020 Lenore Marshall
                Prize. His newest release, A Little Devil In America (Random
                House, 2021) was a winner of the Andrew Carnegie Medal and the
                Gordon Burn Prize, a finalist for the National Book Critics
                Circle Award and the Pen/Diamonstein-Spielvogel Award. In 2021,
                Abdurraqib was named a MacArthur Fellow. He is a graduate of
                Beechcroft High School.
                <summary className="focus:outline-none textWrap">
                  Hanif Abdurraqib is a poet, essayist, and cultural critic from
                  Columbus, Ohio. His poetry has been published in Muzzle,
                  Vinyl, PEN American, and various other journals. His essays
                  and music criticism have been published in The FADER,
                  Pitchfork, The New Yorker, and The New York Times. His first
                  full length poetry collection, The Crown Ain't Worth Much, was
                  released in June 2016 from Button Poetry. It was named a
                  finalist for the Eric Hoffer Book Prize, and was nominated for
                  a Hurston-Wright Legacy Award. His first collection of essays,
                  They Can't Kill Us Until They Kill Us, was released in winter
                  2017 by Two Dollar Radio and was named a book of the year by
                  Buzzfeed, Esquire, NPR, Oprah Magazine, Paste, CBC, The Los
                  Angeles Review, Pitchfork, and The Chicago Tribune, among
                  others.
                </summary>
              </details>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Nate Marshall</h3>
              <p className="mb-8 text-lg">Lunchtime Keynote</p>
              <img
                alt="Nate Marshall"
                src="/img/speakers/2023/nate-marshall.png"
              />
              <p className="font-mono mt-6 text-lg">
                This lunchtime keynote will feature poet and professor, Nate
                Marshall. Lunch will be provided for festival participants. Nate
                Marshall is an award-winning writer, editor, educator, and MC.
                His most recent book,{' '}
                <a
                  className="underline"
                  href="https://www.penguinrandomhouse.com/books/610570/finna-by-nate-marshall/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Finna
                </a>
                , was recognized as one of the best books of 2020 by NPR and The
                New York Public Library. His first book,{' '}
                <a
                  className="underline"
                  href="https://www.nate-marshall.com/books"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Wild Hundreds
                </a>
                , was honored with the Black Caucus of the American Library
                Association’s award for Poetry Book of the Year and The Great
                Lakes College Association’s New Writer Award. He was also an
                editor of{' '}
                <a
                  className="underline"
                  href="https://www.nate-marshall.com/prose"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  The BreakBeat Poets: New American Poetry in the Age of Hip-Hop
                </a>
                . Marshall co-wrote the play{' '}
                <a
                  className="underline"
                  href="https://www.nate-marshall.com/plays"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  No Blue Memories: The Life of Gwendolyn Brooks
                </a>{' '}
                with Eve Ewing. He also wrote the audio drama{' '}
                <a
                  className="underline"
                  href="https://makebelieve.fm/bruhrabbit"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Bruh Rabbit & The Fantastic Telling of Remington Ellis, Esq.
                </a>
                , which was produced by Make-Believe Association. Marshall
                records hip-hop as a solo artist and with the group Daily
                Lyrical Product.
              </p>
            </li>
            {/* <li className="speakers-grid">
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
                  </a>{' '}
                  (she / her) is the author of The January Children (University
                  of Nebraska Press, 2017), which received the the Sillerman
                  First Book Prize for (Make Me A World/Random House
                </summary>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
