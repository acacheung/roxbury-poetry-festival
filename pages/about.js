import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";

export default function About() {
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
        <h2 className="font-bold mb-10 mt-24 md:text-4xl text-3xl">About Us</h2>
        <div className="border-t border-white md:flex md:pt-20 pt-10">
          <div className="mb-10 md:mb-0 md:mr-20 md:text-3xl text-2xl xl:mr-32 w-full">
            Roxbury Poetry Festival 2021 is the start of a multi-year
            collaboration between poetry and the city of Boston.
          </div>
          <div className="font-mono md:text-lg md:max-w-md lg:max-w-2xl xl:max-w-3xl">
            <p>
              Choose the session you want to to attend! We’ll have a publishing
              panel and two writing workshops by Chen Chen and Denice Froham.
              Workshops require registration ahead of time.
            </p>
            <p className="my-10">
              Porsha Olayiwola brings to you choose the session you want to to
              attend! We’ll have a publishing panel and two writing workshops by
              Chen Chen and Denice Froham. Workshops require registration ahead
              of time.Choose the session you want to to attend! We’ll have a
              publishing panel and two writing workshops by Chen Chen and Denice
              Froham. Workshops require registration ahead of time. Porsha
              Olayiwola brings to you choose the session you want to to attend!
              We’ll have a publishing panel and two writing workshops by Chen
              Chen and Denice Froham. Meow the session you want to to attend!
            </p>
            <p>
              We’ll have a publishing panel and two writing workshops by Chen
              Chen and Denice Froham. Workshops require registration ahead of
              time.Choose the session you want to to attend!
            </p>
          </div>
        </div>
        <div className="flex justify-center max-w-4xl lg:text-5xl md:my-32 md:text-4xl my-16 mx-auto text-2xl text-center">
          Teamwork makes the dream work. Shout out to the team that brought this
          all together. Please give a round of applause to the organizers.
        </div>
        <ul className="gap-x-10 gap-y-20 grid mb-20 md:grid-cols-2 lg:grid-cols-3">
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
            <p className="mb-8 text-lg">Black, Futurist, Poet</p>
            <img alt="Porsha Olayiwola" src="/img/amandag.jpg" />
            <p className="font-mono mt-6 text-lg">
              Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha is
              a native of Chicago who now resides in Boston.
            </p>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
            <p className="mb-8 text-lg">Black, Futurist, Poet</p>
            <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
            <p className="font-mono mt-6 text-lg">
              Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha is
              a native of Chicago who now resides in Boston.
            </p>
          </li>
          <li className="speakers-grid">
            <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
            <p className="mb-8 text-lg">Black, Futurist, Poet</p>
            <img alt="Porsha Olayiwola" src="/img/amandag.jpg" />
            <p className="font-mono mt-6 text-lg">
              Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha is
              a native of Chicago who now resides in Boston.
            </p>
          </li>
        </ul>
        <div className="flex justify-center max-w-4xl lg:text-5xl md:my-32 md:text-4xl my-16 mx-auto text-2xl text-center">
          And another round of applause to our sponsors. Thank you for helping
          make this event possible
        </div>
        <ul className="gap-x-10 gap-y-10 grid mb-20 md:grid-cols-3 lg:grid-cols-4">
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://poets.org/"
              target="_blank"
            >
              <img
                alt="Academy of American Poets"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/poets-org.png"
              />
              <h4 className="text-2xl uppercase">Academy of American Poets</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="http://roxburyculturaldistrict.com/"
              target="_blank"
            >
              <img
                alt="Roxbury Cultural District"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/roxbury-cultural-district.png"
              />
              <h4 className="text-2xl uppercase">Roxbury Cultural District</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://www.boston.gov/departments/arts-and-culture"
              target="_blank"
            >
              <img
                alt="City of Boston"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/boston.png"
              />
              <h4 className="text-2xl uppercase">
                Mayor’s Office of Arts & Culture
              </h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="http://www.madison-park.org/what-we-do/arts-culture/hibernian-hall/"
              target="_blank"
            >
              <img
                alt="Hibernian Hall"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/hibernian-hall.png"
              />
              <h4 className="text-2xl uppercase">Hibernian Hall</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://masspoetry.org/"
              target="_blank"
            >
              <img
                alt="Mass Poetry"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/mass-poetry.png"
              />
              <h4 className="text-2xl uppercase">Mass Poetry</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="items-center md:mb-4 mt-8"
              href="https://blackmarketnubian.com/"
              target="_blank"
            >
              <img
                alt="Black Market Dudley"
                className="h-20 mr-6 mt-8"
                src="/img/logos/black-market.jpeg"
              />
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://grubstreet.org/"
              target="_blank"
            >
              <img
                alt="Grub Street"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/grub-street.png"
              />
              <h4 className="text-2xl uppercase">Grub Street</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://haleyhouse.org/"
              target="_blank"
            >
              <img
                alt="Haley House"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/haley-house.png"
              />
              <h4 className="text-2xl uppercase">Haley House</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a href="#">
              <h4 className="mb-4 md:text-4xl mt-8 text-3xl uppercase">
                Savior the Square
              </h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://www.northeastern.edu/"
              target="_blank"
            >
              <img
                alt="Northeastern"
                className="h-20 mr-6"
                src="/img/logos/northeastern2.jpg"
              />
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://826boston.org/"
              target="_blank"
            >
              <img
                alt="826 Boston"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/826-boston.jpeg"
              />
              <h4 className="text-2xl uppercase">826 Boston</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://buttonpoetry.com/"
              target="_blank"
            >
              <img
                alt="Button Poetry"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/button-poetry.jpeg"
              />
              <h4 className="text-2xl uppercase">Button Poetry</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://www.therecordco.org/"
              target="_blank"
            >
              <img
                alt="The Record Company"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/the-record-co.png"
              />
              <h4 className="text-2xl uppercase">The Record Company</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://www.haymarketbooks.org/"
              target="_blank"
            >
              <img
                alt="Haymarket Books"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/haymarket-books.png"
              />
              <h4 className="text-2xl uppercase">Haymarket Books</h4>
            </a>
          </li>
          <li className="speakers-grid">
            <a
              className="flex items-center md:mb-4 mt-8"
              href="https://printaintdead.us/"
              target="_blank"
            >
              <img
                alt="Print Ain’t Dead"
                className="h-16 md:h-20 mr-6"
                src="/img/logos/print-aint-dead.jpeg"
              />
              <h4 className="text-2xl uppercase">Print Ain’t Dead</h4>
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
