import Link from "next/link";
import Head from "next/head";
import Layout from "@components/Layout";

export default function Contact() {
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
            Contact Us
          </h2>
        </div>
      </Layout>
    </>
  );
}
