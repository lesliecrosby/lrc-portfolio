import React, { Component } from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { css } from "@emotion/core"

// import Hamburger from "./hamburger"
import {
  breakpoints,
  // colors,
  container,
  // fonts
  } from "../components/global-styles"

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      isMounted: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    setTimeout( () => this.setState({ isMounted: true}), 100);

    window.addEventListener('resize', () => this.handleResize());
  }

  toggleMenu() {
    this.setState( state => ({
      menuOpen: !state.menuOpen
    }));
  }

  handleResize() {
    if (window.innerWidth > 650 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  render() {
    return (
      <header
        css={css`
          position: relative;
          z-index: 100;
          overflow: ${this.state.menuOpen ? 'visible' : 'hidden'};
        `}
      >
        <div
          css={css`
          ${container}
          padding: 1.45rem 0;
          display: flex;
          justify-content: space-between;

          @media (min-width: ${breakpoints.mobile}) {
            justify-content: space-between;
          }
        `}
        >
          <div>
            <Link
              to="/"
              css={css`
                font-size: 1.5rem;
                text-shadow: none;
                text-decoration: none;
              `}
            >
              { this.props.siteTitle }
              {/* Leslie R Crosby */}
            </Link>
          </div>

          <nav
            css={css`
              position: absolute;
              top: 0;
              width: 50%;
              height: 100vh;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background: white;
              transition: left 250ms ease;
              left: ${this.state.menuOpen ? '50%' : '100%'};
              display: flex;
              /* display: ${this.state.menuOpen ? 'flex' : 'none'}; */
              @media (min-width: ${breakpoints.mobile}) {
                display: block;
                position: static;
                height: auto;
                width: auto;
              }
            `}
          >
            <ul
              css={css`
                list-style: none;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 0;
                margin: 0;
                & li {
                  margin-left: 1rem;
                  margin-bottom: 0;
                }
                & a {
                  text-decoration: none;
                }
                @media (min-width: ${breakpoints.mobile}) {
                  flex-direction: row;
                }
              `}
            >
              <li>
                <Link to="/about-me/">About</Link>
              </li>
              <li>
                <Link to="/projects/">Projects</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
            </ul>
          </nav>

          <button
          className={`hamburger hamburger--collapse hamburger--accessible js-hamburger ${this.state.menuOpen ? 'is-active' : ''}`}
          type="button"
          onClick={this.toggleMenu}
          css={css`
            display: flex;
            @media (min-width: ${breakpoints.mobile}) {
              display: none;
            }
          `}
          >
            <span className="hamburger-label">Menu</span>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          {/* <Hamburger menuOpen={menuOpen} toggleMenu={this.toggleMenu} /> */}

        </div>
      </header>
    )
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
