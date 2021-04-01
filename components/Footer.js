import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-top pb-32 lg:flex mt-32 items-center justify-between max-w-7xl mx-auto px-6 relative text-lg z-30">
      <div className="border-t border-black lg:border-none mb-6 pt-6 lg:mb-0 lg:pt-8">
        © 2021 Roxbury Poetry Festival
      </div>
      <div className="flex flex-col lg:flex-row">
        <Link href="/">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:mr-16 lg:pt-8">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:pt-8">About</a>
        </Link>
      </div>
    </footer>
  );
}
