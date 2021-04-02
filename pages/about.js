import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
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
            About Us
          </h2>
          <div className="border-t border-black lg:flex md:pt-20 pt-10 w-full">
            <div className="mb-10 lg:mb-0 lg:mr-16 lg:text-3xl lg:w-1/3 lg:pr-6 text-center text-2xl xl:mr-32">
              <p className="mb-6">
                “I don't understand art for art's sake. Art is for the guts of
                the people.”
              </p>
              <p className="text-right">- Elma Lewis, 1977</p>
            </div>
            <div className="font-mono md:text-lg lg:w-3/4">
              <p className="mb-6">
                The Roxbury Poetry Festival is a biennial event centering poetry
                in Roxbury, MA. The inaugural festival is happening virtually
                with the exception of two evening events. The festival features
                several award-winning writers, panelists, and curators, and
                centers a keynote address from 2020 Pulitzer Prize winning poet,
                Jericho Brown. The day-long event culminates with a Publisher’s
                Poetry Slam sponsored by Button Poetry that yields a book
                contract for a local writer and a “Beast The Beat” concert
                battle highlighting a local hip hop artist. The festival is free
                and open to the public.
              </p>
              <p>
                Stay tuned for the schedule release and more information
                regarding the festival!
              </p>
              <div className="my-10">
                <h3 className="font-bold mb-2">About the Poet Laureate</h3>
                <div className="md:flex">
                  <img
                    alt="Porsha Olayiwola"
                    className="w-full h-full mb-4 md:w-1/3"
                    src="/img/porsha.jpg"
                  />
                  <p className="font-mono md:ml-6 md:text-lg md:w-2/3">
                    <a
                      className="underline"
                      href="http://www.porshaolayiwola.com/"
                      target="_blank"
                    >
                      ​Porsha Olayiwola
                    </a>{" "}
                    is a writer, performer, futurist and curator. Olayiwola is
                    serving as the current Poet Laureate for the City of Boston
                    and a 2020 laureate fellow with the Academy of American
                    Poets. Part of her work with the Academy of American Poets
                    is establishing the HOME Reading & Workshop series as well
                    as the inaugural Roxbury Poetry Festival. Olayiwola is a
                    long-time Roxbury organizer and artist and a recent
                    Rox-resident. (Photo credit: Feda Eid)
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold">RPF Advisory Team</h3>
                <ul className="list-disc md:gap-x-20 md:grid md:grid-cols-2 ml-5">
                  <li className="mt-2">Vernon C. Robinson</li>
                  <li className="mt-2">DJ WHY SHAM</li>
                  <li className="mt-2">Crystal Valentine</li>
                  <li className="mt-2">Canderlaria Silva-Collins</li>
                  <li className="mt-2">Amanda Cheung (Tech Team)</li>
                  <li className="mt-2">Ashley Ramsay (Tech Team)</li>
                  <li className="mt-2">Thomas Johnston</li>
                  <li className="mt-2">Kristina McGeehan</li>
                  <li className="mt-2">Tariq Charles</li>
                  <li className="mt-2">Stephen Hamilton</li>
                  <li className="mt-2">Amber Williams (Sublime Luv)</li>
                </ul>
              </div>
              <div className="my-10">
                <h3 className="font-bold mb-2">Public Safety & COVID-19</h3>
                <p>
                  Due to the pandemic and the goal to ensure a public
                  health-conscious space, this year’s festival will take place
                  online via zoom. If health mandates permit, The Publisher’s
                  Poetry Slam and Beast The Beat will take place outdoors in
                  Nubian Square’s Blair Lot. In addition to onsite sanitizers,
                  mandated masks, and public health care representatives, there
                  will be social distance markers and volunteers to ensure the
                  community members are socially distancing and masked.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-center max-w-6xl md:mb-32 md:mt-24 my-16 mx-auto text-center">
            <p className="mb-10 md:text-4xl lg:text-5xl text-2xl">
              “‘Thank you’ is the best prayer that anyone could say. I say that
              one a lot. Thank you expresses extreme gratitude, humility,
              understanding.”
            </p>
            <p className="text-right md:text-3xl lg:text-4xl text-xl">
              - Pulitzer Prize Winner, Alice Walker
            </p>
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
                <h4 className="text-2xl uppercase">
                  Academy of American Poets
                </h4>
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
                <h4 className="text-2xl uppercase">
                  Roxbury Cultural District
                </h4>
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
                <h4 className="text-2xl uppercase">City of Boston</h4>
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
                <h4 className="text-2xl uppercase">
                  Haley House Bakery & Cafe
                </h4>
              </a>
            </li>
            <li className="speakers-grid">
              <h4 className="mb-4 mt-8 text-2xl uppercase">
                Savior the Square
              </h4>
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
                  src="/img/logos/northeastern.png"
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
                href="https://bostongotnext.com/"
                target="_blank"
              >
                <img
                  alt="Boston Got Next"
                  className="h-10 xl:h-14 mr-6"
                  src="/img/logos/boston-got-next.png"
                />
                <h4 className="text-2xl uppercase">Boston Got Next</h4>
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
                  className="h-16 xl:h-20 mr-6"
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
          <div className="justify-center max-w-5xl lg:text-5xl md:mb-32 md:mt-24 md:text-4xl my-16 mx-auto text-2xl text-center">
            From the very bottom of our hearts, thank you to our sponsors and
            co-collaborators. This dream is only reality with you!
          </div>
          <div className="font-mono md:text-lg max-w-6xl mx-auto">
            The Roxbury Poetry Festival resides on the ancestral and unceded
            lands of{" "}
            <a
              className="underline"
              href="http://massachusetttribe.org/the-history-of-the-neponset"
              target="_blank"
            >
              the Massachusett people
            </a>{" "}
            and the neighboring Wampanoag Nation. We pay respect to the
            Massachusett elders past and present. We acknowledge the truth of
            violence perpetrated in the name of this country and make a
            commitment to uncovering that truth. We make this acknowledgment as
            a step toward dismantling the ongoing legacies of settler
            colonialism, and as a commitment to social justice. We also
            acknowledge and trace this country’s modern existence to the
            historical enslavement of Black and African people. We recongize
            that the genocide of Idengenous people occured conjunctionally and
            alongside the enslavement of Africans. To learn more about the
            colonial and current history of Roxbury and its residents, please
            visit{" "}
            <a
              className="underline"
              href="http://roxburyhistoricalsociety.org/"
              target="_blank"
            >
              The Roxbury Historical Society
            </a>
            .
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
