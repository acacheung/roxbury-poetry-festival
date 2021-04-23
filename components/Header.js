import Link from "next/link";
import React from "react";
import headerStyles from "./Header.module.css";

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerActive: false,
      hamburgerActiveClass: "",
      headerShow: false,
    };
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
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <header
        className={`justify-center h-6 md:items-center mx-auto relative z-50 w-full ${this.state.navBarActiveClass}`}
      >
        <nav className="flex flex-col md:flex-grow justify-center">
          <button
            aria-label="Toggle Menu"
            className={
              headerStyles.navButton + " absolute mr-4 mt-4 right-0 top-0"
            }
            onClick={() => this.toggleHamburger()}
          >
            <div className={headerStyles.iconHamburger + " block"}>
              <svg className="fill-current" height="29" width="40">
                <use xlinkHref="#icon-menu" />
              </svg>
            </div>
            <div className={headerStyles.iconClose + " hidden"}>
              <svg className="fill-current" height="29" width="40">
                <use xlinkHref="#icon-close" />
              </svg>
            </div>
          </button>
          <div
            className={
              headerStyles.mainNav +
              " flex font-bold font-sans hidden justify-between md:mt-0 mt-28"
            }
          >
            <Link href="/about">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RPF 2021</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RPF 2021</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RPF 2021</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RPF 2021</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RPF 2021</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RPF 2021</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/schedule">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Schedule</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/speakers">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrollingSpeakers}>
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className={headerStyles.scrollingSpeakers}
                >
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className={headerStyles.scrollingSpeakers}
                >
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className={headerStyles.scrollingSpeakers}
                >
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className={headerStyles.scrollingSpeakers}
                >
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className={headerStyles.scrollingSpeakers}
                >
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className={headerStyles.scrollingSpeakers}
                >
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className={headerStyles.scrollingSpeakers}
                >
                  <div className="flex items-center">
                    <p>Speakers</p>
                    <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                  </div>
                </div>
              </a>
            </Link>
            <a
              href="https://www.eventbrite.ca/e/roxbury-poetry-festival-2021-tickets-146513542951"
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
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Register</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Register</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Register</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Register</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Register</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Register</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Register</p>
                  <div className="border-b border-black md:w-10 ml-6 mr-4 w-6" />
                </div>
              </div>
            </a>
          </div>
        </nav>
        <div
          className={
            headerStyles.socialMedia +
            " hidden flex flex-col md:flex-row-reverse md:justify-between md:max-w-7xl md:items-end md:mt-0 md:text-left md:w-full mt-10 px-6 text-center"
          }
        >
          <div className="font-mono uppercase mb-6 md:mb-0">June 05, 2021</div>
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
              </div>{" "}
              gathering
            </div>
            <p className="mt-2 md:mt-0 ml-2">of national and local writers</p>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
