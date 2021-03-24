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
        className={`justify-center md:items-center mx-auto relative z-50 w-full ${this.state.navBarActiveClass}`}
      >
        <nav className="flex flex-col flex-grow justify-center">
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
              headerStyles.mainNav + " flex font-bold font-sans hidden"
            }
          >
            <Link href="/about">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p className={headerStyles.scrollingText}>About RFP 2021</p>
                    <svg className="fill-current mx-4" height="3" width="80">
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p className={headerStyles.scrollingText}>About RFP 2021</p>
                    <svg className="fill-current mx-4" height="3" width="80">
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p className={headerStyles.scrollingText}>About RFP 2021</p>
                    <svg className="fill-current mx-4" height="3" width="80">
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p>About RFP 2021</p>
                    <svg className="fill-current mx-4" height="3" width="80">
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p className={headerStyles.scrollingText}>About RFP 2021</p>
                    <svg className="fill-current mx-4" height="3" width="80">
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p className={headerStyles.scrollingText}>About RFP 2021</p>
                    <svg className="fill-current mx-4" height="3" width="80">
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/schedule">
              <a className={headerStyles.scrollingItem}>
                <div className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p>See Schedule</p>
                    <svg
                      className="fill-current ml-6 mr-4"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p>See Schedule</p>
                    <svg
                      className="fill-current ml-6 mr-4"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p>See Schedule</p>
                    <svg
                      className="fill-current ml-6 mr-4"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p>See Schedule</p>
                    <svg
                      className="fill-current ml-6 mr-4"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className={headerStyles.scrolling}>
                  <div className="flex items-center" href="#">
                    <p>See Schedule</p>
                    <svg
                      className="fill-current ml-6 mr-4"
                      height="3"
                      width="80"
                    >
                      <use xlinkHref="#icon-navline" />
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
            <a href="#" className={headerStyles.scrollingItem}>
              <div className={headerStyles.scrolling}>
                <div className="flex items-center" href="#">
                  <p>Register Now</p>
                  <svg className="fill-current ml-6 mr-4" height="3" width="80">
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center" href="#">
                  <p>Register Now</p>
                  <svg className="fill-current ml-6 mr-4" height="3" width="80">
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center" href="#">
                  <p>Register Now</p>
                  <svg className="fill-current ml-6 mr-4" height="3" width="80">
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center" href="#">
                  <p>Register Now</p>
                  <svg className="fill-current ml-6 mr-4" height="3" width="80">
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className={headerStyles.scrolling}>
                <div className="flex items-center" href="#">
                  <p>Register Now</p>
                  <svg className="fill-current ml-6 mr-4" height="3" width="80">
                    <use xlinkHref="#icon-navline" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </nav>
        <div
          className={
            headerStyles.socialMedia +
            " hidden flex md:justify-between md:max-w-6xl md:w-full items-end"
          }
        >
          <div className="flex mr-5">
            <a
              aria-label="RPF Instagram"
              className="mr-6"
              href="#"
              target="_blank"
            >
              <svg className="fill-current" height="20" width="20">
                <use xlinkHref="#icon-instagram" />
              </svg>
            </a>
            <a
              aria-label="RFP Twitter"
              className="mr-6"
              href="#"
              target="_blank"
            >
              <svg className="fill-current" height="20" width="20">
                <use xlinkHref="#icon-twitter" />
              </svg>
            </a>
            <a aria-label="RFP Facebook" href="#" target="_blank">
              <svg className="fill-current" height="20" width="20">
                <use xlinkHref="#icon-facebook" />
              </svg>
            </a>
          </div>
          <div className="font-mono">
            Free virtual poetry festival June 05, 2021
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
