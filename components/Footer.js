import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-top pb-40 lg:flex mt-32 items-center justify-between max-w-7xl mx-auto px-6 relative text-lg z-30">
      <div className="border-t border-black lg:border-none mb-6 pt-6 lg:mb-0 lg:pt-8">
        © 2023 Roxbury Poetry Festival
      </div>
      <div className="flex flex-col lg:flex-row">
        <Link href="/">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:pt-8">Home</a>
        </Link>
        <Link href="/about">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16">
            About
          </a>
        </Link>
        <Link href="/2021">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16">
            RPF 2021
          </a>
        </Link>
        {/* <Link href="/speakers">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16">
            Speakers
          </a>
        </Link>
        <Link href="/slam">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16">
            Slam
          </a>
        </Link>
        <a
          className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16"
          href="/speakers-book.pdf"
          target="_blank"
        >
          Books
        </a> */}
        <a
          className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16"
          href="https://docs.google.com/forms/d/1dVPr3Ww0Ur5G2nGnzgnr3cw64wqNUdXjsWyIxfFoUAE/edit"
          rel="noreferrer noopener"
          target="_blank"
        >
          Call for Proposals
        </a>
        <a
          className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16"
          href="mailto:roxburypoetryfestival@gmail.com"
          target="_blank"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
