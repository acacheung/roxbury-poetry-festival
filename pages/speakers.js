import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import Footer from "../components/Footer";

export default function Speakers() {
  return (
    <Layout>
      <Head>
        <title>Speakers | Roxbury Poetry Festival</title>
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
        <h2 className="font-bold mb-10 mt-24 md:text-4xl text-3xl">Speakers</h2>
        <ul className="gap-x-10 gap-y-20 grid pb-20 md:grid-cols-2 lg:grid-cols-3">
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Denice Frohman</h3>
            <p className="mb-8 text-lg">Poet, Educator, Activist</p>
            <img alt="Denice Frohman" src="/img/denice-frohman.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="https://www.denicefrohman.com"
                target="_blank"
              >
                Denice Frohman
              </a>{" "}
              (she / her) is a poet, performer and educator from New York City.
              A CantoMundo Fellow, she’s received residencies and awards from
              the National Association of Latino Arts & Cultures, Leeway
              Foundation, Millay Colony and Blue Mountain Center.
              <br />
              Her work has appeared in The New York Times, The BreakBeat Poets:
              LatiNext, Nepantla: An Anthology for Queer Poets of Color, ESPNW
              and elsewhere. A former Women of the World Poetry Slam Champion,
              she’s featured on hundreds of stages from The White House to The
              Apollo, and co-organized #PoetsforPuertoRico. She lives in
              Philadelphia.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Sweet Impossible Blossom
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Diannely Antigua</h3>
            <p className="mb-8 text-lg"></p>
            <img alt="Diannely Antigua" src="/img/diannely-antigua.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="https://diannelyantigua.com"
                target="_blank"
              >
                Diannely Antigua
              </a>{" "}
              (she / her) is a Dominican American poet and educator, born and
              raised in Massachusetts. Her debut collection{" "}
              <a
                className="underline"
                href="https://www.yesyesbooks.com/product-page/ugly-music-by-diannely-antigua"
                target="_blank"
              >
                Ugly Music
              </a>{" "}
              (YesYes Books, 2019) was the winner of the Pamet River Prize and a
              2020 Whiting Award. She received her BA in English from the
              University of Massachusetts Lowell and her MFA at NYU.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for LatiNext Reading
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Frances Donovan</h3>
            <p className="mb-8 text-lg">Poet, Writer, Teacher</p>
            <img alt="Frances Donovan" src="/img/frances-donovan.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="https://gardenofwords.com/"
                target="_blank"
              >
                Frances Donovan’s
              </a>{" "}
              (she / her) chapbook{" "}
              <a
                className="underline"
                href="https://www.amazon.com/Mad-Quick-Hand-Seashore-Poems/dp/1984273159"
                target="_blank"
              >
                Mad Quick Hand of the Seashore
              </a>{" "}
              was a finalist in the Lambda Literary Awards. Bylines include The
              Rumpus, SWWIM, and Solstice. She holds an MFA in poetry from
              Lesley University and she once drove a bulldozer in an LGBTQ+
              Pride Parade while wearing a bustier. Twitter:{" "}
              <a
                className="underline"
                href="https://twitter.com/okelle"
                target="_blank"
              >
                @okelle
              </a>
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Paths to Publication
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">George Abraham</h3>
            <p className="mb-8 text-lg">
              Palestinian Diasporic Poet, Educator, Engineer
            </p>
            <img alt="George Abraham" src="/img/george-abraham.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="https://www.gabrahampoet.com/"
                target="_blank"
              >
                George Abraham
              </a>{" "}
              (they / he) is a Palestinian american poet, writer, and engineer
              from Jacksonville, FL. Their debut poetry collection{" "}
              <a
                className="underline"
                href="https://buttonpoetry.com/product/birthright/"
                target="_blank"
              >
                Birthright
              </a>{" "}
              (Button Poetry, 2020) was a finalist for the Lambda Literary Award
              in Bisexual Poetry, and the Big Other Book Award. He is a board
              member for the Radius of Arab American Writers (RAWI), a recipient
              of fellowships from Kundiman and The Boston Foundation, and winner
              of the 2017 College Union Poetry Slam Invitational's Best Poet
              title. Their work has appeared in The American Poetry Review, The
              Baffler, The Paris Review, The Missouri Review, Mizna, and
              elsewhere. A graduate of Swarthmore College and Harvard
              University, Abraham currently teaches at Emerson College, and will
              be a Litowitz MA+MFA Candidate at Northwestern University in the
              fall.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Paths to Publication
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Jill McDonough</h3>
            <p className="mb-8 text-lg">Jill's at UMB and jails.</p>
            <img alt="Jill McDonough" src="/img/jill-mcdonough.jpg" />
            <p className="font-mono mt-6 text-lg">
              Three-time Pushcart prize winner{" "}
              <a
                className="underline"
                href="http://www.jillmcdonough.com/"
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
                target="_blank"
              >
                Here All Night
              </a>{" "}
              (Alice James, 2019). She teaches in the MFA program at
              UMass-Boston and offers College Reading and Writing in Boston
              jails.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for On Sound & Form
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Jonathan Mendoza</h3>
            <p className="mb-8 text-lg">Organizer, Poet, Educator</p>
            <img alt="Jonathan Mendoza" src="/img/jonathan-mendoza.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="https://mendozapoetry.com"
                target="_blank"
              >
                Jonathan Mendoza
              </a>{" "}
              (he / him) is a Boston-bred, Chicago-based Jewish and
              Mexican-American activist, poet, and social justice educator. He
              is a National Poetry Slam Champion, winner of the Sonia Sanchez –
              Langston Hughes Poetry Prize, and a three-time award winner at the
              College Union Poetry Slam Invitational. He currently works as a
              community organizer for housing and youth, a teaching artist, and
              a freelance writer, performer, and educator throughout the U.S. He
              is a proud anxious Virgo, Greek yogurt enthusiast, and devout
              believer in the power of young people to change this world for the
              better. Books, updates, and more information can be found at
              @JMendoza010 on{" "}
              <a
                className="underline"
                href="https://twitter.com/jmendoza010"
                target="_blank"
              >
                Twitter
              </a>{" "}
              and{" "}
              <a
                className="underline"
                href="https://www.instagram.com/jmendoza010/"
                target="_blank"
              >
                Instagram
              </a>
              .
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for LatiNext Reading
              <svg className="fill-current ml-2" height="12" width="15">
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
              src="/img/kristina-marie-darling.jpg"
            />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="https://kristinamariedarling.com"
                target="_blank"
              >
                Kristina Marie Darling
              </a>{" "}
              (she / her) is the author of thirty-five books, which include Look
              to Your Left: A Feminist Poetics of Spectacle (University of Akron
              Press, 2021); Stylistic Innovation, Conscious Experience, and the
              Self in Modernist Women’s Poetry (Rowman & Littlefield Publishing
              Group, 2021); Silence in Contemporary Poetry, which will be
              published in hardcover by Clemson University Press in the United
              States and Liverpool University Press in the United Kingdom;
              SILENT REFUSAL: Essays on Contemporary Feminist Poetry (Black
              Ocean, forthcoming); ANGEL OF THE NORTH (Salmon Poetry,
              forthcoming); and X Marks the Dress: A Registry (co-written with
              Carol Guess), which will be launched by Persea Books in the United
              States. Penguin Random House Canada will also publish a Canadian
              edition. Her work has been recognized with three residencies at
              Yaddo, where she has held the Martha Walsh Pulver Residency for a
              Poet and the Howard Moss Residency in Poetry; a Fundación
              Valparaíso fellowship to live and work in Spain; a Hawthornden
              Castle Fellowship, funded by the Heinz Foundation; an
              artist-in-residence position at Cité Internationale des Arts in
              Paris; five residencies at the American Academy in Rome; two
              grants from the Whiting Foundation; a Faber Residency in the Arts,
              Sciences, and Humanities, which she received on two separate
              occasions; an artist-in-residence position with the Andorran
              Ministry of Culture; and the Dan Liberthson Prize from the Academy
              of American Poets, which she received on three separate occasions;
              among many other awards and honors. She serves as Editor-in-Chief
              of Tupelo Press & Tupelo Quarterly.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Paths to Publication
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Letta Simone Neely</h3>
            <p className="mb-8 text-lg">
              Artist, Poet, Activist, Earthling, Parent
            </p>
            <img alt="Letta Simone Neely" src="/img/letta-neely.jpg" />
            <p className="font-mono mt-6 text-lg">
              Letta Neely (she / her) is a Black Lesbian Earthling. She is the
              author of two books of poetry and numerous plays. She is a
              draptomaniac who knows her liberation is tied to yours and vice
              versa.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Local Literary Legends
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Malcolm Friend</h3>
            <p className="mb-8 text-lg">Is a poet.</p>
            <img alt="Malcolm Friend" src="/img/malcolm-friend.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="http://www.malcolmfriend.com/"
                target="_blank"
              >
                Malcolm Friend
              </a>{" "}
              (he / him) is a poet originally from the Rainier Beach
              neighborhood of Seattle, WA, and the{" "}
              <a
                className="underline"
                href="http://www.malcolmfriend.com/books"
                target="_blank"
              >
                author
              </a>{" "}
              of the chapbook mxd kd mixtape (Glass Poetry, 2017) and the
              full-length collection Our Bruises Kept Singing Purple (Inlandia
              Books, 2018). He received his BA from Vanderbilt University, and
              his MFA from the University of Pittsburgh. Together with JR
              Mahung, he is a member of Black Plantains, an Afrocaribbean poetry
              collective.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for LatiNEXT Reading
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Martha Collins</h3>
            <p className="mb-8 text-lg"></p>
            <img alt="Martha Collins" src="/img/martha-collins.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="https://marthacollinspoet.com/"
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
                target="_blank"
              >
                Previous books
              </a>{" "}
              include Blue Front, White Papers, Admit One: An American
              Scrapbook, and the paired volumes Day Unto Day and Night Unto
              Night. Collins has also published four volumes of co-translated
              Vietnamese poetry and co-edited a number of volumes, including,
              with Kevin Prufer, Into English: Poems, Translations,
              Commentaries. She founded the U.Mass.-Boston creative writing
              program, and later served as Pauline Delaney Professor of Creative
              Writing at Oberlin College.{" "}
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Flowers As They Live
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Nikia Chaney</h3>
            <p className="mb-8 text-lg">Poet, Educator</p>
            <img alt="Nikia Chaney" src="/img/nikia-chaney.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="https://www.nikiachaney.com/"
                target="_blank"
              >
                ​Nikia Chaney
              </a>{" "}
              (she / her) is the author of{" "}
              <a
                className="underline"
                href="https://www.amazon.com/us-mouth-Nikia-Chaney/dp/1938753275/ref=sr_1_1?dchild=1&keywords=us+mouth+nikia+chaney&qid=1615485152&sr=8-1"
                target="_blank"
              >
                us mouth
              </a>{" "}
              (University of Hell Press, 2018) and two chapbooks, Sis Fuss
              (2012, Orange Monkey Publishing) and ladies, please (2012, Dancing
              Girl Press). She has served as Inlandia Literary Laureate
              (2016-2018). She teaches at Cabrillo College.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Halal If Your Hear Me
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Rachel McKibbens</h3>
            <p className="mb-8 text-lg">Poet, Witch, Noisemaker</p>
            <img alt="Rachel McKibbens" src="/img/rachel-mckibbens.jpg" />
            <p className="font-mono mt-6 text-lg">
              ​Rachel McKibbens (she / her) is a witch, a writer and a thinker.
              She founded the Pink Door Writing Retreat for fellows and resides
              in upstate New York.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Excavating the Wicked Imagination
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Ryan Murphy</h3>
            <p className="mb-8 text-lg">Publisher, Poet</p>
            <img alt="Ryan Murphy" src="/img/ryan-murphy.jpg" />
            <p className="font-mono mt-6 text-lg">
              Ryan Murphy (he / him) is the author of Millbrook,{" "}
              <a
                className="underline"
                href="https://www.spdbooks.org/Author/Default.aspx?AuthorId=4219"
                target="_blank"
              >
                The Redcoats
              </a>
              , and Down with the Ship. He has received grants and awards from
              the Aldrich Museum of Contemporary Art, Chelsea Magazine, The Fund
              For Poetry, and The New York State Foundation for the Arts.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Excavating the Wicked Imagination
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Seema Yasmin</h3>
            <p className="mb-8 text-lg">Poet, Doctor, Journalist</p>
            <img alt="Seema Yasmin" src="/img/seema-yasmin.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="http://seemayasmin.com/"
                target="_blank"
              >
                Seema Yasmin
              </a>{" "}
              (she / her) is an Emmy Award-winning journalist, medical doctor,
              and author. A fiction fellow of the Kundiman and Tin House
              workshops, she is the author of four books including Muslim Women
              Are Everything, Viral BS: Medical Myths and Why We Fall for Them,
              and , poems based on her reporting on the Ebola epidemic in West
              Africa.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Halal If Your Hear Me
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">
              Tatiana Johnson-Boria
            </h3>
            <p className="mb-8 text-lg"></p>
            <img
              alt="Tatiana Johnson-Boria"
              src="/img/tatiana-johnson-boria.jpg"
            />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="http://www.tatianamrjohnson.com/"
                target="_blank"
              >
                Tatiana
              </a>{" "}
              (she / her) is a writer, artist and educator. Her writing explores
              identity, trauma, especially inherited trauma, and what it means
              to heal. She completed her MFA in Creative Writing at Emerson
              College and is a 2021 Tin House Scholar. She also serves on the
              board for VIDA: Women in Literary Arts. Find her work in or
              forthcoming at Ploughshares, New Delta Review, Foundry and others.
            </p>
            <a className="border border-black inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Writing Our Mothers
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </Layout>
  );
}