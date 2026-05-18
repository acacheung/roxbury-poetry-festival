import Link from 'next/link'
import { volunteerUrl } from '../lib/volunteer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/slam', label: 'Slam' },
  { href: '/2021', label: 'RPF 2021' },
  { href: '/2023', label: 'RPF 2023' },
]

export default function Footer() {
  return (
    <footer className="footer-top pb-10 lg:flex mt-24 gap-10 items-start justify-between max-w-7xl mx-auto px-6 relative text-base md:text-lg z-30">
      <div className="border-t border-black lg:border-none mb-8 pt-6 lg:mb-0 lg:pt-8 lg:whitespace-nowrap">
        © 2026 Roxbury Poetry Festival
      </div>
      <nav aria-label="Footer navigation" className="lg:flex-1 lg:pt-8">
        <ul className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:gap-x-8 lg:gap-y-4 lg:justify-end">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="underline-offset-4 hover:underline whitespace-nowrap">
                {link.label}
              </Link>
            </li>
          ))}
        {/* <Link href="/about" className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16">
        About
        </Link> */}
        {/*}
        <a
          className="speakers-grid mb-6 pt-6 lg:mb-0 lg:ml-10 lg:pt-8 xl:ml-16"
          href="/speakers-book.pdf"
          target="_blank"
        >
          Books
        </a> */}
          <li>
            <a
              className="underline-offset-4 hover:underline whitespace-nowrap"
              href={volunteerUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Volunteer
            </a>
          </li>
          <li>
            <a
              className="underline-offset-4 hover:underline whitespace-nowrap"
              href="mailto:roxburypoetryfestival@gmail.com"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
