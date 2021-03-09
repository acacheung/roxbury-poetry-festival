import Link from "next/link";
import Head from "next/head";
import Layout from "@components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roxbury Poetry Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-6 md:px-0 w-full">
        <div className="h-screen">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl text-center">Roxbury Poetry Festival</h1>
            <div className="italic mb-32 mt-20 text-center">
              Free virtual poetry festival 06.20.2021
            </div>
            <div className="flex items-center justify-between">
              <div>
                <img alt="Poetry writing book gif" src="/img/gif.png" />
              </div>
              <p className="font-mono max-w-4xl">
                THE ROXBURY POETRY FESTIVAL is a free one-day virtual
                experience. Part conference, part competition – the festival
                will be a combination of talks and workshops by prominent change
                makers, and actionable briefs tackling the world’s most urgent
                and systemic issues. Join in and use your skills to invent,
                code, plan, create, design or build a solution with support from
                our community members and experts.
              </p>
            </div>
          </div>
          <div className="bottom-0 bg-gray-900 border-b border-t fixed flex h-16 items-center justify-end w-full">
            <div className="text-3xl uppercase">Register</div>
            <div className="flex">
              <svg className="fill-current" height="19" width="20">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
              <svg className="fill-current" height="19" width="20">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
              <svg className="fill-current" height="19" width="20">
                <use xlinkHref="#icon-rightarrow" />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between mb-14 mt-20">
            <h2 className="font-bold text-4xl">The Speakers</h2>
            <div className="border">See all Speakers</div>
          </div>
          <ul className="gap-x-10 grid md:grid-cols-2 lg:grid-cols-3">
            <li className="border-t">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="border-t">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
              <p className="font-mono mt-6 text-lg">
                Black, futurist, poet, dyke, hip-hop feminist, womanist: Porsha
                is a native of Chicago who now resides in Boston.
              </p>
            </li>
            <li className="border-t">
              <h3 className="mb-4 mt-8 text-5xl uppercase">Porsha Olayiwola</h3>
              <p className="mb-8 text-lg">Black, Futurist, Poet</p>
              <img alt="Porsha Olayiwola" src="/img/porsha.jpg" />
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
