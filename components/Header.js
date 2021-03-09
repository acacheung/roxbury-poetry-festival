import Link from "next/link";
import React from "react";
import headerStyles from "./header.module.css";

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
        className={`justify-center md:items-center mx-auto relative text-white w-full ${this.state.navBarActiveClass}`}
      >
        <nav className="flex flex-col flex-grow justify-center">
          <button
            className="absolute focus:outline-none mr-6 mt-6 right-0 top-0"
            onClick={() => this.toggleHamburger()}
          >
            <svg className="fill-current" height="29" width="40">
              <use xlinkHref="#icon-menu" />
            </svg>
          </button>
          <div
            className={
              headerStyles.mainNav + " flex font-bold font-sans hidden"
            }
          >
            <a href="#">About RFP 2021</a>
            <a href="#">See Schedule</a>
            <a href="#">Meet the Speakers</a>
            <a href="#">Register Now</a>
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
          <div>Free virtual poetry festival 06.20.2021</div>
        </div>
      </header>
    );
  }
};

export default Header;
