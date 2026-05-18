import Link from 'next/link'
import Layout from '@components/Layout'

export default function Slam() {
  return (
    <>
      <Layout>
        <div className="max-w-7xl mx-auto px-6 w-full mb-28 md:mb-44">
          <Link href="/" legacyBehavior>
            <a className="hidden md:flex h-32 items-center justify-center">
              <h1 className="hidden">Roxbury Poetry Festival</h1>
              <svg className="fill-current" height="30" width="615">
                <use xlinkHref="#icon-logo-wide" />
              </svg>
            </a>
          </Link>
          <div className="md:flex items-center my-10">
            <h2 className="font-bold mb-6 md:mb-0 md:text-4xl text-3xl">
              Publisher's Poetry Slam 2026
            </h2>
          </div>
          <div className="border-t border-black md:flex md:pt-20 pt-10">
            <div className="mb-10 md:mb-0 md:mr-20 md:text-3xl md:w-1/3 text-2xl xl:mr-32">
              <p className="mb-6">
                Submissions close on June 15, 2026 at 11:59pm.
              </p>
              <a
                className="bg-[#d8f4ff] border border-black font-bold hover:bg-[#f3e7ff] hover:shadow-[3px_3px_0_#6fc7b5] hover:-translate-y-0.5 inline-flex rounded-full mb-10 py-3 px-5 text-lg items-center shadow-[6px_6px_0_#ff8f70] transition uppercase"
                href="https://forms.gle/2UkDeqe7tzpx2PYH8"
                rel="noreferrer noopener"
                target="_blank"
              >
                <p>Submit to compete</p>
                <svg className="fill-current ml-2" height="12" width="15">
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
                Slam Details
              </h3>
              <p className="max-w-3xl mb-6">
                The Publisher’s Poetry Slam consists of an online submission
                process that requires poets to submit a manuscript. Ten poets
                will be selected to compete at the Roxbury Poetry Festival.
                Poets are to perform original work without the use of props,
                costumes or musical accompaniment. Poets should remain within
                the time limit designated for each round. The winning poet will
                have a chapbook published by Button Poetry!
              </p>
              <p className="max-w-3xl">
                Submissions close on June 15, 2026 at 11:59pm. Selected poets
                will be notified by June 16, 2026.
              </p>
            </div>
          </div>

          <p className="max-w-4xl lg:text-5xl md:mt-20 md:mb-24 md:text-4xl my-12 mx-auto text-2xl text-center">
            The Poetry Slam will be presented in partnership with{' '}
            <a
              className="underline"
              href="https://buttonpoetry.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Button Poetry
            </a>
          </p>
        </div>
      </Layout>
    </>
  )
}
