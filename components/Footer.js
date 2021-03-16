import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-top mb-32 lg:flex mt-20 items-center justify-between max-w-7xl mx-auto relative text-lg z-30">
      <div className="border-t border-black lg:border-none mb-6 pt-6 lg:mb-0 lg:pt-8">
        © 2021 Roxbury Poetry Festival
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-16">
        <Link href="/">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:pt-8">Home</a>
        </Link>
        <Link href="/about">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:pt-8">About</a>
        </Link>
        <Link href="/schedule">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:pt-8">Schedule</a>
        </Link>
        <Link href="/speakers">
          <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:pt-8">Speakers</a>
        </Link>
        <a className="speakers-grid mb-6 pt-6 lg:mb-0 lg:pt-8">Register</a>
      </div>
    </footer>
  );
}
