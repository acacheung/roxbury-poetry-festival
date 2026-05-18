import Link from 'next/link'
import Layout from '@components/Layout'
import { registrationLabel, registrationUrl } from '../lib/registration'

function RegistrationLink({ className = '', variant = 'default' }) {
  const variantClassName =
    variant === 'large'
      ? 'bg-[#d8f4ff] font-bold hover:bg-[#f3e7ff] hover:shadow-[3px_3px_0_#6fc7b5] hover:-translate-y-0.5 md:text-lg px-5 py-3 shadow-[6px_6px_0_#ff8f70] text-base transition uppercase'
      : variant === 'session'
      ? 'bg-[#d8f4ff] md:text-lg text-base font-bold uppercase px-5 py-3 shadow-[6px_6px_0_#ff8f70] hover:bg-[#f3e7ff] hover:shadow-[3px_3px_0_#6fc7b5] hover:-translate-y-0.5 transition'
      : 'py-2 px-4'

  return (
    <a
      className={`border border-black inline-flex rounded-full items-center ${variantClassName} ${className}`}
      href={registrationUrl}
      rel="noreferrer noopener"
      target="_blank"
    >
      {registrationLabel}
      <svg className="fill-current ml-2" height="12" width="15">
        <use xlinkHref="#icon-rightarrow" />
      </svg>
    </a>
  )
}

const speakerNamesBySlug = {
  'amanda-gunn': 'Amanda Gunn',
  'crystal-valentine': 'Crystal Valentine',
  'emmanuel-oppong-yeboah': 'Emmanuel Oppong-Yeboah',
  'eric-esteves': 'Eric Esteves',
  'george-abraham': 'George Abraham',
  'hannah-moushabeck': 'Hannah Moushabeck',
  'ife-franklin': 'Ife Franklin',
  'jenee-osterheldt': 'Jeneé Osterheldt',
  'jenny-molberg': 'Jenny Molberg',
  'jill-mcdonough': 'Jill McDonough',
  'kayla-kennedy': 'Kayla Kennedy',
  'kes-maro': 'Kes Maro',
  'kwame-dawes': 'Kwame Dawes',
  'maria-pinto': 'Maria Pinto',
  'matthew-e-henry': 'Matthew E. Henry',
  'mejdulene-bernard-shomali': 'Mejdulene Bernard Shomali',
  'perpetua-cannistraro': 'Perpetua Cannistraro',
  'quintin-collins': 'Quintin Collins',
  'sarah-kersey': 'Sarah Kersey',
  'stephen-hamilton': 'Stephen Hamilton',
  'tatiana-johnson-boria': 'Tatiana Johnson-Boria',
}

