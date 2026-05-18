import Link from 'next/link'
import { volunteerUrl } from '../lib/volunteer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/slam', label: 'Slam' },
]

const pastEventLinks = [
  { href: '/2021', label: 'RPF 2021' },
  { href: '/2023', label: 'RPF 2023' },
]

export default function Footer() {
  return (
    <footer className="footer-top pb-10 mt-24 max-w-7xl mx-auto px-6 relative z-30">
      <div className="border-t border-black md:border-none pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <Link href="/" aria-label="Roxbury Poetry Festival home">
              <svg className="fill-current w-full max-w-md" height="30" width="615">
                <use xlinkHref="#icon-logo-wide" />
              </svg>
            </Link>
            <p className="font-mono mt-4 text-sm uppercase">June 27, 2026</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <nav aria-label="Footer navigation">
              <p className="font-mono mb-4 text-sm uppercase">
                Explore
              </p>
              <ul className="grid gap-3 text-base md:text-lg">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="underline-offset-4 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Past events">
              <p className="font-mono mb-4 text-sm uppercase">
                Past Events
              </p>
              <ul className="grid gap-3 text-base md:text-lg">
                {pastEventLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="underline-offset-4 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-mono mb-4 text-sm uppercase">
                Connect
              </p>
              <ul className="grid gap-3 text-base md:text-lg">
                <li>
                  <a
                    className="underline-offset-4 hover:underline"
                    href={volunteerUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Volunteer
                  </a>
                </li>
                <li>
                  <a
                    className="underline-offset-4 hover:underline"
                    href="mailto:roxburypoetryfestival@gmail.com"
                    target="_blank"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-black mt-10 pt-5 text-sm leading-relaxed md:flex md:items-start md:justify-between md:gap-10">
          <p className="max-w-3xl">
            Curated by Porsha Olayiwola with sponsorships from The Mayor’s
            Office of Arts &amp; Culture, Words as Worlds, and Northeastern.
          </p>
          <p className="mt-4 md:mt-0 md:whitespace-nowrap">
            © 2026 Roxbury Poetry Festival
          </p>
        </div>
      </div>
    </footer>
  )
}
