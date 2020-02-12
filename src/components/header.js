import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import {
  breakpoints,
  colors,
  container,
} from "./global-styles"

const HeaderOuter = styled.header`
  position: relative;
  z-index: 100;
  /* overflow: ${(props) => props.menuOpen ? 'visible' : 'hidden' }; */
  /* overflow: ${this.state.menuOpen ? 'visible' : 'hidden'}; */
`

const HeaderInner = styled.div`
  ${container}
  padding: 1.45rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.mobile}) {
    align-items: flex-end;
  }
`

const NavMenu = styled.nav`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  transition: left 250ms ease;
  left: ${(props) => props.menuOpen ? '50%' : '100%'};
  /* left: ${this.state.menuOpen ? '50%' : '100%'}; */
  display: flex;
  background-color: ${colors.lightcoral};
  /* display: ${this.state.menuOpen ? 'flex' : 'none'}; */
  @media (min-width: ${breakpoints.mobile}) {
    display: block;
    position: static;
    height: auto;
    width: auto;
    background-color: transparent;
  }
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  & li {
    margin-left: 1.2rem;
    margin-bottom: 2rem;
  }
  & a {
    text-decoration: none;
  }
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    align-items: flex-end;
    & li {
      margin-bottom: 0;
    }
  }
`

const LogoLink = styled(Link)`
  font-size: 1.5rem;
  text-shadow: none;
  text-decoration: none;
`

const Hamburger = styled.button`
  display: flex;
  /* TODO: GET RID OF THIS IMPORTANT! ! */
  @media (min-width: ${breakpoints.mobile}) {
    display: none !important;
  }
`

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      menuOpen: false,
      isMounted: false,
    };
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
      <HeaderOuter menuOpen={this.state.menuOpen}>
        <HeaderInner>

          <LogoLink to="/">
            { this.props.siteTitle }
          </LogoLink>

          <NavMenu menuOpen={this.state.menuOpen}>
            <NavList>
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <a
                  href={this.props.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  >PDF Resume</a>
              </li>
            </NavList>
          </NavMenu>

          <Hamburger
          className={`hamburger hamburger--collapse hamburger--accessible js-hamburger ${this.state.menuOpen ? 'is-active' : ''}`}
          type="button"
          onClick={this.toggleMenu}
          >
            <span className="hamburger-label">Menu</span>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </Hamburger>

        </HeaderInner>
      </HeaderOuter>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header