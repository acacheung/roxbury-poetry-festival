import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Spakers | Roxbury Poetry Festival</title>
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
        <ul className="gap-x-10 gap-y-20 grid mb-20 md:grid-cols-2 lg:grid-cols-3">
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Diannely Antigua</h3>
            <p className="mb-8 text-lg">TBA</p>
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
            <a className="border border-white inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for LatiNext Reading
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
              <a className="underline" href="jillmcdonough.com" target="_blank">
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
            <a className="border border-white inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for On Sound & Form
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Jonathan Mendoza</h3>
            <p className="mb-8 text-lg">Organizer, poet, and educator</p>
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
              MendozaPoetry.com and @JMendoza010 on Twitter and Instagram.
            </p>
            <a className="border border-white inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for LatiNext Reading
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
              <a className="underline" href="malcolmfriend.com" target="_blank">
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
            <a className="border border-white inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for LatiNEXT Reading
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Martha Collins</h3>
            <p className="mb-8 text-lg">TBA</p>
            <img alt="Martha Collins" src="/img/martha-collins.jpg" />
            <p className="font-mono mt-6 text-lg">
              <a
                className="underline"
                href="marthacollinspoet.com"
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
            <a className="border border-white inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
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
                href="www.nikiachaney.com"
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
            <a className="border border-white inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Halal If Your Hear Me
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
                href="www.seemayasmin.com"
                target="_blank"
              >
                Seema Yasmin
              </a>{" "}
              (she / her) is an Emmy Award-winning journalist, medical doctor,
              and author. A fiction fellow of the Kundiman and Tin House
              workshops, she is the author of four books including Muslim Women
              Are Everything, Viral BS: Medical Myths and Why We Fall for Them,
              and{" "}
              <a
                className="underline"
                href="https://www.haymarketbooks.org/books/1636-if-god-is-a-virus"
                target="_blank"
              >
                If God is a Virus
              </a>
              , poems based on her reporting on the Ebola epidemic in West
              Africa.
            </p>
            <a className="border border-white inline-flex items-center mt-6 px-5 py-3 rounded-full text-lg">
              Register for Halal If Your Hear Me
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
