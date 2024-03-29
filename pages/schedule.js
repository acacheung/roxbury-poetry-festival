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
            <details open>
              <summary className="focus:outline-none summaryWrap">
                <div className="event flex md:grid md:grid-cols-3 items-center justify-between py-10 gap-x-20">
                  <p className="md:col-span-4 lg:col-span-1 mb-6 md:mb-0 md:text-3xl text-2xl">
                    10:00am - 11:15am
                  </p>
                  <div className="md:col-span-3 lg:col-span-1 md:text-lg">
                    Panels & Workshops
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
                    Journalism 101
                  </h3>
                  <p className="mb-8">Facilitated by Cristela Guerra</p>
                  <div className="schedule-image">
                    <img
                      alt="Cristela Guerra"
                      src="/img/speakers/2023/cristela.jpeg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    Before working in public radio, she was a newspaper
                    journalist for more than a decade, working at The Boston
                    Globe and The News-Press in Fort Myers, Florida. She is one
                    of 24 journalists from around the world selected for the
                    2024 class of the{' '}
                    <a
                      className="underline"
                      href="https://nieman.harvard.edu/"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      Nieman Foundation
                    </a>{' '}
                    for Journalism at Harvard University. Her work received a
                    regional and national Edward R. Murrow Award in 2014 and
                    most recently received another regional Edward R. Murrow in
                    2023 as part of “Continuing Coverage” for her work at the
                    U.S.-Mexico border on the journey of Venezuelans migrants.
                    She was chosen as a 2019 Latina Leader by Amplify Latinx and
                    selected by YW Boston to be inducted into its 2023 Academy
                    of Women Achievers and receive the organization’s Sylvia
                    Ferrell-Jones Award. They are the vice-president of the New
                    England Chapter of the National Association of Hispanic
                    Journalists, vice-chair of the board at RAW Art Works, and a
                    board member at The Jar.
                    <summary className="focus:outline-none textWrap">
                      <a
                        className="underline"
                        href="https://www.wbur.org/inside/staff/cristela-guerra"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Cristela Guerra
                      </a>{' '}
                      is a senior arts and culture reporter at WBUR in Boston, a
                      queer Panamanian journalist of color, and a moderator who
                      facilitates and leads conversations around race, identity,
                      and equity.
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
                    Not Poetry: Word Play With A Purpose!
                  </h3>
                  <p className="mb-8">Workshop by Regie Gibson</p>
                  <div className="schedule-image">
                    <img
                      alt="Regie Gibson"
                      src="/img/speakers/2023/regie-gibson.jpg"
                    />
                  </div>
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
                <div className="speakers-grid">
                  <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                    Dreamscape: Future of Roxbury II
                  </h3>
                  <p className="mb-8">
                    Panel Discussion by Eric “Pops” Esteves
                  </p>
                  <div className="schedule-image">
                    <img
                      alt="Eric Pops Estevs"
                      src="/img/speakers/2023/eric-pops-esteves.png"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    others to discuss a dreamscape for Roxbury's future. This
                    discussion will be curated by Eric “Pops” Esteves.
                    <summary className="focus:outline-none textWrap">
                      This panel discussion will explore the past and
                      presentfuture of Roxbury. It offers a space for natives,
                      transplants and
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
                  <p className="mb-8">Workshop by Nakia Hill</p>
                  <div className="schedule-image">
                    <img alt="Nakia Hill" src="/img/speakers/nakia-hill.jpg" />
                  </div>
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
                  <p className="mb-8">Workshop by Paloma Valenzuela</p>
                  <div className="schedule-image">
                    <img
                      alt="Paloma Valenzuela"
                      src="/img/speakers/2023/paloma-valenzuela.jpg"
                    />
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
                  <p className="mb-8">
                    Reading & Panel by Quintin Collins, Imani Davis, Matthew E.
                    Henry and Sarah Kersey
                  </p>
                  <div className="culturecontainer-images w-full" />
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
                  alt="Nate Marshall"
                  className="lg:h-full lg:w-1/3"
                  src="/img/speakers/2023/nate-marshall.png"
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
                  <p className="mb-8">
                    Youth Writing Workshop + Mic by Alondra Bobadilla
                  </p>
                  <div className="schedule-image">
                    <img
                      alt="Alondra Bobadilla"
                      src="/img/speakers/2023/alondra-babidilla.png"
                    />
                  </div>
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
                    Poetry and Songwriting Inspired by Mediation
                  </h3>
                  <p className="mb-8">Workshop by Naomi Westwater</p>
                  <div className="schedule-image">
                    <img
                      alt="Naomi Westwater"
                      src="/img/speakers/2023/naomi-westwater.jpg"
                    />
                  </div>
                  <details className="font-mono mt-6">
                    allow you to relax and come back to yourself, and then, from
                    a place of calm, begin to write. We will start with a
                    visualization meditation on nature, then move into a free
                    write, and end the workshop focusing on writing lyrics or a
                    poem in the form of a villanelle. This workshop is open for
                    poets and/or songwriters.
                    <summary className="focus:outline-none textWrap">
                      Often as writers we find it hard to tap into creativity
                      with the constant pull and stress of daily life. This
                      workshop is designed to
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
                    Liceaga-Rojas
                  </p>
                  <div className="smothering-images w-full" />
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
                    How to Write a Poem
                  </h3>
                  <p className="mb-8">Writing Workshop by Eileen Myles</p>
                  <div className="schedule-image">
                    <img
                      alt="Carolyn Macartney"
                      src="/img/speakers/2023/carolyn-macartney.jpg"
                    />
                  </div>
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
                  <p className="mb-8">Writing Workshop by Brandie Blaze</p>
                  <div className="schedule-image">
                    <img
                      alt="Brandie Blaze"
                      src="/img/speakers/brandie-blaze.jpg"
                    />
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
                  <p className="mb-8">
                    Open Mic Movement by Jha D, D Ruff, If You Can Feel It
                  </p>
                  <div className="schedule-image">
                    <img
                      alt="Jha D"
                      src="/img/speakers/2023/if-you-can-feel-it.png"
                    />
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
                  alt="Hanif Abdaraquib"
                  className="lg:h-full lg:w-1/3"
                  src="/img/speakers/hanif-abdurraqib.jpg"
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
                This poetry slam is taking place at the Bruce C Bolling
                Building. It will be filmed by Button Poetry and allots the
                winner of the slam, a local writer, a chapbook deal from the
                publisher, Button Poetry. This event is only open to poets
                living in Massachusetts. Hosted by Harlym 125.
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
