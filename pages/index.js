import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roxbury Poetry Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-6 lg:px-0 w-full">
        <div className="h-screen">
          <div className="max-w-7xl mx-auto">
            <h1 className="flex justify-center mt-32">
              <span className="hidden">Roxbury Poetry Festival</span>
              <svg className="fill-current" height="355" width="668">
                <use xlinkHref="#icon-logo" />
              </svg>
            </h1>
            <div className="font-mono italic mb-32 mt-20 text-center">
              Free virtual poetry festival June 05, 2021
            </div>
            <div className="flex items-center justify-between">
              <div>
                <img
                  alt="Poetry writing book gif"
                  className="w-5/6"
                  src="/img/maingif.gif"
                />
              </div>
              <div className="font-mono max-w-4xl ml-16 text-lg">
                <p className="mb-8">
                  THE ROXBURY POETRY FESTIVAL is a biennial event centering
                  poetry in Roxbury. The Inaugural festival occurs mostly
                  digital with the exception of two closing events. The festival
                  features several award winning writers panelists, and curators
                  and centers a keynote address from 2020 Pulitzer-Prize winning
                  poet, Jericho Brown.
                </p>
                <p>
                  The day-long event culminates with a poetry slam sponsored by
                  Button Poetry that yields a book contract for a local writer
                  and a hip-hop concert highlighting local women.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-0 bg-gray-900 border-t fixed flex h-16 items-center justify-end -ml-6 lg:-ml-0 z-50 w-full">
            <div className="text-3xl uppercase">Register</div>
            <div className="flex ml-4">
              <svg className="fill-current mr-4" height="19" width="20">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
              <svg className="fill-current mr-4" height="19" width="20">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
              <svg className="fill-current mr-4" height="19" width="20">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-14 mt-80">
            <h2 className="font-bold text-4xl">The Speakers</h2>
            <a
              href="/schedule"
              className="border flex items-center px-5 py-3 rounded-full text-lg"
            >
              See the Schedule
              <svg className="fill-current ml-2" height="12" width="15">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </a>
          </div>
          <ul className="gap-x-10 gap-y-20 grid mb-20 md:grid-cols-2 lg:grid-cols-3">
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/amandag.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/amandag.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/amandag.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="speakers-grid">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/amandag.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
