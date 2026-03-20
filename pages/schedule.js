import Link from 'next/link'
import Layout from '@components/Layout'

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
        <div className="border-t border-black md:pt-20 pt-10">
          <div className="md:flex md:justify-between md:items-start">
            <div className="md:mr-20 md:w-1/3">
              <p className="mb-6 md:text-3xl text-2xl">June 27, 2026</p>
              <p className="font-mono md:text-lg text-base">
                Registration opens May 1, 2026.
              </p>
            </div>
            <div className="md:w-2/3">
              <h3 className="mb-8 md:text-5xl text-4xl uppercase">
                Full Schedule Coming Soon
              </h3>
              <p className="font-mono md:text-lg text-base">
                The 2026 festival program is still in development. Session
                times, speakers, workshops, and registration details will be
                published here once registration opens on May 1, 2026.
              </p>
              <div className="mt-10">
                <Link href="/2023" legacyBehavior>
                  <a className="border border-black inline-flex items-center px-5 py-3 rounded-full text-lg">
                    View the 2023 Archive
                    <svg className="ml-3" height="12" width="15">
                      <use xlinkHref="#icon-rightarrow" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
