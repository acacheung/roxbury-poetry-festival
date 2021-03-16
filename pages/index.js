import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";
import HeroLogo from "@components/HeroLogo";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roxbury Poetry Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-6 lg:px-0 w-full">
        <div className="md:h-screen">
          <div className="max-w-7xl mx-auto">
            <h1 className="flex justify-center mt-32">
              <span className="hidden">Roxbury Poetry Festival</span>
              <HeroLogo />
            </h1>
            <div className="font-mono italic mb-20 mt-10 md:mb-32 md:mt-20 text-center">
              Free virtual poetry festival June 05, 2021
            </div>
            <div className="md:flex items-center justify-between">
              <div>
                <img
                  alt="Poetry writing book gif"
                  className="w-full"
                  src="/img/maingif.gif"
                />
              </div>
              <div className="font-mono max-w-4xl md:mt-0 md:ml-16 mt-16 text-lg">
                <p className="mb-8">
                  THE ROXBURY POETRY FESTIVAL is a biennial event centering
                  poetry in Roxbury, MA. The inaugural festival occurs mostly
                  digital with the exception of two evening events. The festival
                  features several award winning writers panelists, and curators
                  and centers a keynote address from 2020 Pulitzer-Prize winning
                  poet, Jericho Brown.
                </p>
                <p>
                  The day-long event culminates with a poetry slam sponsored by
                  Button Poetry that yields a book contract for a local writer
                  and a concert highlighting local hip hop artists.
                </p>
              </div>
            </div>
          </div>
          <a
            className="bottom-0 bg-gray-900 border-t border-white fixed h-16 items-center -ml-6 lg:-ml-0 z-50 text-2xl uppercase"
            href="/"
          >
            <div className="flex items-center pt-3 register-wrap">
              <div className="register-banner">
                <div className="flex items-center">
                  <p>Register</p>
                  <svg className="fill-current mx-10" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </div>
              </div>
              <div className="register-banner">
                <div className="flex items-center">
                  <p>Register</p>
                  <svg className="fill-current mx-10" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </div>
              </div>
              <div className="register-banner">
                <div className="flex items-center">
                  <p>Register</p>
                  <svg className="fill-current mx-10" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </div>
              </div>
              <div className="register-banner">
                <div className="flex items-center">
                  <p>Register</p>
                  <svg className="fill-current mx-10" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </div>
              </div>
              <div className="register-banner">
                <div className="flex items-center">
                  <p>Register</p>
                  <svg className="fill-current mx-10" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </div>
              </div>
              <div className="register-banner">
                <div className="flex items-center">
                  <p>Register</p>
                  <svg className="fill-current mx-10" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </div>
              </div>
              <div className="register-banner">
                <div className="flex items-center">
                  <p>Register</p>
                  <svg className="fill-current mx-10" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </div>
              </div>
              <div className="register-banner">
                <div className="flex items-center">
                  <p>Register</p>
                  <svg className="fill-current mx-10" height="12" width="15">
                    <use xlinkHref="#icon-rightarrow" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center justify-between mb-10 md:mb-14 md:mt-80 mt-24">
            <h2 className="font-bold mb-10 md:mb-0 text-4xl">
              Featured Speakers
            </h2>
            <Link href="/speakers">
              <a className="border border-white inline-flex items-center px-5 py-3 rounded-full text-lg">
                See all the Speakers
                <svg className="fill-current ml-2" height="12" width="15">
                  <use xlinkHref="#icon-rightarrow" />
                </svg>
              </a>
            </Link>
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
          </ul>
        </div>
      </div>
    </Layout>
  );
}
