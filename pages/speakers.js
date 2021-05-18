import Link from "next/link";
import Layout from "@components/Layout";

export default function Speakers() {
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
        <h2 className="font-bold my-10 md:text-4xl text-3xl">All Speakers</h2>
        <ul className="gap-x-28 gap-y-20 grid pb-20 md:grid-cols-2 lg:grid-cols-3">
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Angelo Geter</h3>
            <p className="mb-8 text-lg">
              Poet, Educator, Performance Artist, Activist
            </p>
            <img alt="Angelo Geter" src="/img/speakers/angelo-geter.jpg" />
            <details className="font-mono mt-6">
              entertains and inspires. He currently serves as the Poet Laureate
              of Rock Hill, SC, and is a 2020 Academy of American Poets Laureate
              Fellow. Geter is also a 2019 All-America city winner, 2018
              National Poetry Slam champion, Rustbelt Regional Poetry Slam
              finalist, Southern Fried Regional Poetry Slam finalist and has
              performed and competed in several venues across the country. His
              work has appeared on All Def Poetry, Charleston Currents, and the
              Academy of American Poets “Poem a Day” series.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.angelogeter.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Angelo ‘Eyeambic’ Geter
                </a>{" "}
                (he / him) is a dynamic poet, spoken word artist and
                motivational speaker who merges his passions for poetry and
                speaking into a unique performance that educates,
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Poetry Is Not A Luxury
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Aricka Foreman</h3>
            <p className="mb-8 text-lg">Poet, Writer, Artist</p>
            <img alt="Aricka Foreman" src="/img/speakers/aricka-foreman.jpg" />
            <details className="font-mono mt-6">
              earned fellowships from Cave Canem, Callaloo, and the Millay
              Colony for the Arts. She serves on the Board of Directors for The
              Offing, and spends her time in Chicago, IL engaging poetry with
              photography & video.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.arickaforeman.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Aricka Foreman
                </a>{" "}
                (she / her) is an American poet and interdisciplinary writer
                from Detroit MI. Author of the chapbook Dream with a Glass
                Chamber, and{" "}
                <a
                  className=" underline"
                  href="https://www.yesyesbooks.com/product-page/salt-body-shimmer"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Salt Body Shimmer
                </a>{" "}
                (YesYes Books), she has
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for What Awaits Is What We Make It
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Ashley
              <br />
              Rose
            </h3>
            <p className="mb-8 text-lg">Poet, Playwright, Actress, Activist</p>
            <img alt="Ashley Rose" src="/img/speakers/ashley-rose.jpg" />
            <details className="font-mono mt-6">
              Currently she works at Suffolk University as a Restorative Justice
              Specialist and Race Relations Liason for the institution and
              clients around the nation.
              <summary className="focus:outline-none textWrap">
                Ashley Rose (she / her) is an award winning poet, playwright,
                actress and educator. For over 15 years she has used her art and
                activism background to create community and hold space for
                healing.
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for the 50 Greatest Rappers
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Asiyah Herrera</h3>
            <p className="mb-8 text-lg">Poet, Teaching Artist, Editor</p>
            <img alt="Asiyah Herrera" src="/img/speakers/asiyah-herrera.jpg" />
            <details className="font-mono mt-6">
              Art Review with her piece “Making space for Gen Z.” Currently she
              works as the Teaching Artist for the Youth Literary Advisory Board
              at 826 Boston, a nonprofit writing and tutoring organization.
              <summary className="focus:outline-none textWrap">
                Asiyah Herrera (she / her) is 19 years. Last year, she was a
                finalist for the Boston Youth Poet Laureate position. This year,
                she became the youngest author to be published in the Boston
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Home is Not a Country
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Askia Toure</h3>
            <p className="mb-8 text-lg">
              Leading voice of the Black Arts Movement
            </p>
            <img alt="Askia Toure" src="/img/speakers/askia-toure.jpg" />
            <details className="font-mono mt-6">
              by creating a triumphal identity for the purpose of uplifting the
              African heritage beyond the oppressive ideas that dominated the
              time.
              <summary className="focus:outline-none textWrap">
                Askia Muhammad Touré (he / him) is an African-American poet,
                essayist, political editor, and leading voice of the Black Arts
                Movement. Toure helped to define a new generation of black
                consciousness
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Flowers As They Live
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Candace McDuffie</h3>
            <p className="mb-8 text-lg">Journalist, Writer, Cultural Critic</p>
            <img
              alt="Candace McDuffie"
              src="/img/speakers/candace-mcduffie.jpg"
            />
            <details className="font-mono mt-6">
              digital platforms such as Rolling Stone, MTV, Forbes, PAPER, SPIN,
              Entertainment Weekly, NBC News and Newsweek. Candace’s first book,
              <a
                className="pl-3 underline"
                href="https://www.amazon.com/Rappers-Who-Changed-World-Celebration/dp/1784883387"
                rel="noreferrer noopener"
                target="_blank"
              >
                50 Rappers Who Changed The World
              </a>
              , is out now wherever books are sold.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.candacemcduffie.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Candace McDuffie
                </a>{" "}
                (she / her) is a respected cultural critic and music journalist
                who focuses on the intersection of race, gender and
                entertainment. Her written work has been featured on
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for 50 Rappers Who Changed The World
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Chen Chen</h3>
            <p className="mb-8 text-lg">Poet, Writer</p>
            <img alt="Chen Chen" src="/img/speakers/chen-chen.jpg" />
            <details className="font-mono mt-6">
              the GLCA New Writers Award, and the Thom Gunn Award for Gay
              Poetry. The collection was also a finalist for the Lambda Literary
              Award for Gay Poetry and named one of the best of 2017 by The
              Brooklyn Rail, Entropy, Library Journal, and others. His work has
              appeared in many publications, including Poetry, Tin House,
              Poem-a-Day, The Best American Poetry, Bettering American Poetry,
              and The Best American Nonrequired Reading. Chen earned his MFA
              from Syracuse University and is pursuing a PhD in English and
              Creative Writing as an off-site Texas Tech University student. He
              lives in frequently snowy Rochester, NY with his partner, Jeff
              Gilbert and their pug dog, Mr. Rupert Giles.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.chenchenwrites.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Chen Chen
                </a>{" "}
                (he / him) is the author of{" "}
                <a
                  className="underline"
                  href="https://www.amazon.com/Further-Possibilities-Poulin-Poets-America/dp/1942683332"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  When I Grow Up I Want to Be a List of Further Possibilities
                </a>
                , which was longlisted for the National Book Award and won the
                A. Poulin, Jr. Poetry Prize,
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Elegy in a Time of Pandemic
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Crystal Valentine</h3>
            <p className="mb-8 text-lg">Writer, Performer, Anime Enthusiast </p>
            <img
              alt="Crystal Valentine"
              src="/img/speakers/crystal-valentine.jpg"
            />
            <details className="font-mono mt-6">
              time winner of the College Union Poetry Slam Invitational. Her
              work has appeared or is forthcoming in the Academy of American
              Poets Poem-a-Day, BreakBeat Poets Vol. 2: Black Girl Magic
              Anthology (Haymarket Books), Muzzle Magazine, TriQuarterly
              Magazine, Winter Tangerine and elsewhere. She received an MFA from
              New York University and is the current festival manager for the{" "}
              <a
                className="pl-3 underline"
                href="https://masspoetry.org/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Massachusetts Poetry Festival
              </a>
              . When she isn’t writing or agonizing over line breaks, you can
              find her watching anime and dreaming.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.crystalvalentinepoetry.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Crystal Valentine
                </a>{" "}
                (she / her) is a queer, Black woman from the Bronx now residing
                in Boston, Massachusetts. She is a Callaloo fellow, a former NYC
                Youth Poet Laureate, and a two-
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for An Evening with Jericho Brown
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Denice Frohman</h3>
            <p className="mb-8 text-lg">Poet, Educator, Activist</p>
            <img alt="Denice Frohman" src="/img/speakers/denice-frohman.jpg" />
            <details className="font-mono mt-6">
              Arts & Cultures, Leeway Foundation, Millay Colony and Blue
              Mountain Center.
              <br />
              Her work has appeared in The New York Times, The BreakBeat Poets:
              LatiNext, Nepantla: An Anthology for Queer Poets of Color, ESPNW
              and elsewhere. A former Women of the World Poetry Slam Champion,
              she’s featured on hundreds of stages from The White House to The
              Apollo, and co-organized #PoetsforPuertoRico. She lives in
              Philadelphia.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.denicefrohman.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Denice Frohman
                </a>{" "}
                (she / her) is a poet, performer and educator from New York
                City. A CantoMundo Fellow, she’s received residencies and awards
                from the National Association of Latino
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Sweet Impossible Blossom
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Diannely Antigua</h3>
            <p className="mb-8 text-lg">Little Poet, Big Hair</p>
            <img
              alt="Diannely Antigua"
              src="/img/speakers/diannely-antigua.jpg"
            />
            <details className="font-mono mt-6">
              River Prize and a 2020 Whiting Award. She received her BA in
              English from the University of Massachusetts Lowell and her MFA at
              NYU.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://diannelyantigua.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Diannely Antigua
                </a>{" "}
                (she / her) is a Dominican American poet and educator, born and
                raised in Massachusetts. Her debut collection{" "}
                <a
                  className="underline"
                  href="https://www.yesyesbooks.com/product-page/ugly-music-by-diannely-antigua"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Ugly Music
                </a>{" "}
                (YesYes Books, 2019) was the winner of the Pamet
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for LatiNext Reading
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Ekua Holmes</h3>
            <p className="mb-8 text-lg">Artist, Designer, Illustrator</p>
            <img alt="Ekua Holmes" src="/img/speakers/ekua-holmes.jpeg" />
            <details className="font-mono mt-6">
              of hope, faith and self-determination. Ms. Holmes serves as
              Commissioner and Vice Chair of the Boston Art Commission, which
              oversees the placement and maintenance of public works of art on
              and in city of Boston properties. Ekua Holmes is currently the
              Assistant Director at the Center for Art and Community
              Partnerships at MassArt where she manages and coordinates sparc!
              the ArtMobile, an art-inspiring, art-transforming vehicle
              retrofitted to contribute to community based, multidisciplinary
              arts programming currently focused in the Boston neighborhoods of
              Mission Hill, Roxbury and Dorchester, MA. Holmes is the founder
              and lead artist of the Roxbury Sunflower Project.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.ekuaholmes.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Ekua Holmes’
                </a>{" "}
                (she / her) work is collage based and her subjects, made from
                cut and torn papers, investigate family histories, relationship
                dynamics, childhood impressions, the power
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Future of Roxbury Panel
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Frances Donovan</h3>
            <p className="mb-8 text-lg">Poet, Writer, Teacher</p>
            <img
              alt="Frances Donovan"
              src="/img/speakers/frances-donovan.jpg"
            />
            <details className="font-mono mt-6">
              MFA in poetry from Lesley University and she once drove a
              bulldozer in an LGBTQ+ Pride Parade while wearing a bustier.
              Twitter:{" "}
              <a
                className="underline"
                href="https://twitter.com/okelle"
                rel="noreferrer noopener"
                target="_blank"
              >
                @okelle
              </a>
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://gardenofwords.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Frances Donovan’s
                </a>{" "}
                (she / her) chapbook{" "}
                <a
                  className="underline"
                  href="https://www.amazon.com/Mad-Quick-Hand-Seashore-Poems/dp/1984273159"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Mad Quick Hand of the Seashore
                </a>{" "}
                was a finalist in the Lambda Literary Awards. Bylines include
                The Rumpus, SWWIM, and Solstice. She holds an
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Paths to Publication
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Fulani Haynes</h3>
            <p className="mb-8 text-lg">Musician, Performer, Chef</p>
            <img alt="Fulani Haynes" src="/img/speakers/fulani-haynes.jpg" />
            <details className="font-mono mt-6">
              and theatrical experience has given Fulani a rich foundation to
              draw upon in performances and collaborations with noted recording
              artists like Frank Wilkins, Patricia Adams, Hakim Law, and Mike
              Shea, and in performances for regular folks and nonprofit
              organizations in her own community.
              <summary className="focus:outline-none textWrap">
                Fulani Haynes (she / her) has electrified audiences in clubs,
                cabarets, theaters, and other performance venues in the Boston
                area for more than four decades. Her depth of musical
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Art Is Life Itself
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">George Abraham</h3>
            <p className="mb-8 text-lg">
              Palestinian Diasporic Poet, Educator, Engineer
            </p>
            <img alt="George Abraham" src="/img/speakers/george-abraham.jpg" />
            <details className="font-mono mt-6">
              Lambda Literary Award in Bisexual Poetry,and the Big Other Book
              Award. He is a board member for the Radius of Arab American
              Writers (RAWI), a recipient of fellowships from Kundiman and The
              Boston Foundation, and winner of the 2017 College Union Poetry
              Slam Invitational's Best Poet title. Their work has appeared in
              The American Poetry Review, The Baffler, The Paris Review, The
              Missouri Review, Mizna, and elsewhere. A graduate of Swarthmore
              College and Harvard University, Abraham currently teaches at
              Emerson College, and will be a Litowitz MA+MFA Candidate at
              Northwestern University in the fall.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.gabrahampoet.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  George Abraham
                </a>{" "}
                (they / them) is a Palestinian american poet, writer, and
                engineer from Jacksonville, FL. Their debut poetry collection{" "}
                <a
                  className="underline"
                  href="https://buttonpoetry.com/product/birthright/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Birthright
                </a>{" "}
                (Button Poetry, 2020) was a finalist for the
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Paths to Publication
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Harlym 125</h3>
            <p className="mb-8 text-lg">Educator, Poet, Performer</p>
            <img alt="Harlym125" src="/img/speakers/harlym125.jpg" />
            <details className="font-mono mt-6">
              of the Boston area poetry scene and joined teams of poets who have
              won numerous competitions regionally and nationally. 125 has also
              become well known in the Boston area for his work leading
              workshops dealing with issues of diversity, equity and inclusion.
              Several times in the last couple of years, Harlym has been called
              to local high schools, colleges and communities to help bring a
              calm and constructive unity after incidents of racial injustice
              have occurred. Known for his work, Harlym 1Two5 is often asked to
              be a panelist or to give presentations on a broad range of topics
              regarding diversity and pluralism, and also is asked to prepare
              presentations in response to very specific incidents or
              conditions. Appearing at dozens of college campuses every year. He
              is the "HUMAN HIGHLIGHT OF POETRY AND EDU-ACTIVISM."
              <summary className="focus:outline-none textWrap">
                1Two5 (he / him) remains well known nationally and in multitudes
                poetry circles. Known as Harlym 125, He is a frequent and highly
                regarded figure in competitions, performance, concert and
                beyond. 125 has become a part
              </summary>
            </details>
            <Link href="/slam">
              <a className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg">
                View the Publisher's Poetry Slam
                <svg className="ml-4 lg:ml-6" height="8" width="19">
                  <use xlinkHref="#icon-rightarrow" />
                </svg>
              </a>
            </Link>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Janice Lobo Sapigao
            </h3>
            <p className="mb-8 text-lg">Poet, Professor, Editor</p>
            <img
              alt="Janice Lobo Sapigao"
              src="/img/speakers/janice-lobo-sapigao.jpg"
            />
            <details className="font-mono mt-6">
              California, San Diego. She is the author of like a solid to a
              shadow (Timeless, Infinite Light/ Nightboat Books, 2017) and
              microchips for millions (Philippine American Writers and Artists,
              Inc., 2016). A VONA/Voices Fellow, Sapigao was awarded a Manuel G.
              Flores Prize PAWA Scholarship to the Kundiman Poetry Retreat and
              was named one of the San Francisco Bay Area’s Women to Watch in
              2017. She is a poetry editor at Angel City Review and a co-founder
              of Sunday Jump, an open mic in Los Angeles. She is an Assistant
              Professor of English at Skyline College and the poet laureate of
              Santa Clara County, California.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.janicewrites.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Janice Lobo Sapigao
                </a>{" "}
                (she / her) was born and raised in San José, California. She
                received her MFA from California Institute of the Arts and a BA
                in Ethnic Studies from the University of
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Poetry is Not A Luxury
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Jericho Brown</h3>
            <p className="mb-8 text-lg">Poet, Educator</p>
            <img alt="Jericho Brown" src="/img/speakers/jericho-brown.jpg" />
            <details className="font-mono mt-6">
              University, and the National Endowment for the Arts. Brown’s first
              book, Please (2008), won the American Book Award. His second book,
              The New Testament (2014), won the Anisfield-Wolf Book Award and
              was named one of the best of the year by Library Journal,
              Coldfront, and the Academy of American Poets. He is also the
              author of the collection The Tradition (2019), which was a
              finalist for the 2019 National Book Award and the winner of the
              2020 Pulitzer Prize for Poetry. His poems have appeared in
              Buzzfeed, The Nation, The New York Times, The New Yorker, The New
              Republic, Time, and The Pushcart Prize Anthology, and several
              volumes of The Best American Poetry anthologies. He is the Charles
              Howard Candler Professor of Creative Writing and the Director of
              the Creative Writing Program at Emory University in Atlanta.
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
                Radcliffe Institute for Advanced Study at Harvard
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for An Evening with Jericho Brown
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Jill McDonough</h3>
            <p className="mb-8 text-lg">Poet, Professor</p>
            <img alt="Jill McDonough" src="/img/speakers/jill-mcdonough.jpg" />
            <details className="font-mono mt-6">
              2019). She teaches in the MFA program at UMass-Boston and offers
              College Reading and Writing in Boston jails.
              <summary className="focus:outline-none textWrap">
                Three-time Pushcart prize winner{" "}
                <a
                  className="underline"
                  href="http://www.jillmcdonough.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Jill McDonough
                </a>{" "}
                (she / her) is the recipient of Lannan, NEA, Cullman Center, and
                Stegner fellowships. Her most recent book is{" "}
                <a
                  className="underline"
                  href="https://www.brooklinebooksmith-shop.com/book/9781948579025
                "
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Here All Night
                </a>{" "}
                (Alice James,
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for New Writing
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Jonathan Mendoza</h3>
            <p className="mb-8 text-lg">Organizer, Poet, Educator</p>
            <img
              alt="Jonathan Mendoza"
              src="/img/speakers/jonathan-mendoza.jpg"
            />
            <details className="font-mono mt-6">
              Sonia Sanchez – Langston Hughes Poetry Prize, and a three-time
              award winner at the College Union Poetry Slam Invitational. He
              currently works as a community organizer for housing and youth, a
              teaching artist, and a freelance writer, performer, and educator
              throughout the U.S. He is a proud anxious Virgo, Greek yogurt
              enthusiast, and devout believer in the power of young people to
              change this world for the better. Books, updates, and more
              information can be found at @JMendoza010 on{" "}
              <a
                className="px-3 underline"
                href="https://twitter.com/jmendoza010"
                rel="noreferrer noopener"
                target="_blank"
              >
                Twitter
              </a>{" "}
              and{" "}
              <a
                className="pl-3 underline"
                href="https://www.instagram.com/jmendoza010/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Instagram
              </a>
              .
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://mendozapoetry.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Jonathan Mendoza
                </a>{" "}
                (he / him) is a Boston-bred, Chicago-based Jewish and
                Mexican-American activist, poet, and social justice educator. He
                is a National Poetry Slam Champion, winner of the
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for LatiNext Reading
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Kai Grant</h3>
            <p className="mb-8 text-lg">Entrepreneur, Organizer, Creative</p>
            <img alt="Kai Grant" src="/img/speakers/kai-grant.jpg" />
            <details className="font-mono mt-6">
              Leaders. She's been awarded citations by the Boston City Council,
              the Governor of Massachusetts, the Black & Latino Caucus, the
              NAACP, and a host of local organizations and currently resides on
              the Board of Directors for the Roxbury Cultural District. Kai
              resides in the Historic District of Highland Park where she and
              her husband of 29 years raised their four sons. Kai Grant is the
              co-founder and program manager at Black Market.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://blackmarketnubian.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Kai Grant's
                </a>{" "}
                (she / her) family has been in Boston’s Roxbury neighborhood for
                over 100 years as Educators, Entrepreneurs, Political Leaders,
                Artists, Spiritual Leaders, and Military
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Future of Roxbury Panel
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Dr. Karilyn Crockett
            </h3>
            <p className="mb-8 text-lg">Professor, Writer, Researcher</p>
            <img
              alt="Karilyn Crockett"
              src="/img/speakers/karilyn-crockett.jpg"
            />
            <details className="font-mono mt-6">
              structural poverty and race. Karilyn’s book{" "}
              <a
                className="px-3 underline"
                href="https://bookshop.org/books/people-before-highways-boston-activists-urban-planners-and-a-new-movement-for-city-making-9781625342966/9781625342973"
                rel="noreferrer noopener"
                target="_blank"
              >
                "People before Highways: Boston Activists, Urban Planners, and a
                New Movement for City Making"
              </a>{" "}
              (UMASS Press 2018) investigates a 1960s era grassroots movement to
              halt urban extension of the U.S. interstate highway system and the
              geographic and political changes in Boston that resulted. In 2019
              this book was named one of the “ten best books of the decade” by
              the Boston Public Library Association of Librarians. Previously
              Karilyn co-founded Multicultural Youth Tour of What's Now
              (MYTOWN), an award winning, Boston-based, educational non-profit
              organization. MYTOWN hired public high school students to research
              their local and family histories to produce youth-led walking
              tours for sale to public audiences. During its nearly 15 years of
              operation, MYTOWN created jobs for more than 300 low and
              moderate-income teenagers, who in turn led public walking tours
              for more than 14,000 visitors and residents. In a White House
              ceremony, the National Endowment for the Humanities cited MYTOWN
              as “One of ten best Youth Humanities Programs in America.” Karilyn
              holds a PhD from the American Studies program at Yale University,
              a Master of Science in Geography from the London School of
              Economics, and a Master of Arts and Religion from Yale Divinity
              School. Karilyn served for four years with the Mayor's Office of
              Economic Development as the Director of Economic Policy & Research
              and the Director of Small Business Development for the City of
              Boston. She recently completed her service as the City of Boston's
              first Chief of Equity, a Cabinet-level position Mayor Walsh
              established to embed equity and racial justice into all City
              planning, operations, and work moving forward. She holds a faculty
              appointment as professor of urban history, public policy and
              planning in MIT's Department of Urban Studies & Planning.
              Karilyn’s career mission is to continue to work at the nexus of
              education, economic development policy and urban revitalization.
              <summary className="focus:outline-none textWrap">
                Dr. Karilyn Crockett’s (she / her) research focuses on
                large-scale land use changes in twentieth century American
                cities and examines the social and geographic implications of
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Future of Roxbury Panel
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Kristina Marie Darling
            </h3>
            <p className="mb-8 text-lg">Poet, Editor, Critic</p>
            <img
              alt="Kristina Marie Darling"
              src="/img/speakers/kristina-marie-darling.jpg"
            />
            <details className="font-mono mt-6">
              Conscious Experience, and the Self in Modernist Women’s Poetry
              (Rowman & Littlefield Publishing Group, 2021); Silence in
              Contemporary Poetry, which will be published in hardcover by
              Clemson University Press in the United States and Liverpool
              University Press in the United Kingdom; SILENT REFUSAL: Essays on
              Contemporary Feminist Poetry (Black Ocean, forthcoming); ANGEL OF
              THE NORTH (Salmon Poetry, forthcoming); and X Marks the Dress: A
              Registry (co-written with Carol Guess), which will be launched by
              Persea Books in the United States. Penguin Random House Canada
              will also publish a Canadian edition. Her work has been recognized
              with three residencies at Yaddo, where she has held the Martha
              Walsh Pulver Residency for a Poet and the Howard Moss Residency in
              Poetry; a Fundación Valparaíso fellowship to live and work in
              Spain; a Hawthornden Castle Fellowship, funded by the Heinz
              Foundation; an artist-in-residence position at Cité Internationale
              des Arts in Paris; five residencies at the American Academy in
              Rome; two grants from the Whiting Foundation; a Faber Residency in
              the Arts, Sciences, and Humanities, which she received on two
              separate occasions; an artist-in-residence position with the
              Andorran Ministry of Culture; and the Dan Liberthson Prize from
              the Academy of American Poets, which she received on three
              separate occasions; among many other awards and honors. She serves
              as Editor-in-Chief of Tupelo Press & Tupelo Quarterly.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://kristinamariedarling.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Kristina Marie Darling
                </a>{" "}
                (she / her) is the author of thirty-five books, which include
                Look to Your Left: A Feminist Poetics of Spectacle (University
                of Akron Press, 2021); Stylistic Innovation,
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Paths to Publication
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Letta Simone Neely</h3>
            <p className="mb-8 text-lg">
              Artist, Poet, Activist, Earthling, Parent
            </p>
            <img alt="Letta Simone Neely" src="/img/speakers/letta-neely.jpg" />
            <p className="font-mono mt-6">
              Letta Neely (she / her) is a Black Lesbian Earthling. She is the
              author of two books of poetry and numerous plays. She is a
              draptomaniac who knows her liberation is tied to yours and vice
              versa.
            </p>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Local Literary Legends
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Lillian-Yvonne Bertram
            </h3>
            <p className="mb-8 text-lg">Poet, Writer, Digital Maker</p>
            <img
              alt="Lillian-Yvonne Bertram"
              src="/img/speakers/lillian-yvonne-bertram.jpg"
            />
            <details className="font-mono mt-6">
              Paradise. They currently direct the MFA in Creative Writing at
              UMass Boston.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.lillianyvonnebertram.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Lillian-Yvonne Bertram
                </a>{" "}
                (they / them) is the author of the books{" "}
                <a
                  className="underline"
                  href="http://www.noemipress.org/catalog/poetry/travesty-generator/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Travesty Generator
                </a>
                ; How Narrow My Escapes; Personal Science; a slice from the cake
                made of air; and But a Storm is Blowing From
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Paths to Publication
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Malcolm Friend</h3>
            <p className="mb-8 text-lg">Is a poet.</p>
            <img alt="Malcolm Friend" src="/img/speakers/malcolm-friend.jpg" />
            <details className="font-mono mt-6">
              collection Our Bruises Kept Singing Purple (Inlandia Books, 2018).
              He received his BA from Vanderbilt University, and his MFA from
              the University of Pittsburgh. Together with JR Mahung, he is a
              member of Black Plantains, an Afrocaribbean poetry collective.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="http://www.malcolmfriend.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Malcolm Friend
                </a>{" "}
                (he / him) is a poet originally from the Rainier Beach
                neighborhood of Seattle, WA, and the{" "}
                <a
                  className="underline"
                  href="http://www.malcolmfriend.com/books"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  author
                </a>{" "}
                of the chapbook mxd kd mixtape (Glass Poetry, 2017) and the
                full-length
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for LatiNEXT Reading
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Marisa Luse</h3>
            <p className="mb-8 text-lg">Activist, Creative Champion, Founder</p>
            <img alt="Marisa Luse" src="/img/speakers/marisa-luse.jpg" />
            <details className="font-mono mt-6">
              value humanity, breaking down silos that results in system,
              organizational, and community change, increasing civic engagement
              and participation, and inspiring others to be courageous leaders
              and advocates for themselves, their families, and communities.
              Marisa is the Founder and CEO of The CoLu Group and RAPP Boston.
              She also serves on several community boards and committees in
              Roxbury and Boston that focus on arts and culture, civic and
              community engagement to early education.
              <summary className="focus:outline-none textWrap">
                Marisa Luse (she / her) is Roxbury native with a wealth of
                non-profit management, community engagement and civic leadership
                experience. She is committed to creating and shifting spaces
                that
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Future of Roxbury Panel
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Martha Collins</h3>
            <p className="mb-8 text-lg">Poet, Writer</p>
            <img alt="Martha Collins" src="/img/speakers/martha-collins.jpg" />
            <details className="font-mono mt-6">
              Blue Front, White Papers, Admit One: An American Scrapbook, and
              the paired volumes Day Unto Day and Night Unto Night. Collins has
              also published four volumes of co-translated Vietnamese poetry and
              co-edited a number of volumes, including, with Kevin Prufer, Into
              English: Poems, Translations, Commentaries. She founded the
              U.Mass.-Boston creative writing program, and later served as
              Pauline Delaney Professor of Creative Writing at Oberlin College.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://marthacollinspoet.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Martha Collins's
                </a>{" "}
                (she / her) tenth book of poetry, Because What Else Could I Do
                (Pittsburgh, 2019), won the Poetry Society of America’s William
                Carlos Williams Award.{" "}
                <a
                  className="underline"
                  href="https://upittpress.org/authors/martha-collins/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Previous books
                </a>{" "}
                include
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Flowers As They Live
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Nikia Chaney</h3>
            <p className="mb-8 text-lg">Poet, Educator</p>
            <img alt="Nikia Chaney" src="/img/speakers/nikia-chaney.jpg" />
            <details className="font-mono mt-6">
              Girl Press). She has served as Inlandia Literary Laureate
              (2016-2018). She teaches at Cabrillo College.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.nikiachaney.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  ​Nikia Chaney
                </a>{" "}
                (she / her) is the author of{" "}
                <a
                  className="underline"
                  href="https://www.amazon.com/us-mouth-Nikia-Chaney/dp/1938753275/ref=sr_1_1?dchild=1&keywords=us+mouth+nikia+chaney&qid=1615485152&sr=8-1"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  us mouth
                </a>{" "}
                (University of Hell Press, 2018) and two chapbooks, Sis Fuss
                (2012, Orange Monkey Publishing) and ladies, please (2012,
                Dancing
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Halal If Your Hear Me
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Nina LaNegra</h3>
            <p className="mb-8 text-lg">ArtiVist, Creatrix, Producer, Host</p>
            <img alt="Nina LaNegra" src="/img/speakers/nina-lanegra.jpg" />
            <details className="font-mono mt-6">
              say early bird, but most of all she believes in common unity, art
              and culture. Cultural Warriors, we don't die, we multiply.
              <summary className="focus:outline-none textWrap">
                Producer, educator, performer, artiVist, Writer, curator, diaper
                changer, counselor, wet nurse and corporate ceo{" "}
                <a
                  className="underline"
                  href="https://www.facebook.com/AiLiLive/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  LaNegra
                </a>{" "}
                (she / her) seldom sleeps. Some describe her as nocturnal, while
                others
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Art Is Life Itself
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Print Ain't Dead (Cierra Peters & Arielle Gray)
            </h3>
            <p className="mb-8 text-lg">Bookstore, Publishing Platform</p>
            <img
              alt="Print Ain't Dead"
              src="/img/speakers/print-aint-dead.jpg"
            />
            <p className="font-mono mt-6">
              <a
                className="underline"
                href="https://printaintdead.us/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Print Ain't Dead
              </a>{" "}
              (she / her) is a bookstore and publishing platform focused on
              literary and textbased artifacts produced by black, brown and
              indigenous artists.
            </p>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for The Literary Tea
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Rachel McKibbens</h3>
            <p className="mb-8 text-lg">Poet, Witch, Noisemaker</p>
            <img
              alt="Rachel McKibbens"
              src="/img/speakers/rachel-mckibbens.jpg"
            />
            <p className="font-mono mt-6">
              ​
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
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Excavating the Wicked Imagination
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Rajiv Mohabir</h3>
            <p className="mb-8 text-lg">Poet, Translator, Memoirist</p>
            <img alt="Rajiv Mohabir" src="/img/speakers/rajiv-mohabir.jpg" />
            <details className="font-mono mt-6">
              (Four Way Books 2016, winner of the Four Way Books Intro to Poetry
              Prize, Finalist for the Lambda Literary Award for Gay Poetry in
              2017), and translator of I Even Regret Night: Holi Songs of
              Demerara (1916) (Kaya Press 2019) which received a PEN/Heim
              Translation Fund Grant Award and the 2020 Harold Morton Landon
              Translation Award from the American Academy of Poets. His{" "}
              <a
                className="px-3 underline"
                href="https://restlessbooks.org/bookstore/antiman"
                rel="noreferrer noopener"
                target="_blank"
              >
                memoir
              </a>{" "}
              received the 2019 Reckless Books’ New Immigrant Writing Prize and
              is forthcoming 2021. Currently he is an Assistant Professor of
              poetry in the MFA program at Emerson College, translations editor
              at Waxwing Journal and poetry editor of Asian American Literary
              Review.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="http://www.rajivmohabir.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Rajiv Mohabir
                </a>{" "}
                (he / him) is the author of The Cowherd’s Son (Tupelo Press
                2017, winner of the 2015 Kundiman Prize; Eric Hoffer Honorable
                Mention 2018) and The Taxidermist’s Cut
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for At Home in the Moving Body
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Ryan Murphy</h3>
            <p className="mb-8 text-lg">Publisher, Poet</p>
            <img alt="Ryan Murphy" src="/img/speakers/ryan-murphy.jpg" />
            <details className="font-mono mt-6">
              Fund For Poetry, and The New York State Foundation for the Arts.
              <summary className="focus:outline-none textWrap">
                Ryan Murphy (he / him) is the author of Millbrook,{" "}
                <a
                  className="underline"
                  href="https://www.spdbooks.org/Author/Default.aspx?AuthorId=4219"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  The Redcoats
                </a>
                , and Down with the Ship. He has received grants and awards from
                the Aldrich Museum of Contemporary Art, Chelsea Magazine, The
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Poetry in the Marketplace
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Safia
              <br />
              Elhillo
            </h3>
            <p className="mb-8 text-lg">Author, Teaching Artist, Editor</p>
            <img alt="​Safia Elhillo" src="/img/speakers/safia-elhillo.jpg" />
            <details className="font-mono mt-6">
              Arab American Book Award, Girls That Never Die (One World/Random
              House 2021), and the novel in verse{" "}
              <a
                className="px-3 underline"
                href="https://bookshop.org/books/home-is-not-a-country-9780593177068/9780593177051"
                rel="noreferrer noopener"
                target="_blank"
              >
                Home Is Not A Country
              </a>{" "}
              (Make Me A World/Random House, 2021). With Fatimah Asghar, she is
              co-editor of the anthology Halal If You Hear Me (Haymarket Books,
              2019). She is currently a Wallace Stegner Fellow at Stanford
              University and lives in Oakland.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://safia-mafia.com/bio"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Safia Elhillo
                </a>{" "}
                (she / her) is the author of The January Children (University of
                Nebraska Press, 2017), which received the the Sillerman First
                Book Prize for African Poets and an
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Home Is Not A Country
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Seema Yasmin</h3>
            <p className="mb-8 text-lg">Poet, Doctor, Journalist</p>
            <img alt="Seema Yasmin" src="/img/speakers/seema-yasmin.jpg" />
            <details className="font-mono mt-6">
              Muslim Women Are Everything, Viral BS: Medical Myths and Why We
              Fall for Them, and, poems based on her reporting on the Ebola
              epidemic in West Africa.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="http://seemayasmin.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Seema Yasmin
                </a>{" "}
                (she / her) is an Emmy Award-winning journalist, medical doctor,
                and author. A fiction fellow of the Kundiman and Tin House
                workshops, she is the author of four books including
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Halal If Your Hear Me
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Stephen Hamilton</h3>
            <p className="mb-8 text-lg">Artist, Educator</p>
            <img
              alt="​Stephen Hamilton"
              src="/img/speakers/stephen-hamilton.jpg"
            />
            <details className="font-mono mt-6">
              painting and drawing with resist dyeing, weaving, and woodcarving.
              Each image is a marriage between the aesthetic perspectives and
              artistry of both traditions. As a Black American trained in
              traditional west African artforms, he treats the acts of weaving,
              dyeing, and woodcarving as ritualized acts of reclamation. He uses
              traditional techniques and materials native to West Africa to
              reclaim ancestral knowledge dissociated from Africans in the
              Americas, during the transatlantic slave trade. The work explores
              and heavily references the Black body in pre-colonial African art
              history, creating visual connections between the past and the
              present. This forms a body of work, which serves as a conceptual
              and visual bridge between the ancient and modern worlds. Through
              this, he explores elements of black identity through time and
              space on its own terms.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="http://www.itanproject.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Stephen Hamilton
                </a>{" "}
                (he / him) is an artist and arts educator living and working in
                Boston Massachusetts. Stephen’s Work incorporates both Western
                and African techniques, blending figurative
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Future of Roxbury Panel
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Tariq Charles</h3>
            <p className="mb-8 text-lg">Student, Poet, Emcee</p>
            <img alt="Tariq Charles" src="/img/speakers/tariq-charles.jpg" />
            <p className="font-mono mt-6">
              Tariq Charles (he / him), 19, is a student, poet and emcee. A
              Roxbury native, Charles is a 2020 Youth Poet Laureate Finalist for
              the city of Boston and spends his time enjoying music, and his
              family.
            </p>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Future of Roxbury Panel
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Tatiana Johnson-Boria
            </h3>
            <p className="mb-8 text-lg">Poet, Educator, Artist</p>
            <img
              alt="Tatiana Johnson-Boria"
              src="/img/speakers/tatiana-johnson-boria.jpg"
            />
            <details className="font-mono mt-6">
              She completed her MFA in Creative Writing at Emerson College and
              is a 2021 Tin House Scholar. She also serves on the board for
              VIDA: Women in Literary Arts. Find her work in or forthcoming at
              Ploughshares, New Delta Review, Foundry and others.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="http://www.tatianamrjohnson.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Tatiana
                </a>{" "}
                (she / her) is a writer, artist and educator. Her writing
                explores identity, trauma, especially inherited trauma, and what
                it means to heal.
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Writing Our Mothers
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Toni Bee</h3>
            <p className="mb-8 text-lg">Poet, Educator, Teaching Artist</p>
            <img alt="Toni Bee" src="/img/speakers/toni-bee.jpeg" />
            <details className="font-mono mt-6">
              position. Bee led the Black Lives Matter march of Cambridge in
              2015 and the following year was selected as the city's Inaugural
              Poetry Ambassador. Toni is a teaching artist and storyteller who
              has worked at Boch Theatre. She received her 'papers' from Simmons
              University. Her poetry book is called{" "}
              <a
                className="pl-3 underline"
                href="https://www.tonibee.org/blank-page"
                rel="noreferrer noopener"
                target="_blank"
              >
                22 Again
              </a>
              , and is on the Advisory Board of The New England Poetry Club;
              Toni is the Founder and Curator of The Poetry Mashup as well as
              Poets In The Garden, which focuses on food justice in community
              gardens for Black folks and People of Color woman.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.tonibee.org/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Toni Bee
                </a>{" "}
                (she / her) is a poet, educator, and photographer raised in
                Dorchester and educated in Roxbury. She is a Cambridge Poet
                Populist emeritus, and the first woman to grace that
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Flowers as They Live
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Yasmin Belkhyr</h3>
            <p className="mb-8 text-lg">Moroccan-American Writer & Editor </p>
            <img alt="Yasmin Belkhyr" src="/img/speakers/yasmin-belkhyr.jpg" />
            <details className="font-mono mt-6">
              of their New Generations African Poetry series. Her writing has
              appeared in Soul Sister Revue, PANK, Waxwing, the TED Ideas Blog,
              and Muzzle Magazine. She is the founder & editor of the literary
              magazine, Winter Tangerine, and the independent publisher,
              Honeysuckle Press.
              <summary className="focus:outline-none textWrap">
                Yasmin Belkhyr (she / her) is a Moroccan-American writer and
                editor. She is the author of Bone Light, a poetry chapbook
                published by the African Poetry Book Fund and Akashic Books, as
                part
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for Halal If You Hear Me
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">826 Boston</h3>
            <p className="mb-8 text-lg">Youth Writing Organization</p>
            <img alt="826 Boston" src="/img/speakers/826-boston.jpg" />
            <details className="font-mono mt-6">
              stories, and gain communication skills to succeed in school and in
              life.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://826boston.org/about/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  826 Boston
                </a>{" "}
                (they / them) is a nonprofit youth writing and publishing
                organization that empowers traditionally underserved students
                ages 6-18 to find their voices, tell their
              </summary>
            </details>
            <a
              className="border border-black inline-flex items-center mt-6 px-8 py-3 rounded-full lg:text-lg"
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
              rel="noreferrer noopener"
              target="_blank"
            >
              Register for How We May Appear
              <svg className="ml-4 lg:ml-6" height="8" width="19">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
        </ul>
        <h2 className="font-bold my-10 md:text-4xl text-3xl">Meet Our Hosts</h2>
        <ul className="gap-x-28 gap-y-20 grid pb-20 md:grid-cols-2 lg:grid-cols-3">
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">SublimeLuv</h3>
            <p className="mb-8 text-lg">Womanist, Poet, Performer</p>
            <img alt="SublimeLuv" src="/img/speakers/sublimeluv.jpg" />
            <details className="font-mono mt-6">
              spoken word artist, teaching artist, makeup artist, personal
              stylist, and social justice advocate. She is a product of private
              and public local school systems; and became an activist through
              words at an early age due to her contrasting experiences in those
              institutions. She has a fierce passion to combat climate change,
              gentrification, and systematic inequality; which
              disproportionately affect disadvantaged populations and people of
              the global majority. She has a Bachelor of Arts in Sociology from
              Simmons University. She has performed at the Isabella Stewart
              Gardner Museum where she opened up for Grammy nominated artist
              Maimouna Youssef, the Museum of Fine Arts, the city of Quincy's
              first Pride celebration, and has been an active performer in The
              Femme Show since 2014. Through her art and future endeavors, she
              aims to empower women and people of the global majority to impact
              visibility and positive global change.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.sublimeluv.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Amber Aliyah Williams, aka SublimeLuv,
                </a>{" "}
                (she / her) is a black queer womanist who always speaks her
                truth and believes "the personal is political." She is a Boston
                born and bred
              </summary>
            </details>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Denise Washington</h3>
            <p className="mb-8 text-lg">CEO, Curator, Poet</p>
            <img
              alt="Denise Washington"
              src="/img/speakers/denise-washington.jpg"
            />
            <details className="font-mono mt-6">
              years, poetry has been popping up around the City of Boston,
              beyond and currently on-line, virtually, empowering communities
              one poem at a time! This Series create a safe space for people to
              breathe, listen, recite and enjoy! She is currently on the
              Advisory Board of The New England Poetry Club. She is an Educator
              in Boston, nurturing students, teaching mindfulness, yoga and
              Zumba to the whole school community, their families and staff. She
              was born and raised in Roxbury, Massachusetts; was a METCO student
              who graduated from Lincoln-Sudbury Regional High School; is an
              Elma Lewis School of Fine Arts Alum and a vocal student of the
              late John Andrew Ross. She holds a Master of Science degree in
              Early Childhood Education from Wheelock College and a Bachelor of
              Science Degree from Emerson College in Television Production/
              Creative Writing. For several years, she lived in North Hollywood,
              California. While living there she discovered her love for writing
              television scripts, plays, poetry and Children’s literature and
              she became a Television Writer on a show produced by HBO.
              <summary className="focus:outline-none textWrap">
                Denise (she / her) is so excited to be using the power of poetry
                to bring people together! She is the Founder and CEO of her{" "}
                <a
                  className="underline"
                  href="https://www.facebook.com/Pop-Up-Poetry-1645852038857897/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  #Pop-Up Poetry Series, A Denise Plays Hard Event
                </a>
                . For the past 4
              </summary>
            </details>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">D Ruff</h3>
            <p className="mb-8 text-lg">Poet, Performer, Curator</p>
            <img alt="​D Ruff" src="/img/speakers/d-ruff.jpg" />
            <details className="font-mono mt-6">
              "if you can Feel It, you can Speak It" Open Mic movement, held at
              Bella Luna/ Milky Way in Jamaica Plain, for the last ten years. He
              has been writing and performing for over twenty years. Most of his
              poems stem from personal experiences and his environments and
              therefore range in topics from black love and heartbreak to
              inequality and black culture. D Ruff performs with inspiring
              passion in hopes that any black body will also want to find a way
              to express themselves, find that "tribe" and achieve their
              greatness, with the intention of leaving the cycle of hurt, pain,
              and negativity, right where it was showcased.
              <summary className="focus:outline-none textWrap">
                D Ruff (he / him) is a spoken word poet, author of "Staying on
                94: Tales from a Misguided Soul," and Creative Director of the
                Boston Pulse Poetry program. He has been the co-host of the
              </summary>
            </details>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Nakia Hill</h3>
            <p className="mb-8 text-lg">Writer, Educator, Journalist</p>
            <img alt="Nakia Hill" src="/img/speakers/nakia-hill.jpg" />
            <details className="font-mono mt-6">
              native of Roxbury, Hill was named a Boston Artist-in-Residence in
              2018 by Mayor Marty Walsh. Hill is the author of two books:{" "}
              <a
                className="px-3 underline"
                href="https://www.nakiahill.com/books-1/o6xj6qucd96tem9ui1bgog8ekif3p0"
                rel="noreferrer noopener"
                target="_blank"
              >
                Water Carrier
              </a>{" "}
              and{" "}
              <a
                className="pl-3 underline"
                href="https://www.nakiahill.com/books-1/i-still-did-it"
                rel="noreferrer noopener"
                target="_blank"
              >
                I Still Did It
              </a>
              . She is the first Black woman to become an editor at Boston Art
              Review. She is a co-writer on Here Comes the Break, a
              fictionalized YA drama podcast. You can find her cheffin' it up in
              the kitchen while immersing herself in good music and podcasts
              during her spare time.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.nakiahill.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Nakia Hill
                </a>{" "}
                (she / her) is a writer, journalist, and educator who focuses on
                empowering Black women and girls to use writing as a tool for
                healing and resistance through book publishing. A
              </summary>
            </details>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Angela Siew</h3>
            <p className="mb-8 text-lg"></p>
            <img alt="Angela Siew" src="/img/speakers/angela-siew.jpg" />
            <details className="font-mono mt-6">
              Poetry Workshop. She is the recipient of an Academy of American
              Poets College Prize and has work published in Crab Orchard Review,
              Dialogist, The Merrimack Review and Art New England.
              <summary className="focus:outline-none textWrap">
                Angela Siew (she / her) is a multilingual poet who received her
                MFA from Emerson College. Her work has been supported by the
                Bread Loaf Writers’ Conference and the Community of Writers
              </summary>
            </details>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Phree</h3>
            <p className="mb-8 text-lg">Poet, Performer, Curator</p>
            <img alt="Phree" src="/img/speakers/phree.jpg" />
            <details className="font-mono mt-6">
              Non-Binary BIPOC individuals to heal, break barriers and build
              bonds. Born and Raised in Boston, Phree utilizes their gift of
              creativity as a fight towards freedom and an extreme attempt at
              revolutionizing therapy through art and as a form of healing.
              Their work consists of topics ranging from but not limited to,
              intergenerational trauma, cycles of abuse, mental health, identity
              and self love. Phree uses their voice as a tool for self
              liberation, to influence the power of passion and works to counter
              systemic oppression with community building and advocacy.
              <summary className="focus:outline-none textWrap">
                Phree (they / them) is a Black, Queer, Non-Binary
                Multidisciplinary Artist and the Founder of The Bois & Bullshit
                Collective; a working space for Masculine - of - Centered Queer,
                Trans,
              </summary>
            </details>
          </li>
        </ul>
        <h2 className="font-bold my-10 md:text-4xl text-3xl">
          DJ WhySham Presents… BEAST THE BEAT
        </h2>
        <ul className="gap-x-28 gap-y-20 grid pb-20 md:grid-cols-2 lg:grid-cols-3">
          <li className="speakers-grid">
            <h3 className="mb-8 mt-8 text-5xl uppercase">DJ WhySham</h3>
            <img alt="DJ WhySham" src="/img/speakers/dj-whysham.jpg" />
            <details className="font-mono mt-6">
              uses the tagline “Your Community DJ”. DJ WhySham has been seen on
              “The ShadeRoom w/ Megan Thee Stallion”, Boston Neighborhood
              Network and has DJ’ed for Senator Elizabeth Warren. She is also
              the Official DJ for Brandie Blaze and CakeSwagg. While in Boston,
              DJ WhySham received the Neighborhood Leadership Award from the
              Codman Square Neighborhood Council. This award recognized Hidden
              Heroes & Sheroes in the community who have demonstrated
              leadership, initiative and commitment to improving the quality of
              life in our neighborhood.
              <summary className="focus:outline-none textWrap">
                Shamara AKA DJ WhySham (she / her), was nominated for the 2019 &
                2020 Boston Music Awards ‘DJ Of The Year’. She is a visionary,
                activist, traveler, sister, god-parent, curator and
              </summary>
            </details>
          </li>

          <li className="speakers-grid">
            <h3 className="mb-8 mt-8 text-5xl uppercase">Red Shaydez</h3>
            <img alt="Red Shaydez" src="/img/speakers/red-shaydez.jpeg" />
            <details className="font-mono mt-6">
              undeniable talent and electric personality have been widely
              praised by both local and national media such as
              <a
                className="pl-3 underline"
                href="http://soundtrack.mtv.com/post/music-from-ex-on-the-beach-season-3-episode-12/"
                rel="noreferrer noopener"
                target="_blank"
              >
                MTV
              </a>
              ,
              <a
                className="pl-3 underline"
                href="https://www.youtube.com/watch?v=WtuG1HZCi8A"
                rel="noreferrer noopener"
                target="_blank"
              >
                Boston 25 News
              </a>
              ,
              <a
                className="pl-3 underline"
                href="https://www.bostonmagazine.com/arts-entertainment/2019/05/29/female-emcees-boston/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Boston Magazine
              </a>
              ,
              <a
                className="pl-3 underline"
                href="https://www.bostonglobe.com/2020/06/11/arts/five-black-musicians-reckoning-with-racism-what-comes-next/"
                rel="noreferrer noopener"
                target="_blank"
              >
                The Boston Globe
              </a>
              ,
              <a
                className="pl-3 underline"
                href="https://www.npr.org/2020/10/21/925822173/city-scenes-how-bostons-lgbtq-musicians-are-making-space-for-each-other"
                rel="noreferrer noopener"
                target="_blank"
              >
                NPR MUSIC
              </a>
              , and more!”
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://chillinintheshade.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Red Shaydez
                </a>{" "}
                (she / her), Boston native, is a Boston Music Award winning
                hip-hop artist, professional video producer, public speaker,
                educator, and youth mentor. Red’s
              </summary>
            </details>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-8 mt-8 text-5xl uppercase">MALiA the Model</h3>
            <img
              alt="MALiA the Model"
              src="/img/speakers/malia-the-model.jpg"
            />
            <details className="font-mono mt-6">
              Lawrence, Ma and found her talents making way to Boston in 2017.
              With her UPBEAT tempo, she keeps a good mix of old and new school
              sounds, creating a feel good, unapologetic, money making, party
              type of music. Her inspirations range from Missy Elliott, Kanye
              West, Nicki Minaj, Lil Wayne, Tink, T.I., Rihanna, Busta Rhymes
              and Aaliyah. Known for her SCENARiO Li-Mix on Youtube, paying
              homage to A Tribe Called Quest, the model rapper released her
              first EP entitled ‘MADE U LOOK’ (2018). Soon after, her single ‘NO
              TIME’ (2019), ‘BE GONE’ (2020) and her newest single I’M HOT!
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://www.maliathemodel.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  MALiA The Model
                </a>{" "}
                (she / her) is MODEL MUSiK! With her one of a kind voice and
                slim figure, MALiA is, Naomi Campbell meets Hip Hop. Beginning
                her music journey in 2018, she grew up in
              </summary>
            </details>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-8 mt-8 text-5xl uppercase">CakeSwagg</h3>
            <img alt="CakeSwagg" src="/img/speakers/cakeswagg.jpg" />
            <details className="font-mono mt-6">
              week she uses a variety of instrumentals. CakeSwagg has attracted
              over 28k listeners to her recent song “Ferb and Phineas”,
              available on all music platforms.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://bostongotnext.com/cakeswagg/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  CakeSwagg
                </a>{" "}
                (she / her), Roxbury Native, is a Boston Music Award nominee.
                CakeSwagg is the creator of "Talk that Talk Tuesdays”, where she
                is known to release a freestyle every Tuesday. Each
              </summary>
            </details>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-8 mt-8 text-5xl uppercase">Brandie Blaze</h3>
            <img alt="Brandie Blaze" src="/img/speakers/brandie-blaze.jpg" />
            <details className="font-mono mt-6">
              leaving her mark across the music scene. Known for her hit record
              “Boss Like Me”, Brandie Blaze has been influential to women in
              Boston and across the world looking to break into the music
              industry by just being themselves.
              <summary className="focus:outline-none textWrap">
                <a
                  className="underline"
                  href="https://bostongotnext.com/brandieblaze/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Brandie Blaze
                </a>{" "}
                (she / her), Dorchester Native, Trap Feminist, Boston Music
                Award nominee, featured in Jubilee “Is WAP A Female
                Empowerment?”, Brandie Blaze has been a trailblazer
              </summary>
            </details>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