const scheduleBlocks = [
  {
    time: '10:00am - 11:15am',
    category: 'Panels & Workshops',
    open: true,
    sessions: [
      {
        title: 'The Artist Talk',
        meta: 'Panel discussion with Ife Franklin and Stephen Hamilton',
        images: [
          {
            src: '/img/speakers/2026/ifefranklin.jpg',
            alt: 'Ife Franklin',
          },
          {
            src: '/img/speakers/2026/Stephen-Hamilton.jpg',
            alt: 'Stephen Hamilton',
          },
        ],
        speakerSlugs: ['ife-franklin', 'stephen-hamilton'],
        description:
          'The Artist Talk brings together Roxbury-based artists Stephen Hamilton and Ife Franklin for conversation, reflection, and creative exchange. Each artist will give a 15-minute presentation centered on the work they are currently developing, offering insight into their process, inspirations, and evolving ideas before opening the floor for audience questions.',
      },
      {
        title: 'Nourishing the Body and Spirit: Poets Writing Food',
        meta: 'Writing workshop with Amanda Gunn',
        image: '/img/speakers/2026/Amanda+Gunn+Author+Photo+10.webp',
        imageAlt: 'Amanda Gunn',
        speakerSlugs: ['amanda-gunn'],
        description:
          'Poets often turn to the subject of food—and its careful preparation—to tell their unique family history, to explore their cultural inheritance, or to write themselves against the grain of a dominant culture. We’ll start this generative workshop with a short meditation to lead us to our heart-subject: What food, what recipe feels as delicious and deep as home to you? Whose hands were the hands that prepared the food that fed you? We’ll look at poems in a range of forms that explore nourishment that is both physical and spiritual and, together, free-write poems that tell our own food stories.',
      },
      {
        title: 'Reconsidering the Page',
        meta: 'Writing workshop with Kes Maro and Kayla Kennedy',
        images: [
          {
            src: '/img/speakers/2026/kes maro.jpg',
            alt: 'Kes Maro',
          },
          {
            src: '/img/speakers/2026/Kayla kennedy .jpg',
            alt: 'Kayla Kennedy',
          },
        ],
        speakerSlugs: ['kes-maro', 'kayla-kennedy'],
        description:
          'A workshop for performance poets and anyone interested in reconsidering the relationship between form, the shape of the poem on the page, and structure, the way information is presented in the poem. Attendees will work through tools and exercises for revision, considering the line, tone, pacing, and the many versions of a poem.',
      },
    ],
  },
  {
    time: '11:30am - 12:45pm',
    category: 'Panels & Workshops',
    sessions: [
      {
        title: 'Dreamscape: Future of Roxbury III',
        meta: 'Panel + discussion curated by Eric “Pops” Esteves',
        image: '/img/speakers/2026/Eric Pops Esteves.jpeg',
        imageAlt: 'Eric Pops Esteves',
        speakerSlugs: ['eric-esteves'],
        description:
          'This panel discussion will explore the past and present future of Roxbury. It offers a space for natives, transplants, and others to discuss a dreamscape for Roxbury&apos;s future. This is the third and final installment of the session.',
      },
      {
        title: 'Goin’ Up Yonder: Religion in Black Poetics',
        meta: 'Panel reading with Quintin Collins, Matthew E. Henry, and Sarah Kersey',
        images: [
          {
            src: '/img/speakers/2026/Collins, Quintin 2024 self-portrait (1).jpg',
            alt: 'Quintin Collins',
          },
          {
            src: '/img/speakers/2026/MEH (d).jpg',
            alt: 'Matthew E. Henry',
          },
          {
            src: '/img/speakers/2026/Kersey, Sarah.jpeg',
            alt: 'Sarah Kersey',
          },
        ],
        speakerSlugs: ['quintin-collins', 'matthew-e-henry', 'sarah-kersey'],
        description:
          'For many in the Black American community, religion played a large role in upbringing. Four writers will read poems that include imagery, diction, and other aspects of religion, then discuss how these influences appear in and drive their work.',
      },
      {
        title: 'FUNNY HA HA: Writing Hilarious Poems with Jill McDonough',
        meta: 'Writing workshop with Jill McDonough',
        image: '/img/speakers/2026/Jill McDonough .jpg',
        imageAlt: 'Jill McDonough',
        speakerSlugs: ['jill-mcdonough'],
        description:
          'Let’s get together and tell funny stories and turn them into poems. This workshop uses free writing, non-sequiturs, quoted dialogue, wacky observations, inappropriate asides, slang, and storytelling techniques to sound like our hilarious selves on the page.',
      },
    ],
  },
  {
    time: '1:00pm - 2:15pm',
    category: 'Lunch Time Craft Talk',
    featured: {
      title: 'Lunch Time Craft Talk',
      meta: 'Details forthcoming',
      description:
        'The lunch time craft talk speaker and session details are still being finalized.',
    },
  },
  {
    time: '2:30pm - 3:45pm',
    category: 'Workshops & Readings',
    sessions: [
      {
        title: 'Surveying the Soil: A Generative Poetry Workshop',
        meta: 'Generative poetry workshop with Emmanuel Oppong Yeboah',
        image: '/img/speakers/2026/emmanuel oppong yeboah.jpg',
        imageAlt: 'Emmanuel Oppong Yeboah',
        speakerSlugs: ['emmanuel-oppong-yeboah'],
        description:
          'What is occupying your mind space right now? In this 75-minute generative writing workshop, participants will tune into the themes, worries, joys, and obsessions most urgent to them in the present moment, tilling the surface layer of awareness to unearth raw material for new poems.',
      },
      {
        title: 'On Publishing: The Literary Ecosystem',
        meta: 'Panel discussion with Perpetua Cannistraro, Jenny Molberg, Tatiana Johnson Boria, moderated by Lin Flores',
        images: [
          {
            src: '/img/speakers/2026/Perpetua headshot 2026.JPG',
            alt: 'Perpetua Cannistraro',
          },
          {
            src: '/img/speakers/2026/Jenny-Molberg_Headshot.jpg',
            alt: 'Jenny Molberg',
          },
          {
            src: '/img/speakers/2026/Tatiana.jpg',
            alt: 'Tatiana Johnson-Boria',
          },
        ],
        speakerSlugs: [
          'perpetua-cannistraro',
          'jenny-molberg',
          'tatiana-johnson-boria',
        ],
        description:
          'A conversation about the world of publishing today, featuring editors, publishers, and literary artists. The panel will explore publishing, literary culture, and the pathways writers take to bring their work into the world.',
      },
      {
        title: 'The Art of Creative Nonfiction',
        meta: 'Writing workshop with Maria Pinto',
        image: '/img/speakers/2026/Maria Pinto VSC.jpg',
        imageAlt: 'Maria Pinto',
        speakerSlugs: ['maria-pinto'],
        description:
          'Is there a true story you&apos;d like to tell, but you&apos;re at a loss for how to write your way into it? In this generative workshop, participants will identify scenes and personalities essential to the piece they aim to write and respond to prompts designed to build momentum.',
      },
    ],
  },
  {
    time: '4:00pm - 5:15pm',
    category: 'Workshops & Readings',
    sessions: [
      {
        title: 'Homosexual Intifada: A Queer Palestinian Reading',
        meta: 'Panel reading with George Abraham, Mejdulene Shomali, and Hannah Moushabeck',
        images: [
          {
            src: '/img/speakers/2026/George Abraham.jpg',
            alt: 'George Abraham',
          },
          {
            src: '/img/speakers/2026/Mejdulene Bernard Shomali .jpg',
            alt: 'Mejdulene Bernard Shomali',
          },
          {
            src: '/img/speakers/2026/Hannah-Moushabeck-Headshot-731x1024.jpg',
            alt: 'Hannah Moushabeck',
          },
        ],
        speakerSlugs: [
          'george-abraham',
          'mejdulene-bernard-shomali',
          'hannah-moushabeck',
        ],
        description:
          'Join queer Palestinian writers, poets, editors, and organizers for a reading and roundtable focused on Homosexual Intifada, a new anthology of global queer Palestinian literature edited by Hannah Moushabeck and George Abraham and published by Interlink Books.',
      },
      {
        title:
          'For the Culture: Journalism, Resistance, and the Practice of Black Joy',
        meta: 'Craft talk & workshop with Jeneé Osterheldt',
        image: '/img/speakers/2026/Jeneé Osterheldt (1).JPEG',
        imageAlt: 'Jeneé Osterheldt',
        speakerSlugs: ['jenee-osterheldt'],
        description:
          'This lecture-meets-workshop explores the power of journalism, storytelling, and cultural curation as tools for documenting Black life, joy, and resistance. The session is ideal for writers, journalists, poets, artists, organizers, content creators, and anyone interested in storytelling as a practice of liberation and joy.',
      },
      {
        title: 'If You Can Feel It / You Can Speak It',
        meta: 'Open mic',
        image: '/img/speakers/2026/IYCFI-YCSI.png',
        imageAlt: 'If You Can Feel It / You Can Speak It',
        description:
          "If You Can Feel IT / You Can Speak Boston's only monthly open mic movement dedicated to voices & experiences of the LGBTQ+ communities of color.",
      },
    ],
  },
  {
    time: '5:30pm - 6:30pm',
    category: 'Keynote & Conversation',
    featured: {
      title: 'Kwame Dawes',
      meta: 'Keynote address & conversation',
      image: '/img/speakers/2026/Dawes-headshot-1.jpg',
      imageAlt: 'Kwame Dawes',
      speakerSlugs: ['kwame-dawes'],
      description:
        'Kwame Dawes is the author of numerous books of poetry, fiction, criticism, and essays. His most recent collection is Sturge Town. Dawes is Professor of Literary Arts at Brown University, Series Editor of the African Poetry Book Series, Director of the African Poetry Book Fund, and Artistic Director of the Calabash International Literary Festival. He is the Poet Laureate of Jamaica for 2024-2027.',
    },
  },
  {
    time: '7:00pm - 9:00pm',
    category: 'Publisher’s Poetry Slam',
    featured: {
      title: 'Publisher’s Poetry Slam',
      meta: 'Evening slam hosted by Crystal Valentine',
      speakerSlugs: ['crystal-valentine'],
      description:
        'The Publisher’s Poetry Slam will close the festival. Public-facing slam rules, eligibility, application details, and prize language are still being finalized.',
      linkHref: '/slam',
      linkText: 'More info about the slam',
    },
  },
]

