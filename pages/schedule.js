import Link from "next/link";
import Head from "next/head";
import Layout from "@components/layout";

export default function Schedule() {
  return (
    <Layout>
      <Head>
        <title>Roxbury Poetry Festival</title>
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
        <h2 className="font-bold mb-10 mt-24 md:text-4xl text-3xl">
          The Schedule
        </h2>
        <div>
          <details className="border-t">
            <summary className="focus:outline-none summaryWrap">
              <div className="md:grid md:grid-cols-3 md:gap-x-10 my-10">
                <div className="mb-6 md:mb-0 md:text-3xl text-2xl">
                  09:00am - 11:30am ET
                </div>
                <div className="md:col-span-2 flex md:text-lg justify-between">
                  Choose the session you want to to attend! We’ll have a
                  publishing panel and two writing workshops by Chen Chen and
                  Denice Froham. Workshops require registration ahead of time.
                  <div>
                    <svg className="fill-current ml-12" height="20" width="40">
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                  </div>
                </div>
              </div>
            </summary>
            <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-4">
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  On Publishing
                </h3>
                <p className="mb-8">The in’s, out’s and edits of publishing</p>
                <p className="font-mono mt-6">
                  This panel will consist of a variety of writers, editors and
                  publishers who will discuss and answer any questions
                  surrounding the success and challenges associated with
                  publishing in journals as well as a full-length manuscript.
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This writing workshop facilitated by Chen Chen
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This writing workshop will be facilitated by women of the
                  world poetry slam champion, Denice Froham
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This session will feature an author reading and a q/a
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
          <details className="border-t">
            <summary className="focus:outline-none summaryWrap">
              <div className="md:grid md:grid-cols-3 md:gap-x-10 my-10">
                <div className="mb-6 md:mb-0 md:text-3xl text-2xl">
                  11:30am - 1:00pm ET
                </div>
                <div className="md:col-span-2 flex md:text-lg justify-between">
                  We’ll have a panel and three writing workshops by Tatiana
                  Johnson-Boria, Aricka Foreman, and Rajiv Mohabir. Workshops
                  require registration ahead of time.
                  <div>
                    <svg className="fill-current ml-12" height="20" width="40">
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                  </div>
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
                  This panel will consist of artists, residents and city
                  planners to discuss the trajectory and dreams of Roxbury.
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This writing workshop facilitated by Roxbury native, Tatiana
                  Johnson-Boria
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This writing workshop will be facilitated by Detroit native
                  and Chicago Resident, Aricka Foreman
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This writing workshop will be facilitated by local professor,
                  MFA Rajiv Mohabir
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
          <details className="border-t">
            <summary className="focus:outline-none summaryWrap">
              <div className="md:grid md:grid-cols-3 md:gap-x-10 my-10">
                <div className="mb-6 md:mb-0 md:text-3xl text-2xl">
                  1:00pm - 2:00pm ET
                </div>
                <div className="md:col-span-2 flex md:text-lg justify-between">
                  Lunch Time Craft Talks & Discussions
                  <div>
                    <svg className="fill-current ml-12" height="20" width="40">
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                  </div>
                </div>
              </div>
            </summary>
            <div className="gap-x-20 grid md:grid-cols-2 mb-20 summaryDetail2Col">
              <div className="speakers-grid">
                <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                  Home Is Not A Country
                </h3>
                <p className="mb-8">
                  This event is hosted by Roxbury Resident and youth Poet
                  Laureate Finalist, A
                </p>
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  Home is Not A Country is a talk and reading with Safia Elhilio
                  and a Roxbury Youth Poet Laureate Finalist regarding Elhillo’s
                  recently released YA novel written in verse.
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <p className="mb-8">Moderator: Grub Street</p>
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This craft talk encourages participants to bring their lunch
                  on screen while be inspired to think about writing differently
                  with poet and performer, Rachel McKibbens
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
          <details className="border-t">
            <summary className="focus:outline-none summaryWrap">
              <div className="md:grid md:grid-cols-3 md:gap-x-10 my-10">
                <div className="mb-6 md:mb-0 md:text-3xl text-2xl">
                  2:00pm - 3:00pm ET
                </div>
                <div className="md:col-span-2 flex md:text-lg justify-between">
                  Readings, Performances & Conversations
                  <div>
                    <svg className="fill-current ml-12" height="20" width="40">
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                  </div>
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
                <p className="font-mono mt-6">
                  This reading and performance features latinext folks who were
                  published in the BreakBeat Poets Anthology. Closes with a q/a
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This reading highlights writers who have made an impact on the
                  poetry world nationally and locally. #LocalLivingLegends
                  Closes with a q/a
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This performance features youth poets published in 826
                  Anthology. The reading takes place outside the Roxbury Branch
                  Library
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                  Ashley Rose
                </h3>
                <p className="mb-8">Guest Curation</p>
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This event will be curated by poet Ashley Rose.
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
          <details className="border-t">
            <summary className="focus:outline-none summaryWrap">
              <div className="md:grid md:grid-cols-3 md:gap-x-10 my-10">
                <div className="mb-6 md:mb-0 md:text-3xl text-2xl">
                  3:00pm - 4:00pm ET
                </div>
                <div className="md:col-span-2 flex md:text-lg justify-between">
                  Readings, Performances & Conversations
                  <div>
                    <svg className="fill-current ml-12" height="20" width="40">
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                  </div>
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
                <p className="font-mono mt-6">
                  This reading and performance celebrates poets of the Muslim
                  Diaspora who were contributors to the Breakbeat Poet
                  Anthology: Halal If You Hear Me. Closes with a q/a
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This will be a digital open mic hosted by long-time Roxbury
                  hosts, Nina La Negra and Fulani Haynes. This provides an
                  opportunity for folks to sign up to read on the open mic.
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  This casual discussion is facilitated by local collective,
                  Print Ain’t Dead and will discuss some of the literary and
                  historical gossip associated with the local and national
                  literary movements & writers
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
                <p className="mb-8">Jill McDonough</p>
                <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
                <p className="font-mono mt-6">
                  Jill McDonough will be offering some ways to think about sound
                  and form in poems, then sharing some poems written by unhoused
                  and incarcerated writers who have spent time in writing
                  classrooms with Jill
                </p>
                <div className="border inline-block rounded-full mt-10 py-3 px-5">
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
          <div className="border-t md:grid md:grid-cols-3 md:gap-x-10 py-10">
            <div className="mb-6 md:mb-0 md:text-3xl text-2xl">
              4:00pm - 5:00pm ET
            </div>
            <div className="md:col-span-2 mr-16 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Keynote Address w/ Jericho Brown
              </h3>
              <p>
                2020 Pulitzer Prize winner, Jericho Brown will perform a reading
                of his book. This talk will be moderated by a local artist.
                Hosted by Roxbury Branch Public Library.
              </p>
              <div className="border inline-block rounded-full mt-10 py-3 px-5">
                <a href="#" className="flex items-center">
                  Register for this event
                  <svg className="fill-current ml-2" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t md:grid md:grid-cols-3 md:gap-x-10 py-10">
            <div className="mb-6 md:mb-0 md:text-3xl text-2xl">
              5:00pm - 7:00pm ET
            </div>
            <div className="col-span-2 mr-16 text-lg">
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
              <div className="border inline-block rounded-full mt-10 py-3 px-5">
                <a href="#" className="flex items-center">
                  Register for this event
                  <svg className="fill-current ml-2" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t md:grid md:grid-cols-3 md:gap-x-10 py-10">
            <div className="mb-6 md:mb-0 md:text-3xl text-2xl">
              7:00pm - 9:00pm ET
            </div>
            <div className="col-span-2 mr-16 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Boston Un-Versed: a concert
              </h3>
              <p>
                Inspired by the online Versuz series this event will take place
                in the Blair Lot and feature local hip hop artists in a
                friendly. Hosted by DJ Why SHam.
              </p>
              <div className="border inline-block rounded-full mt-10 py-3 px-5">
                <a href="#" className="flex items-center">
                  Register for this event
                  <svg className="fill-current ml-2" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
