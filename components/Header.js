import Link from 'next/link'
import React from 'react'
import headerStyles from './Header.module.css'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburgerActive: false,
      hamburgerActiveClass: '',
      headerShow: false,
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        hamburgerActive: !this.state.hamburgerActive,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.hamburgerActive
          ? this.setState({
              navBarActiveClass: headerStyles.isActive,
            })
          : this.setState({
              navBarActiveClass: '',
            })
      },
    )
  }

  render() {
    return (
      <header
        className={`justify-center h-6 md:items-center mx-auto relative z-50 w-full ${this.state.navBarActiveClass}`}
      >
        <nav className="flex flex-col md:flex-grow justify-center">
          <button
            aria-label="Toggle Menu"
            className={
              headerStyles.navButton + ' absolute mr-4 mt-4 right-0 top-0'
            }
            onClick={() => this.toggleHamburger()}
          >
            <div className={headerStyles.iconHamburger + ' block'}>
              <svg className="fill-current" height="29" width="40">
                <use xlinkHref="#icon-menu" />
              </svg>
            </div>
            <div className={headerStyles.iconClose + ' hidden'}>
              <svg className="fill-current" height="29" width="40">
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
            <Link href="/about">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RPF</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                {[...Array(6)].map(() => (
                  <div aria-hidden="true" className={headerStyles.scrolling}>
                    <div className="flex items-center">
                      <p>About RPF</p>
                      <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                    </div>
                  </div>
                ))}
              </a>
            </Link>
            <Link href="/schedule">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrollingSpeakers}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                {[...Array(7)].map(() => (
                  <div
                    aria-hidden="true"
                    className={headerStyles.scrollingSpeakers}
                  >
                    <div className="flex items-center">
                      <p>Schedule</p>
                      <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                    </div>
                  </div>
                ))}
              </a>
            </Link>
            {/* <Link href="/speakers">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrollingSpeakers}>
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                {[...Array(7)].map(() => (
                  <div
                    aria-hidden="true"
                    className={headerStyles.scrollingSpeakers}
                  >
                    <div className="flex items-center">
                      <p>Speakers</p>
                      <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                    </div>
                  </div>
                ))}
              </a>
            </Link> */}
            <a
              href="https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317"
              className={headerStyles.scrollingItem}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Register</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
              {[...Array(7)].map(() => (
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Register</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
              ))}
            </a>
            <Link href="/slam">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrollingSpeakers}>
                  <div className="flex items-center">
                    <p>Slam</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                {[...Array(11)].map(() => (
                  <div aria-hidden="true" className={headerStyles.scrolling}>
                    <div className="flex items-center">
                      <p>Slam</p>
                      <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                    </div>
                  </div>
                ))}
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
          <div className="font-mono uppercase mb-6 md:mb-0">August 5, 2023</div>
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