function ArrowIcons() {
  return (
    <div className="flex flex-col items-end md:col-span-1 speakers-grid-arrows">
      <svg className="fill-current open-arrow" height="20" width="40">
        <use xlinkHref="#icon-uparrow" />
      </svg>
      <svg className="fill-current hidden closed-arrow" height="20" width="40">
        <use xlinkHref="#icon-downarrow" />
      </svg>
    </div>
  )
}

function SessionImage({ image, imageAlt, images }) {
  const sessionImages = images || (image ? [{ src: image, alt: imageAlt }] : [])

  if (sessionImages.length === 0) {
    return null
  }

  if (sessionImages.length === 1) {
    const [singleImage] = sessionImages

    return (
      <div className="schedule-image">
        <img alt={singleImage.alt} src={singleImage.src} />
      </div>
    )
  }

  return (
    <div
      className={`schedule-image schedule-image-loop schedule-image-loop-${sessionImages.length}`}
    >
      {sessionImages.map((sessionImage, index) => (
        <img
          alt={sessionImage.alt}
          className={`schedule-image-loop-photo schedule-image-loop-photo-${index + 1}`}
          key={sessionImage.src}
          src={sessionImage.src}
        />
      ))}
    </div>
  )
}

function SessionCard({ session }) {
  return (
    <div className="speakers-grid">
      <h3 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
        {session.title}
      </h3>
      <p className="mb-8">{session.meta}</p>
      <SessionImage
        image={session.image}
        imageAlt={session.imageAlt}
        images={session.images}
      />
      <p className="font-mono mt-6">{session.description}</p>
      {session.speakerSlugs ? (
        <div className="flex flex-wrap gap-3 mt-6">
          {session.speakerSlugs.map((speakerSlug) => (
            <Link
              href={`/speakers#${speakerSlug}`}
              key={speakerSlug}
              legacyBehavior
            >
              <a className="border border-black inline-flex rounded-full py-2 px-4 items-center transition hover:bg-[#f3e7ff] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black group">
                {speakerNamesBySlug[speakerSlug]} bio
                <svg
                  className="fill-current ml-2 transition-transform group-hover:translate-x-1"
                  height="12"
                  width="15"
                >
                  <use xlinkHref="#icon-rightarrow" />
                </svg>
              </a>
            </Link>
          ))}
        </div>
      ) : null}
      <RegistrationLink className="mt-8" variant="session" />
    </div>
  )
}

