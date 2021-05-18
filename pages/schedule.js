import Link from "next/link";
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
        <h2 className="font-bold my-10 md:text-4xl text-3xl">The Schedule</h2>
        <div>
          <div className="schedule-grid">
            <details open>
              <summary className="focus:outline-none summaryWrap">
                <div className="event flex md:grid md:grid-cols-8 items-center justify-between py-10">
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
                  <div className="flex flex-col items-end md:col-span-1 speakers-grid-arrows">
                    <svg
                      className="fill-current open-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                    <svg
                      className="fill-current hidden closed-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-downarrow" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-4">
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Paths to Publication
                  </h3>
                  <p className="mb-8">
                    A Panel with Kristina Marie Darling, Ryan Murphy, Frances
                    Donovan, George Abraham, Lillian-Yvonne Bertram
                  </p>
                  <div className="publication-images w-full" />
                  <details className="font-mono mt-6">
                    with publishing in journals as well as publishing a
                    full-length manuscript.
                    <summary className="focus:outline-none textWrap">
                      This panel will consist of a variety of writers, editors
                      and publishers who will discuss and answer any questions
                      associated
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Elegy in a Time of Pandemic
                  </h3>
                  <p className="mb-8">Writing Workshop</p>
                  <div className="schedule-image">
                    <img alt="Chen Chen" src="/img/speakers/chen-chen.jpg" />
                  </div>
                  <details className="font-mono mt-6">
                    address? Can poems speak to job loss, loss of everyday
                    routines, loss of future plans, and missing friends? And
                    what if we simply can’t write poems at this moment—what do
                    we do with the loss of our sense of being poets? In this
                    generative workshop, we’ll make space for all these
                    questions, looking to a range of elegies not for neat
                    answers (which don’t exist anyway) but a deepening of our
                    attention to where we are, who we are, in the midst of
                    crisis.
                    <summary className="focus:outline-none textWrap">
                      How do we write about grief right now, when there are so
                      many (and simultaneous) forms of grief to
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Sweet Impossible Blossom
                  </h3>
                  <p className="mb-8">Writing Workshop</p>
                  <div className="schedule-image">
                    <img
                      alt="Denice Frohman"
                      src="/img/speakers/denice-frohman.jpg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    embodied space by drawing our attention to the everyday
                    moments in our lives that can hold meaning. We’ll explore
                    the work of contemporary poets like Aracelis Girmay, Ross
                    Gay, and Li-Young Lee, and think through the following
                    question: How can writing toward or from the body open up
                    other portals of experience? By mining the mundane, we’ll
                    root ourselves in the present and reconsider what these
                    moments can hold.
                    <summary className="focus:outline-none textWrap">
                      Jenna Wortham once wrote, “Embodiment is an act of
                      resistance.” In this workshop we’ll write toward a more
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Poetry is Not A Luxury
                  </h3>
                  <p className="mb-8">
                    Reading & Discussion with Janice Lobo Sapiago & Angelo Geter
                  </p>
                  <div className="poetry-luxury-images w-full" />
                  <details className="font-mono mt-6">
                    SC, Angelo Geter and the Poet Laureate of Santa Clara
                    County, CA Janice Lobo Sapiago. Poets will perform a reading
                    of their work and engage in conversations around poetry,
                    civic service, and landscaping spaces for youth poets.
                    <summary className="focus:outline-none textWrap">
                      Hosted by the Academy of American Poets, this reading and
                      discussion brings together the Poet Laureate of Rock Hill,
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </details>
          </div>
          <div className="schedule-grid">
            <details>
              <summary className="focus:outline-none summaryWrap">
                <div className="event flex md:grid md:grid-cols-8 items-center justify-between py-10">
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
                  <div className="flex flex-col items-end md:col-span-1 speakers-grid-arrows">
                    <svg
                      className="fill-current open-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                    <svg
                      className="fill-current hidden closed-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-downarrow" />
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
                  <div className="dreamscape-images w-full" />
                  <details className="font-mono mt-6">
                    discussion is moderated by Marisa Luse.
                    <summary className="focus:outline-none textWrap">
                      This panel will consist of artists, residents, youth and
                      city planners and will center around futurescaping
                      Roxbury. This panel
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Writing our Mothers
                  </h3>
                  <p className="mb-8">Writing Workshop and Panel</p>
                  <div className="schedule-image">
                    <img
                      alt="Tatiana Johnson-Boria"
                      src="/img/speakers/tatiana-johnson-boria.jpg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    can we explore mothers as vessels, as nurturers, as sources
                    of harm, as sources of healing within our work? How can we
                    make space for our own capacity to mother ourselves? In this
                    workshop we'll be going through a series of exercises and
                    explorations meant to generate new work while also hearing
                    from others about their own artistic expressions of the
                    mother-self relationship. The reading component of this
                    workshop will feature Crystal Valentine, Aleshea Harris,
                    Alicia Lochard and Dasia Moore.
                    <summary className="focus:outline-none textWrap">
                      The poet and artist, Krista Franklin, has called mothers:
                      "ancestral, mythical, and living." How
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    What Awaits Is What We Make It
                  </h3>
                  <p className="mb-8">Writing Workshop</p>
                  <div className="schedule-image">
                    <img
                      alt="Aricka Foreman"
                      src="/img/speakers/aricka-foreman.jpg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    hope. We'll cull together a tapestry from what we've
                    assembled: music, film, visual art. It's in this wellspring
                    we dream. Let's dream together.
                    <summary className="focus:outline-none textWrap">
                      At a moment of continued reckoning, we seek something
                      righteous for ourselves: pleasure, witness and
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    At Home in the Moving Body
                  </h3>
                  <p className="mb-8">
                    Connecting Body, Breath, and Image: Writing Workshop
                  </p>
                  <div className="schedule-image">
                    <img
                      alt="Rajiv Mohabir"
                      src="/img/speakers/rajiv-mohabir.jpg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    Taking a tip from breathing exercises, we will work together
                    to create unexpected and deep images that bear our
                    understanding of what the body can do as an antenna for our
                    experience of being human. Central to this will be thinking
                    through the various migrations and motions our bodies make
                    and have a memory of making. This will include engaging the
                    concept of home in its complexities for the poet and the
                    poem's speaker.
                    <summary className="focus:outline-none textWrap">
                      In this workshop we will connect and constellate the
                      poet’s body to the literary image and to the poetic line.
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </details>
          </div>
          <div className="schedule-grid">
            <details>
              <summary className="focus:outline-none summaryWrap">
                <div className="event flex md:grid md:grid-cols-8 items-center justify-between py-10">
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
                  <div className="flex flex-col items-end md:col-span-1 speakers-grid-arrows">
                    <svg
                      className="fill-current open-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                    <svg
                      className="fill-current hidden closed-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-downarrow" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="gap-x-20 gap-y-20 grid md:grid-cols-2 xl:grid-cols-6 mb-20 summaryDetail">
                <div className="speakers-grid xl:col-span-2 xl:col-start-3">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Home Is Not A Country
                  </h3>
                  <div className="home-images w-full" />
                  <details className="font-mono mt-6">
                    written in verse. Participants are encouraged to bring their
                    lunch on screen while enjoying this conversation.
                    <summary className="focus:outline-none textWrap">
                      Home is Not A Country is a talk and reading with Safia
                      Elhillo and a Roxbury Youth Poet Laureate Finalist, Asiyah
                      Herrera regarding Elhillo’s recently released YA novel
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid xl:col-span-2">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Craft Talk w/ Rachel McKibbens
                  </h3>
                  <p className="mb-8">
                    This event is in partnership with GrubStreet
                  </p>
                  <div className="schedule-image-rachel">
                    <img
                      alt="Rachel McKibbens"
                      src="/img/speakers/rachel-mckibbens.jpg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    vulnerability instead of an agent of confession? This craft
                    talk encourages participants to bring their lunch on screen
                    while enjoying a craft talk from poet and performer, Rachel
                    McKibbens.
                    <summary className="focus:outline-none textWrap">
                      As poets, we use devices to resurrect or bury, but how
                      often are we willing to lean into our own wickedness, to
                      give it its rightful placement as the second face of our
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </details>
          </div>
          <div className="schedule-grid">
            <details>
              <summary className="focus:outline-none summaryWrap">
                <div className="event flex md:grid md:grid-cols-8 items-center justify-between py-10">
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
                  <div className="flex flex-col items-end md:col-span-1 speakers-grid-arrows">
                    <svg
                      className="fill-current open-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                    <svg
                      className="fill-current hidden closed-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-downarrow" />
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
                  <div className="latinext-images w-full" />
                  <details className="font-mono mt-6">
                    Poet’s <em>LatiNEXT</em> Anthology. Closes with a Q/A.
                    <summary className="focus:outline-none textWrap">
                      This reading and performance features Latinext folks who
                      were published in the BreakBeat
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Flowers As They Live: Honoring Local Poets
                  </h3>
                  <p className="mb-8">
                    Askia Toure, Letta Neely, Martha Collins, Moderated by Toni
                    Bee
                  </p>
                  <div className="locals-images w-full" />
                  <details className="font-mono mt-6">
                    #LocalLivingLegends Closes with a Q/A.
                    <summary className="focus:outline-none textWrap">
                      This reading highlights writers who have made an impact on
                      the poetry world nationally and locally.
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    How We May Appear
                  </h3>
                  <p className="mb-8">826 Youth Anthology Reading</p>
                  <div className="schedule-image">
                    <img alt="826 Boston" src="/img/speakers/826-Boston.jpg" />
                  </div>
                  <details className="font-mono mt-6">
                    authored publication features stories and poems written by
                    young people across the city. As foreword author Amanda
                    Gorman says: "Reading the collection from my sunlit
                    apartment in Los Angeles, it is hard not to be struck with
                    the vision that these authors present: a vibrant and
                    youthful Boston, with its tongue of many languages, and
                    heart of many songs.” This performance features youth poets
                    published in 826 Boston Poetry Anthology. The reading takes
                    place outside the Roxbury Branch Library.
                    <summary className="focus:outline-none textWrap">
                      How We May Appear, the first anthology produced by 826
                      Boston's Youth Literary Advisory Board. This student-
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    50 Rappers Who Changed The World
                  </h3>
                  <p className="mb-8">Author Interview & Discussion</p>
                  <div className="rappers-images w-full" />
                  <details className="font-mono mt-6">
                    book, 50 Rappers Who Changed the World. This session, like
                    the book, is a celebration of the musicians who shaped the
                    genre and changed the world.
                    <summary className="focus:outline-none textWrap">
                      Join writer, Candace McDuffie, and poet, Ashley Rose, for
                      a reading and discussion of McDuffie's
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </details>
          </div>
          <div className="schedule-grid">
            <details>
              <summary className="focus:outline-none summaryWrap">
                <div className="event flex md:grid md:grid-cols-8 items-center justify-between py-10">
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
                  <div className="flex flex-col items-end md:col-span-1 speakers-grid-arrows">
                    <svg
                      className="fill-current open-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-uparrow" />
                    </svg>
                    <svg
                      className="fill-current hidden closed-arrow"
                      height="20"
                      width="40"
                    >
                      <use xlinkHref="#icon-downarrow" />
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
                    Anthology Reading from Dr. Seema Yasmin, Nikia Chaney,
                    Yasmin Belkhyr
                  </p>
                  <div className="halal-images w-full" />
                  <details className="font-mono mt-6">
                    to the Breakbeat Poet Anthology:{" "}
                    <em>Halal If You Hear Me</em>. Closes with a Q/A.
                    <summary className="focus:outline-none textWrap">
                      This reading and performance celebrates poets of the
                      Muslim Diaspora who were contributors
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Art Is Life Itself
                  </h3>
                  <p className="mb-8">
                    Open Mic with Nina La Negra and Fulani Haynes
                  </p>
                  <div className="art-life-images w-full" />
                  <details className="font-mono mt-6">
                    performance and culture. Sign up for the open mic when you
                    register!
                    <summary className="focus:outline-none textWrap">
                      Join long-time Roxbury artist organizers, Fulani Haynes
                      and Nina LaNegra for an open mic that celebrates
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    The Literary Tea
                  </h3>
                  <p className="mb-8">
                    Cierra Peters and Arielle Gray, Print Ain't Dead
                  </p>
                  <div className="schedule-image">
                    <img
                      alt="Print Ain't Dead"
                      src="/img/speakers/print-aint-dead.jpg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    historical gossip associated with local and national
                    literary movements & writers.
                    <summary className="focus:outline-none textWrap">
                      This casual discussion is facilitated by local collective,
                      Print Ain’t Dead and will implore the literary and
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    New Writing from Incarcerated and Unhoused Bostonians
                  </h3>
                  <p className="mb-8">w/ Jill McDonough</p>
                  <div className="schedule-image">
                    <img
                      alt="Jill McDonough"
                      src="/img/speakers/jill-mcdonough.jpg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    poems written by unhoused and incarcerated writers who have
                    spent time in writing classrooms with Jill.
                    <summary className="focus:outline-none textWrap">
                      Jill McDonough will be offering some ways to think about
                      sound and form in poems, then sharing some
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </details>
          </div>
          <div className="border-t border-black md:grid md:grid-cols-8 items-center md:w-full py-10">
            <div className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
              4:00pm - 5:00pm ET
            </div>
            <div className="md:col-span-4 lg:col-span-5 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Keynote Address w/ Jericho Brown
              </h3>
              <div className="lg:flex">
                <img
                  alt="Jericho Brown"
                  className="lg:h-full lg:w-1/3"
                  src="/img/speakers/jericho-brown.jpg"
                />
                <div className="mt-6 lg:ml-8 lg:mt-0 lg:w-2/3">
                  <p>
                    2020 Pulitzer Prize winner, Jericho Brown, will read from
                    his book The Tradition and answer a few questions from the
                    audience. This talk will be moderated by a local artist.
                  </p>
                  <a
                    href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
                    className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <p>Register for this event</p>
                    <svg className="fill-current ml-2" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </div>
              </div>
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
                Massachusetts. Hosted by Harlym 125.
              </p>
              <a
                href="https://cityofbostonartsandculture.submittable.com/submit/83c697df-d09a-4203-86e7-28efb999f290/roxbury-poetry-festival-publishers-poetry-slam"
                className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                rel="noreferrer noopener"
                target="_blank"
              >
                Register for the Slam
                <svg className="fill-current ml-2" height="12" width="15">
                  <use xlinkHref="#icon-rightarrow" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-black md:grid md:grid-cols-8 items-center md:w-full py-10">
            <div className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
              7:00pm - 9:00pm ET
            </div>
            <div className="md:col-span-4 lg:col-span-5 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Beast The Beat
              </h3>
              <p>
                Inspired by the online Versuz series this event will take place
                in the Blair Lot and feature local hip hop artists in a
                friendly.
              </p>
            </div>
          </div>
        </div>
        <div className="font-mono md:text-lg max-w-7xl md:mt-24 mx-auto">
          <h3 className="font-bold mb-2">Public Safety and COVID-19</h3>
          <p>
            Due to the pandemic and the goal to ensure a public health-conscious
            space, this year’s festival will take place online via Zoom.
            Depending on the speaker's comfort, some readings will air via Zoom
            at a partnership site (i.e. Hibernian Hall) and without a live
            audience. If health mandates permit, The Publisher’s Poetry Slam and
            Boston’s Beast the Beat will take place outdoors in Nubian Square’s
            Blair Lot. In addition to onsite sanitizers, mandated masks, and
            public health care representatives, there will be social distance
            markers and volunteers to ensure the community members are socially
            distancing and masked.
          </p>
        </div>
      </div>
    </Layout>
  );
}
