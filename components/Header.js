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
            className="absolute focus:outline-none mr-6 mt-6 right-0 top-0"
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
              " flex font-bold font-sans hidden justify-between mt-20"
            }
          >
            <Link href="/about">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RFP 2021</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RFP 2021</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RFP 2021</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RFP 2021</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RFP 2021</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>About RFP 2021</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/slam">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Poetry Slam</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Poetry Slam</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Poetry Slam</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Poetry Slam</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Poetry Slam</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Poetry Slam</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center">
                    <p>Poetry Slam</p>
                    <svg
                      className="fill-current ml-6 mr-4 w-10"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
            <div className={headerStyles.scrollingItem}>
              <div className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Schedule (coming soon!)</p>
                  <svg
                    className="fill-current ml-6 mr-4 w-10"
                    height="3"
                    width="80"
                  >
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Schedule (coming soon!)</p>
                  <svg
                    className="fill-current ml-6 mr-4 w-10"
                    height="3"
                    width="80"
                  >
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Schedule (coming soon!)</p>
                  <svg
                    className="fill-current ml-6 mr-4 w-10"
                    height="3"
                    width="80"
                  >
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Schedule (coming soon!)</p>
                  <svg
                    className="fill-current ml-6 mr-4 w-10"
                    height="3"
                    width="80"
                  >
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center">
                  <p>Schedule (coming soon!)</p>
                  <svg
                    className="fill-current ml-6 mr-4 w-10"
                    height="3"
                    width="80"
                  >
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={
            headerStyles.socialMedia +
            " hidden flex flex-col md:flex-row md:justify-between md:max-w-7xl md:items-end md:mt-0 md:text-left md:w-full mt-20 px-6 text-center"
          }
        >
          <div className="font-mono mb-6">
            A vital gathering of national and local writers
          </div>
          <div className="font-mono">June 05, 2021</div>
        </div>
      </header>
    );
  }
};

export default Header;
