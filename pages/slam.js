import Link from 'next/link'
import Layout from '@components/Layout'

export default function Slam() {
  return (
    <>
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
          <div className="md:flex items-center my-10">
            <h2 className="font-bold mb-6 md:mb-0 md:text-4xl text-3xl">
              Publisher's Poetry Slam 2026
            </h2>
          </div>
          <div className="border-t border-black md:flex md:pt-20 pt-10">
            <div className="mb-10 md:mb-0 md:mr-20 md:text-3xl md:w-1/3 text-2xl xl:mr-32">
              <p className="mb-6">
                The Poetry Slam returns on June 27, 2026.
              </p>
              <p className="mb-6">
                Registration opens May 1, 2026. Full competition details will
                be announced with the application.
              </p>
              <p className="mb-6 border border-black inline-flex items-center px-5 py-3 rounded-full text-lg">
                Slam registration opens May 1, 2026
              </p>
              <img
                alt="Button Poetry"
                className="w-3/5"
                src="/img/logos/button-poetry.png"
              />
            </div>
            <div className="font-mono md:text-lg md:w-3/4">
              <h3 className="mb-8 md:mb-10 text-4xl md:text-5xl uppercase">
                Details Coming Soon
              </h3>
              <p className="max-w-3xl">
                The 2026 slam lineup, rules, judges, and application process
                are still being finalized. Check back on May 1, 2026 for the
                full announcement and registration details.
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
