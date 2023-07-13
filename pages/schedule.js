import Link from 'next/link'
import Layout from '@components/Layout'

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
            <details>
              <summary className="focus:outline-none summaryWrap">
                <div className="event flex md:grid md:grid-cols-8 items-center justify-between py-10">
                  <div className="md:col-span-7">
                    <div className="md:grid md:grid-cols-7 md:items-center md:w-full">
                      <p className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
                        10:00am - 11:15am
                      </p>
                      <div className="md:col-span-3 lg:col-span-4 md:text-lg">
                        Panels & Workshops
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
                    Journalism 101
                  </h3>
                  {/* <div className="home-images w-full" /> */}
                  <p className="mb-8">Facilitated by Cristela Guerra</p>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
                    Not Poetry: Word Play With A Purpose!
                  </h3>
                  <p className="mb-8">Workshop</p>
                  {/* <div className="schedule-image-rachel">
                    <img
                      alt="Rachel McKibbens"
                      src="/img/speakers/rachel-mckibbens.jpg"
                    />
                  </div> */}
                  <details className="font-mono mt-6">
                    since he was a kid. After doing so, and studying the craft
                    of writing and performing poetry for decades, he has
                    gathered and developed many techniques to open the creative
                    mind. This will be a lively writing workshop for students
                    who want to write without all the rules. Let's peep under
                    the left and right sides of the brain and see what peeps
                    back!
                    <summary className="focus:outline-none textWrap">
                      Literary Performer, Educator, and Former National Poetry
                      Slam Champion, Regie Gibson, has been having fun with
                      language
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
                <div className="event flex md:grid md:grid-cols-3 items-center justify-between py-10 gap-x-20">
                  <p className="md:col-span-4 lg:col-span-1 mb-6 md:mb-0 md:text-3xl text-2xl">
                    11:30am - 12:45pm
                  </p>
                  <div className="md:col-span-3 lg:col-span-1 md:text-lg">
                    Workshops & Panels
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
              <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-3">
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    How We Take Up Space: A poetic workshop on spatial justice
                  </h3>
                  <p className="mb-8">Workshop</p>
                  {/* <div className="dreamscape-images w-full" /> */}
                  <details className="font-mono mt-6">
                    The space we live in can have negative as well as positive
                    consequences on everything we do.
                    <br />
                    <br />
                    In this workshop, poets, writers, and beautiful beings will
                    reflect on the concept of spatial justice and how that shows
                    up in their mind, body, and personal life. Together, we will
                    redefine spatial justice. Then, craft and share original
                    poems on our collective and individual concepts.
                    <br />
                    <br />
                    Note: All participants must come prepared to be empowered to
                    be vulnerable + ready to take up space on the page and mic.
                    <summary className="focus:outline-none textWrap">
                      Spatial justice involves “the fair and equitable
                      distribution in space of socially valued resources and
                      opportunities to use them” (Soja 2009).
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
                    Intro to Screenwriting: Learn the Basics in 90 Minutes
                  </h3>
                  {/* <p className="mb-8">Writing Workshop and Panel</p> */}
                  <div className="schedule-image">
                    {/* <img
                      alt="Tatiana Johnson-Boria"
                      src="/img/speakers/tatiana-johnson-boria.jpg"
                    /> */}
                  </div>
                  <details className="font-mono mt-6">
                    This class is a great place to start! In this introductory
                    workshop, we will start with idea generation and then move
                    to structure, format, and a discussion of software and
                    online resources to begin your script. From there, we will
                    study scenes, feature length plot structure. This class is
                    meant to be for beginners and by the end of this fast-paced
                    workshop students will walk away with basic knowledge of
                    screenwriting to give them the foundation to continue
                    bringing their script ideas to life!
                    <summary className="focus:outline-none textWrap">
                      Do you have an idea for a feature length screenplay, but
                      you aren't sure how to begin?
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
                    Culture as Container: How Identities Serve as Forms for
                    Writing
                  </h3>
                  <p className="mb-8">Reading & Panel</p>
                  <div className="schedule-image">
                    {/* <img
                      alt="Aricka Foreman"
                      src="/img/speakers/aricka-foreman.jpg"
                    /> */}
                  </div>
                  <details className="font-mono mt-6">
                    Plot lines, images, and other craft elements take on some
                    unique approaches, creating containers that the writers find
                    themselves within or rail against from piece to piece. Four
                    writers will read from their poetry and discuss how their
                    cultural backgrounds serve as forms for their work,
                    highlighting specific craft elements in their own work and
                    work of their kin writers, as well as distinct aspects of
                    craft that they see as originating from within their
                    communities.
                    <summary className="focus:outline-none textWrap">
                      Identity and ancestry can create recurring signatures in
                      writing.
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
              1:00pm - 2:15pm ET
            </div>
            <div className="md:col-span-4 lg:col-span-5 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Lunchtime Reading & Craft Talk
              </h3>
              <div className="lg:flex">
                <img
                  alt="Jericho Brown"
                  className="lg:h-full lg:w-1/3"
                  src="/img/speakers/jericho-brown.jpg"
                />
                <div className="mt-6 lg:ml-8 lg:mt-0 lg:w-2/3">
                  <p>
                    This lunchtime keynote will feature poet and professor, Nate
                    Marshall. Lunch will be provided for festival participants
                    Nate Marshall is an award-winning writer, editor, educator,
                    and MC. His most recent book, Finna, was recognized as one
                    of the best books of 2020 by NPR and The New York Public
                    Library. His first book, Wild Hundreds, was honored with the
                    Black Caucus of the American Library Association’s award for
                    Poetry Book of the Year and The Great Lakes College
                    Association’s New Writer Award. He was also an editor of The
                    BreakBeat Poets: New American Poetry in the Age of Hip-Hop.
                    Marshall co-wrote the play No Blue Memories: The Life of
                    Gwendolyn Brooks with Eve Ewing. He also wrote the audio
                    drama Bruh Rabbit & The Fantastic Telling of Remington
                    Ellis, Esq., which was produced by Make-Believe Association.
                    Marshall records hip-hop as a solo artist and with the group
                    Daily Lyrical Product.
                  </p>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
          <div className="schedule-grid">
            <details>
              <summary className="focus:outline-none summaryWrap">
                <div className="event flex md:grid md:grid-cols-3 items-center justify-between py-10 gap-x-20">
                  <p className="md:col-span-4 lg:col-span-1 mb-6 md:mb-0 md:text-3xl text-2xl">
                    2:30pm - 3:45pm ET
                  </p>
                  <div className="md:col-span-3 lg:col-span-1 md:text-lg">
                    Workshops & Readings
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
              <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-3">
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Transitions and Seasons: When things we love are no longer
                  </h3>
                  <p className="mb-8">Youth Writing Workshop + Mic</p>
                  {/* <div className="dreamscape-images w-full" /> */}
                  <details className="font-mono mt-6">
                    We discussed that odd and complex combination of feelings
                    when you want to move on but also want to start fresh. When
                    you want to relive something, but have to accept that it’s
                    changed. It’s that icky and odd space in between the process
                    of something ending and the process of something new taking
                    its place. Poets in this workshop will spend time writing
                    about the inbetween, non existent transitional space, the
                    white page.
                    <summary className="focus:outline-none textWrap">
                      This workshop sprouted from a conversation I had with a
                      good writer friend of mine over a poem she sent me.
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
                    Who is this? Visioning Characters on the Page
                  </h3>
                  <p className="mb-8">Performance & Workshop</p>
                  <div className="schedule-image">
                    {/* <img
                      alt="Tatiana Johnson-Boria"
                      src="/img/speakers/tatiana-johnson-boria.jpg"
                    /> */}
                  </div>
                  <details className="font-mono mt-6">
                    In this session, Letta will perform a few of the play's
                    monologues and then lead participants through writing their
                    own persona poems and monologues. More specifically,
                    participants in this workshop will explore the intricacies
                    and magic of weaving one character's narrative into the
                    makeup of another character. Letta Neely, in terms of
                    writing characters, will teach us how to "pull it all into
                    the current."
                    <summary className="focus:outline-none textWrap">
                      Pulling It All Into The Current is a one-person choreopoem
                      and play by writer and organizer, Letta Neely. The play
                      explores various characters through some of their most
                      defining life moments.
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
                    S(Mothering)
                  </h3>
                  <p className="mb-8">
                    Facilitated by Crystal Valentine, Anna Ross, and Yara
                    Liceaga
                  </p>
                  <div className="schedule-image">
                    {/* <img
                      alt="Aricka Foreman"
                      src="/img/speakers/aricka-foreman.jpg"
                    /> */}
                  </div>
                  <details className="font-mono mt-6">
                    Poet will explore motherhood in all of its glorious, and
                    inglorious ways.
                    <summary className="focus:outline-none textWrap">
                      This curated reading and discussion will feature poets who
                      write about their mothers, or who write about mothers.
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
                <div className="event flex md:grid md:grid-cols-3 items-center justify-between py-10 gap-x-20">
                  <p className="md:col-span-4 lg:col-span-1 mb-6 md:mb-0 md:text-3xl text-2xl">
                    4:00pm - 5:15pm ET
                  </p>
                  <div className="md:col-span-3 lg:col-span-1 md:text-lg">
                    How to Write a Poem
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
              <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-3">
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    How to Write a Poem
                  </h3>
                  <p className="mb-8">Writing Workshop</p>
                  {/* <div className="dreamscape-images w-full" /> */}
                  <details className="font-mono mt-6">
                    and space and what they do in general and then we'll write
                    one poem at least on the spot and I'll leave you with a list
                    of ways you can make another poem and then another instantly
                    without getting in your own way. My philosophy is make more
                    poems rather fixing one over and over. So this is a lots of
                    poems workshop as a matter of fact.
                    <summary className="focus:outline-none textWrap">
                      This is a sophisticated workshop for beginners and
                      advanced folks. We will look at a handful of poems and
                      think about how they manage time
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
                    BARS with Brandie Blaze
                  </h3>
                  <p className="mb-8">Writing Workshop</p>
                  <div className="schedule-image">
                    {/* <img
                      alt="Tatiana Johnson-Boria"
                      src="/img/speakers/tatiana-johnson-boria.jpg"
                    /> */}
                  </div>
                  <details className="font-mono mt-6">
                    Blaze will move through, instructing folks on how to write a
                    bar while also adding nuance to ensure your voice, tone,
                    rhyme is as slick as its intended to be. All levels are
                    welcome
                    <summary className="focus:outline-none textWrap">
                      This writing workshop with MC Brandie Blaze is an
                      introduction to the structural song unit of a rap BAR.
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
                    If You Can Feel It, You Can Speak It
                  </h3>
                  {/* <p className="mb-8">Reading & Panel</p> */}
                  <div className="schedule-image">
                    {/* <img
                      alt="Aricka Foreman"
                      src="/img/speakers/aricka-foreman.jpg"
                    /> */}
                  </div>
                  <details className="font-mono mt-6">
                    This space is open to all. Come, sign up to read something
                    you just wrote, sign up to read your favorite please or just
                    attend and listen! Sign up sheets will be available on site.
                    <summary className="focus:outline-none textWrap">
                      Boston's only monthly open mic movement dedicated to
                      voices & experiences of the LGBTQ+ communities of color.
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
          {/* <div className="schedule-grid">
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
                    to the Breakbeat Poet Anthology:{' '}
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
          </div> */}
          <div className="border-t border-black md:grid md:grid-cols-8 items-center md:w-full py-10">
            <div className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
              5:30pm - 6:30pm ET
            </div>
            <div className="md:col-span-4 lg:col-span-5 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Keynote Address w/ Hanif Abdaraquib
              </h3>
              <div className="lg:flex">
                <img
                  alt="Jericho Brown"
                  className="lg:h-full lg:w-1/3"
                  src="/img/speakers/jericho-brown.jpg"
                />
                <div className="mt-6 lg:ml-8 lg:mt-0 lg:w-2/3">
                  <details className="font-mono mt-6">
                    His first full length poetry collection, The Crown Ain't
                    Worth Much, was released in June 2016 from Button Poetry. It
                    was named a finalist for the Eric Hoffer Book Prize, and was
                    nominated for a Hurston-Wright Legacy Award. His first
                    collection of essays, They Can't Kill Us Until They Kill Us,
                    was released in winter 2017 by Two Dollar Radio and was
                    named a book of the year by Buzzfeed, Esquire, NPR, Oprah
                    Magazine, Paste, CBC, The Los Angeles Review, Pitchfork, and
                    The Chicago Tribune, among others. He released Go Ahead In
                    The Rain: Notes To A Tribe Called Quest with University of
                    Texas press in February 2019. The book became a New York
                    Times Bestseller, was a finalist for the Kirkus Prize, and
                    was longlisted for the National Book Award. His second
                    collection of poems, A Fortune For Your Disaster, was
                    released in 2019 by Tin House, and won the 2020 Lenore
                    Marshall Prize. His newest release, A Little Devil In
                    America (Random House, 2021) was a winner of the Andrew
                    Carnegie Medal and the Gordon Burn Prize, a finalist for the
                    National Book Critics Circle Award and the
                    Pen/Diamonstein-Spielvogel Award . In 2021, Abdurraqib was
                    named a MacArthur Fellow. He is a graduate of Beechcroft
                    High School.
                    <summary className="focus:outline-none textWrap">
                      Hanif Abdurraqib is a poet, essayist, and cultural critic
                      from Columbus, Ohio. His poetry has been published in
                      Muzzle, Vinyl, PEN American, and various other journals.
                      His essays and music criticism have been published in The
                      FADER, Pitchfork, The New Yorker, and The New York Times.
                    </summary>
                  </details>
                  <a
                    href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
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
              7:00pm - 9:00pm ET
            </div>
            <div className="md:col-span-4 lg:col-span-5 text-lg">
              <h3 className="mb-4 md:text-4xl text-3xl uppercase">
                Publisher’s Poetry Slam
              </h3>
              <p>
                This poetry slam is taking place at the Bruce C Bolling Building.
                It will be filmed by Button Poetry and allots the winner of the
                slam, a local writer, a chapbook deal from the publisher,
                Button Poetry. This event is only open to poets living in
                Massachusetts. Hosted by Harlym 125.
              </p>
              <Link href="/slam">
                <a
                  className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  More info about the slam
                  <svg className="fill-current ml-2" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="font-mono md:text-lg max-w-7xl md:mt-24 mx-auto">
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
        </div> */}
      </div>
    </Layout>
  )
}
