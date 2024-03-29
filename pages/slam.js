import Link from "next/link";
import Layout from "@components/Layout";

export default function Slam() {
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
          <div className="md:flex items-center my-10">
            <h2 className="font-bold mb-6 md:mb-0 md:text-4xl text-3xl">
              Publisher's Poetry Slam 2023
            </h2>
          </div>
          <div className="border-t border-black md:flex md:pt-20 pt-10">
            <div className="mb-10 md:mb-0 md:mr-20 md:text-3xl md:w-1/3 text-2xl xl:mr-32">
              <p className="mb-6">
                The Poetry Slam is taking place at the Bruce C Bolling Building on August 5, 2023 from 7pm-9pm.
              </p>
              <p className="mb-6">
                Registration for the Poetry Slam will close August 1st 2023.
              </p>
              <a href="https://cityofbostonartsandculture.submittable.com/submit/267464/rox-poetry-festival-publishers-poetry-slam-2023" target="_blank" rel="noreferrer noopener" className="mb-6 border border-black inline-flex items-center px-5 py-3 rounded-full text-lg">
                Register to compete
                <svg className="ml-3" height="12" width="15">
                  <use xlinkHref="#icon-rightarrow" />
                </svg>
              </a>
              <img
                alt="Button Poetry"
                className="w-3/5"
                src="/img/logos/button-poetry.png"
              />
            </div>
            <div className="font-mono md:text-lg md:w-3/4">
              <h3 className="mb-8 md:mb-10 text-4xl md:text-5xl uppercase">
                Rules & Guidelines
              </h3>
              <ul className="list-disc list-outside pl-6">
                <li className="pl-6 mb-8">
                  10 poets will compete in three rounds. Poets must perform original work and can not use props, costume changes, or any musical accompaniment outside of their voice. Each poet will have 3 minutes and a 10 second grace period. There will be a half point time penalty for every 10 seconds over time limit.
                </li>
                <ul className="pl-6">
                  <li className="mb-6">
                    <span className="font-bold">Round 1:</span> 10 poets with
                    random draw
                  </li>
                  <li className="mb-6">
                    <span className="font-bold">Round 2:</span> 7 poets,
                    organized high to low
                  </li>
                  <li className="mb-10">
                    <span className="font-bold">Final Round:</span> 3 poets,
                    random draw from stage
                  </li>
                </ul>
                <li className="pl-6 mb-10">
                  Judges are TBD. Poem and performance will be judged on a scale
                  of 1-10 based on written craft and performance and delivery.
                </li>
                <li className="pl-6">
                  Winner will receive a chapbook deal from Button Poetry along
                  with supporting resources to write their book.
                </li>
              </ul>
              <div className="my-10">
                <h3 className="border-b border-black font-bold mb-6">
                  Hosted By Harlym 125
                </h3>
                <div className="slam-bio md:flex">
                  <img
                    alt="Harlym 125"
                    className="w-full h-full mb-4 md:w-1/3"
                    src="/img/speakers/harlym125.jpg"
                  />
                  <p className="font-mono md:ml-6 md:text-lg md:w-2/3">
                    <details className="font-mono text-lg">
                      Known for his work, Harlym 1Two5 is often asked to be a
                      panelist or to give presentations on a broad range of
                      topics regarding diversity and pluralism, and also is
                      asked to prepare presentations in response to very
                      specific incidents or conditions. Appearing at dozens of
                      college campuses every year. He is the "HUMAN HIGHLIGHT OF
                      POETRY AND EDU-ACTIVISM."
                      <summary className="focus:outline-none textWrap">
                        1Two5 remains well known nationally and in multitudes
                        poetry circles. Known as Harlym 125, He is a frequent
                        and highly regarded figure in competitions, performance,
                        concert and beyond. 125 has become a part of the Boston
                        area poetry scene and joined teams of poets who have won
                        numerous competitions regionally and nationally. 125 has
                        also become well known in the Boston area for his work
                        leading workshops dealing with issues of diversity,
                        equity and inclusion. Several times in the last couple
                        of years, Harlym has been called to local high schools,
                        colleges and communities to help bring a calm and
                        constructive unity after incidents of racial injustice
                        have occurred.
                      </summary>
                    </details>
                  </p>
                </div>
              </div>
              {/* <div className="my-10">
                <h3 className="border-b border-black font-bold mb-6">
                  Bout Manager - Michelle Garcia Fresco
                </h3>
                <div className="slam-bio md:flex">
                  <img
                    alt="Michelle Garcia Fresco"
                    className="w-full h-full mb-4 md:w-1/3"
                    src="/img/speakers/michelle-garcia-fresco.jpg"
                  />
                  <p className="font-mono md:ml-6 md:text-lg md:w-2/3">
                    <p className="font-mono text-lg">
                      Michelle Garcia Fresco is an Dominican poet, performer,
                      and teaching artist based in Boston. She is currently a
                      Senior at the University of Massachusetts Lowell, double
                      majoring in Creative Writing and Sociology. Believing in
                      the power of poetry as a medium for social justice.
                      Garcia`s writing is often inspired by the women in her
                      family, social and racial injustices in America, coping
                      with loss and mental health, as well as her Dominican
                      roots. Her work has appeared in <em>Wbur/The Artery</em>,{" "}
                      <em>Tinderbox Poetry</em>, and <em>the Rising Phoenix</em>
                      . She is also the winner of{" "}
                      <em>Stirling Spoon's “2020: Identity in America”</em>
                      contest, chosen by Richard Blanco, former US Inaugural
                      Poet and author.
                    </p>
                  </p>
                </div>
            </div> */}
            </div>
          </div>

          <p className="max-w-4xl lg:text-5xl md:mt-20 md:mb-24 md:text-4xl my-12 mx-auto text-2xl text-center">
            The Poetry Slam will be filmed and published by{" "}
            <a
              className="underline"
              href="https://buttonpoetry.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Button Poetry
            </a>
          </p>
          {/* <img
            alt="Poetry Slam Flyer"
            className="flex max-w-4xl md:mb-20 mx-auto w-full"
            src="/img/slam-flyer.jpg"
          /> */}
        </div>
      </Layout >
    </>
  );
}