function FeaturedBlock({ block }) {
  const { featured } = block

  return (
    <div className="border-t border-black md:grid md:grid-cols-8 items-center md:w-full py-10">
      <div className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:text-3xl text-2xl">
        {block.time}
      </div>
      <div className="md:col-span-4 lg:col-span-5 text-lg">
        <p className="font-mono mb-4">{block.category}</p>
        <h3 className="mb-4 md:text-4xl text-3xl uppercase">
          {featured.title}
        </h3>
        <p className="font-mono mb-8">{featured.meta}</p>
        <SessionImage image={featured.image} imageAlt={featured.imageAlt} />
        <p className="font-mono mt-6">{featured.description}</p>
        {featured.speakerSlugs ? (
          <div className="flex flex-wrap gap-3 mt-6">
            {featured.speakerSlugs.map((speakerSlug) => (
              <Link
                href={`/speakers#${speakerSlug}`}
                key={speakerSlug}
                legacyBehavior
              >
                <a className="border border-black inline-flex rounded-full py-2 px-4 items-center transition hover:bg-[#f3e7ff] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black group">
                  {speakerNamesBySlug[speakerSlug]} bio
                  <svg
                    className="fill-current ml-2 transition-transform group-hover:translate-x-1"
                    height="12"
                    width="15"
                  >
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </a>
              </Link>
            ))}
          </div>
        ) : null}
        {featured.linkHref ? (
          <Link href={featured.linkHref} legacyBehavior>
            <a className="border border-black inline-flex rounded-full mt-10 py-3 px-5 items-center">
              <p>{featured.linkText}</p>
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </Link>
        ) : null}
      </div>
    </div>
  )
}

function ScheduleBlock({ block }) {
  if (block.featured) {
    return <FeaturedBlock block={block} />
  }

  return (
    <div className="schedule-grid">
      <details open>
        <summary className="focus:outline-none summaryWrap">
          <div className="event flex md:grid md:grid-cols-3 items-center justify-between py-10 gap-x-20">
            <p className="md:col-span-4 lg:col-span-1 mb-6 md:mb-0 md:text-3xl text-2xl">
              {block.time}
            </p>
            <div className="md:col-span-3 lg:col-span-1 md:text-lg">
              {block.category}
            </div>
            <ArrowIcons />
          </div>
        </summary>
        <div className="gap-x-20 grid gap-y-20 mb-20 md:grid-cols-2 summaryDetail xl:gap-y-0 xl:grid-cols-3">
          {block.sessions.map((session) => (
            <SessionCard key={session.title} session={session} />
          ))}
        </div>
      </details>
    </div>
  )
}

export default function Schedule() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Link href="/" legacyBehavior>
          <a className="hidden md:flex h-32 items-center justify-center">
            <h1 className="hidden">Roxbury Poetry Festival</h1>
            <svg className="fill-current" height="30" width="615">
              <use xlinkHref="#icon-logo-wide" />
            </svg>
          </a>
        </Link>
        <h2 className="font-bold my-10 md:text-4xl text-3xl">2026 Schedule</h2>
        <div className="border-t border-black md:flex md:justify-between md:items-start md:py-16 py-10">
          <p className="mb-6 md:mb-0 md:text-3xl text-2xl">June 27, 2026</p>
          <p className="font-mono md:text-lg text-base md:w-2/3">
            Registration is open. Session details are subject to change as the
            festival program is finalized.
            <br />
            <RegistrationLink className="mt-6" variant="large" />
          </p>
        </div>
        <div>
          {scheduleBlocks.map((block) => (
            <ScheduleBlock key={`${block.time}-${block.category}`} block={block} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
