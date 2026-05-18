import Link from 'next/link'
import React from 'react'
import { registrationLabel, registrationUrl } from '../lib/registration'
import { volunteerUrl } from '../lib/volunteer'
import headerStyles from './Header.module.css'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburgerActive: false,
    }
  }

  toggleHamburger = () => {
    this.setState((state) => ({
      hamburgerActive: !state.hamburgerActive,
    }))
  }

  renderMarqueeGroup(label, repeat, itemClassName, groupIndex) {
    return (
      <span className={headerStyles.scrollingGroup}>
        {Array.from({ length: repeat }).map((_, index) => (
          <span
            aria-hidden="true"
            className={itemClassName}
            key={`${label}-${groupIndex}-${index}`}
          >
            <span className="flex items-center">
              <span>{label}</span>
              <span
                className={`${headerStyles.navLine} border-b border-black md:w-10 ml-6 mr-4 w-6`}
              />
            </span>
          </span>
        ))}
      </span>
    )
  }

  renderMarquee(
    label,
    repeat,
    itemClassName = headerStyles.scrolling,
    duration = '72s'
  ) {
    return (
      <span
        className={headerStyles.scrollingTrack}
        style={{ '--marquee-duration': duration }}
      >
        {this.renderMarqueeGroup(label, repeat, itemClassName, 0)}
        {this.renderMarqueeGroup(label, repeat, itemClassName, 1)}
      </span>
    )
  }

  render() {
    return (
      <header
        className={`justify-center h-6 md:items-center mx-auto relative z-50 w-full ${
          this.state.hamburgerActive ? headerStyles.isActive : ''
        }`}
      >
        <nav className="flex flex-col md:flex-grow justify-center">
          <button
            aria-expanded={this.state.hamburgerActive}
            aria-label={
              this.state.hamburgerActive
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            className={`${headerStyles.navButton} absolute mr-6 mt-6 right-0 top-0`}
            onClick={this.toggleHamburger}
            type="button"
          >
            <div className={`${headerStyles.iconHamburger} block`}>
              <svg aria-hidden="true" className="fill-current" height="29" width="40">
                <use xlinkHref="#icon-menu" />
              </svg>
            </div>
            <div className={`${headerStyles.iconClose} hidden`}>
              <svg aria-hidden="true" className="fill-current" height="29" width="40">
                <use xlinkHref="#icon-close" />
              </svg>
            </div>
          </button>
          <div
            className={
              headerStyles.mainNav +
              ' flex font-bold font-sans hidden justify-between md:mt-0 mt-28'
            }
          >
            <Link href="/schedule" legacyBehavior>
              <a aria-label="Schedule" className={headerStyles.scrollingItem}>
                {this.renderMarquee(
                  'Schedule',
                  10,
                  headerStyles.scrollingSpeakers,
                  '150s'
                )}
              </a>
            </Link>
            <Link href="/speakers" legacyBehavior>
              <a aria-label="Speakers" className={headerStyles.scrollingItem}>
                {this.renderMarquee(
                  'Speakers',
                  10,
                  headerStyles.scrollingSpeakers,
                  '150s'
                )}
              </a>
            </Link>
            <a
              aria-label="Register for Roxbury Poetry Festival"
              className={headerStyles.scrollingItem}
              href={registrationUrl}
              rel="noreferrer noopener"
              target="_blank"
            >
              {this.renderMarquee(
                registrationLabel,
                10,
                headerStyles.scrolling,
                '190s'
              )}
            </a>
            <a
              aria-label="Volunteer for Roxbury Poetry Festival"
              className={headerStyles.scrollingItem}
              href={volunteerUrl}
              rel="noreferrer noopener"
              target="_blank"
            >
              {this.renderMarquee(
                'Volunteer',
                10,
                headerStyles.scrollingSpeakers,
                '150s'
              )}
            </a>
            <Link href="/slam" legacyBehavior>
              <a aria-label="Slam" className={headerStyles.scrollingItem}>
                {this.renderMarquee(
                  'Slam',
                  16,
                  headerStyles.scrollingSpeakers,
                  '150s'
                )}
              </a>
            </Link>
            {/* <a
              href="https://docs.google.com/forms/d/1dVPr3Ww0Ur5G2nGnzgnr3cw64wqNUdXjsWyIxfFoUAE/edit"
              className={headerStyles.scrollingItem}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Call for Proposals</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
              {[...Array(7)].map(() =>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Call for Proposals</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
              )}
            </a> */}
          </div>
        </nav>
        <div
          className={
            headerStyles.socialMedia +
            ' hidden flex flex-col md:flex-row-reverse md:justify-between md:max-w-7xl md:items-end md:mt-0 md:text-left md:w-full mt-10 px-6 text-center'
          }
        >
          <div className="font-mono uppercase mb-6 md:mb-0">June 27, 2026</div>
          <div className="font-mono md:flex items-start">
            <div className="flex md:justify-start justify-center">
              A
              <div className="border-b border-black italic md:mx-4 mx-2 relative text-center w-32">
                <div className="scroll-words">vital</div>
                <div className="scroll-words">joyful</div>
                <div className="scroll-words">lively</div>
                <div className="scroll-words">riveting</div>
                <div className="scroll-words">experimental</div>
                <div className="scroll-words">futuristic</div>
                <div className="scroll-words">curious</div>
              </div>{' '}
              gathering
            </div>
            <p className="mt-2 md:mt-0 ml-2">of national and local writers</p>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
