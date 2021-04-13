import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";

export default function Schedule() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Link href="/">
          <a className="hidden md:flex h-32 items-center justify-center">
            <h1 className="hidden">Roxbury Poetry Festival</h1>
            <svg className="fill-current" height="30" width="615">
              <use xlinkHref="#icon-logo-wide" />
            </svg>
          </a>
        </Link>
        <h2 className="font-bold mb-10 mt-24 md:text-4xl text-3xl">
          The Schedule
        </h2>
        <div>
          <details className="border-t border-black" open>
            <summary className="focus:outline-none summaryWrap">
              <div className="flex md:grid md:grid-cols-8 items-center justify-between my-10">
                <div className="md:col-span-7">
                  <div className="md:grid md:grid-cols-7 md:items-center md:w-full">
                    <p className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
                      10:00am - 11:30am ET
                    </p>
                    <div className="md:col-span-3 lg:col-span-4 md:text-lg">
                      Workshops & Panels
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 flex flex-col items-end">
                  <svg className="fill-current" height="20" width="40">
                    <use xlinkHref="#icon-uparrow" />
                  </svg>
                </div>
              </div>
            </summary>
            <div className="gap-x-28 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-3">
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Paths to Publication
                </h3>
                <p className="mb-8">
                  Kristina Marie Darling, Ryan Murphy, Frances Donovan, George
                  Abraham
                </p>
                <div className="publication-images w-full"></div>
                <p className="font-mono mt-6">
                  This panel will consist of a variety of writers, editors and
                  publishers who will discuss and answer any questions
                  associated with publishing in journals as well as publishing a
                  full-length manuscript.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Elegy in a Time of Pandemic
                </h3>
                <img alt="Chen Chen" src="/img/speakers/chen-chen.jpg" />
                <p className="font-mono mt-6">
                  This writing workshop facilitated by Chen Chen
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Writing Workshop
                </h3>
                <img
                  alt="Denice Frohman"
                  src="/img/speakers/denice-frohman.jpg"
                />
                <p className="font-mono mt-6">
                  This writing workshop will be facilitated by women of the
                  world poetry slam champion, Denice Frohman
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="border-t border-black">
            <summary className="focus:outline-none summaryWrap">
              <div className="flex md:grid md:grid-cols-8 items-center justify-between my-10">
                <div className="md:col-span-7">
                  <div className="md:grid md:grid-cols-7 md:items-center md:w-full">
                    <p className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
                      11:30am - 1:00pm ET
                    </p>
                    <div className="md:col-span-3 lg:col-span-4 md:text-lg">
                      Workshops & Panels
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 flex flex-col items-end">
                  <svg className="fill-current" height="20" width="40">
                    <use xlinkHref="#icon-uparrow" />
                  </svg>
                </div>
              </div>
            </summary>
            <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-4">
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Dreamscape
                </h3>
                <p className="mb-8">Future of Roxbury Panel</p>
                <p className="font-mono mt-6">
                  This panel will consist of artists, residents, youth and city
                  planners and will center futurescaping Roxbury.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Writing our Mothers
                </h3>
                <img
                  alt="Tatiana Johnson-Boria"
                  src="/img/speakers/tatiana-johnson-boria.jpg"
                />
                <p className="font-mono mt-6">
                  This writing workshop is facilitated by Roxbury native,
                  Tatiana Johnson-Boria.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Writing Workshop
                </h3>
                <img
                  alt="Aricka Foreman"
                  src="/img/speakers/aricka-foreman.jpg"
                />
                <p className="font-mono mt-6">
                  This writing workshop will be facilitated by Detroit native
                  and Chicago Resident, Aricka Foreman.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Writing Workshop
                </h3>
                <img
                  alt="Rajiv Mohabir"
                  src="/img/speakers/rajiv-mohabir.jpg"
                />
                <p className="font-mono mt-6">
                  This writing workshop will be facilitated by local professor,
                  MFA Rajiv Mohabir.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="border-t border-black">
            <summary className="focus:outline-none summaryWrap">
              <div className="flex md:grid md:grid-cols-8 items-center justify-between my-10">
                <div className="md:col-span-7">
                  <div className="md:grid md:grid-cols-7 md:items-center md:w-full">
                    <p className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
                      1:00pm - 2:00pm ET
                    </p>
                    <div className="md:col-span-3 lg:col-span-4 md:text-lg">
                      Lunch Time Craft Talks & Discussions
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 flex flex-col items-end">
                  <svg className="fill-current" height="20" width="40">
                    <use xlinkHref="#icon-uparrow" />
                  </svg>
                </div>
              </div>
            </summary>
            <div className="gap-x-20 gap-y-20 grid md:grid-cols-2 mb-20 summaryDetail2Col">
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Home Is Not A Country
                </h3>
                <div className="home-images w-full"></div>
                <p className="font-mono mt-6">
                  Home is Not A Country is a talk and reading with Safia Elhilio
                  and a Roxbury Youth Poet Laureate Finalist, Asiyah Herrera
                  regarding Elhillo’s recently released YA novel written in
                  verse.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Craft Talk w/ Rachel McKibbens
                </h3>
                <img
                  alt="Rachel McKibbens"
                  src="/img/speakers/rachel-mckibbens.jpg"
                />
                <p className="font-mono mt-6">
                  This craft talk encourages participants to bring their lunch
                  on screen while enjoying a craft talk from poet and performer,
                  Rachel McKibbens.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="border-t border-black">
            <summary className="focus:outline-none summaryWrap">
              <div className="flex md:grid md:grid-cols-8 items-center justify-between my-10">
                <div className="md:col-span-7">
                  <div className="md:grid md:grid-cols-7 md:items-center md:w-full">
                    <p className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
                      2:00pm - 3:00pm ET
                    </p>
                    <div className="md:col-span-3 lg:col-span-4 md:text-lg">
                      Readings, Performances & Conversations
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 flex flex-col items-end">
                  <svg className="fill-current" height="20" width="40">
                    <use xlinkHref="#icon-uparrow" />
                  </svg>
                </div>
              </div>
            </summary>
            <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-4">
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  LatiNEXT: Anthology Reading
                </h3>
                <p className="mb-8">
                  Diannely Antigua, Malcolm Friend, Jonathan Mendoza
                </p>
                <div className="latinext-images w-full"></div>
                <p className="font-mono mt-6">
                  This reading and performance features Latinext folks who were
                  published in the BreakBeat Poet’s LatiNEXT Anthology. Closes
                  with a q/a.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Flowers As They Live: Local Living Legends Reading
                </h3>
                <p className="mb-8">Askia Toure, Letta Neely, Martha Collins</p>
                <div className="locals-images w-full"></div>
                <p className="font-mono mt-6">
                  This reading highlights writers who have made an impact on the
                  poetry world nationally and locally. #LocalLivingLegends
                  Closes with a q/a.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  826 Youth Anthology Reading
                </h3>
                <p className="mb-8">826 Boston</p>
                <p className="font-mono mt-6">
                  This performance features youth poets published in 826 Boston
                  Poetry Anthology. The reading takes place outside the Roxbury
                  Branch Library.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  50 Rappers Who Changed The World
                </h3>
                <p className="mb-8">Curated by Ashley Rose</p>
                <div className="rappers-images w-full"></div>
                <p className="font-mono mt-6">
                  This session will feature a reading with Candace McDuffie and
                  a q/a.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="border-t border-black">
            <summary className="focus:outline-none summaryWrap">
              <div className="flex md:grid md:grid-cols-8 items-center justify-between my-10">
                <div className="md:col-span-7">
                  <div className="md:grid md:grid-cols-7 md:items-center md:w-full">
                    <p className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
                      3:00pm - 4:00pm ET
                    </p>
                    <div className="md:col-span-3 lg:col-span-4 md:text-lg">
                      Readings, Performances & Conversations
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 flex flex-col items-end">
                  <svg className="fill-current" height="20" width="40">
                    <use xlinkHref="#icon-uparrow" />
                  </svg>
                </div>
              </div>
            </summary>
            <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-4">
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Halal If Your Hear Me
                </h3>
                <p className="mb-8">
                  Anthology Reading from Dr. Seema Yasmin, Nikia Chaney, Yasmin
                  Belkhyr
                </p>
                <div className="halal-images w-full"></div>
                <p className="font-mono mt-6">
                  This reading and performance celebrates poets of the Muslim
                  Diaspora who were contributors to the Breakbeat Poet
                  Anthology: <em>Halal If You Hear Me.</em> Closes with a q/a
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Art as Life Itself
                </h3>
                <p className="mb-8">
                  Open Mic with Nina La Negra and Fulani Haynes
                </p>
                <p className="font-mono mt-6">
                  This will be a digital open mic hosted by long-time Roxbury
                  hosts, Nina La Negra and Fulani Haynes. This provides an
                  opportunity for folks to sign up to read on the open mic.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  The Literary Tea
                </h3>
                <p className="mb-8">
                  Cierra Peters, Arielle Gray, Print Ain't Dead
                </p>
                <p className="font-mono mt-6">
                  This casual discussion is facilitated by local collective,
                  Print Ain’t Dead and will implore the literary and historical
                  gossip associated with local and national literary movements &
                  writers.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  On Sound & Form
                </h3>
                <img
                  alt="Jill McDonough"
                  src="/img/speakers/jill-mcdonough.jpg"
                />
                <p className="font-mono mt-6">
                  Jill McDonough will be offering some ways to think about sound
                  and form in poems, then sharing some poems written by unhoused
                  and incarcerated writers who have spent time in writing
                  classrooms with Jill.
                </p>
                <div className="border border-black inline-block rounded-full mt-10 py-3 px-5">
                  <a href="#" className="flex items-center">
                    Register for this event
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </details>
          <div className="border-t border-black md:grid md:grid-cols-8 items-center md:w-full py-10">
            <div className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
              4:00pm - 5:00pm ET
            </div>
            <div className="md:col-span-4 lg:col-span-5 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Keynote Address w/ Jericho Brown
              </h3>
              <p>
                2020 Pulitzer Prize winner, Jericho Brown will perform a reading
                of his book. This talk will be moderated by a local artist.
                Hosted by Roxbury Branch Public Library.
              </p>
            </div>
          </div>
          <div className="border-t border-black md:grid md:grid-cols-8 items-center md:w-full py-10">
            <div className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
              5:00pm - 7:00pm ET
            </div>
            <div className="md:col-span-4 lg:col-span-5 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Publisher’s Poetry Slam
              </h3>
              <p>
                This poetry slam occurs outdoors in Nubian’s Square Blair Lot.
                It will be filmed by Button Poetry and alots the winner of the
                slam, a local writer, a chap book deal from the publisher,
                Button Poetry. This event is only open to poetry living in
                Massachusetts. Hosted by Button Poetry.
              </p>
            </div>
          </div>
          <div className="border-t border-black md:grid md:grid-cols-8 items-center md:w-full py-10">
            <div className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
              7:00pm - 9:00pm ET
            </div>
            <div className="md:col-span-4 lg:col-span-5 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Boston Un-Versed: a concert
              </h3>
              <p>
                Inspired by the online Versuz series this event will take place
                in the Blair Lot and feature local hip hop artists in a
                friendly. Hosted by DJ Why SHam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
