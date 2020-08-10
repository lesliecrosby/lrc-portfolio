import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import logo from "../images/logo-lesliecrosby.svg"
import arrow from "../images/arrow-up-right.svg"

import {
  breakpoints,
  colors,
} from "./global-styles"

const HeaderOuter = styled.header`
  position: relative;
  z-index: 100;
`

const HeaderInner = styled.div`
  width: 90%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 1.45rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: left 250ms ease;
  left: ${(props) => props.menuOpen ? '25%' : '100%'};
  background-color: ${colors.darkcoral};

  @media (min-width: ${breakpoints.tablet}) {
    position: static;
    display: block;
    height: auto;
    width: auto;
    background-color: transparent;
  }
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin-bottom: 2rem;
  }

  a {
    color: ${colors.black};
    text-decoration: none;
    padding: 8px 0 8px 2px;
    border-bottom: 1px solid transparent;
    transition: border 200ms ease;

    &:hover,
    &[aria-current="page"],
    &.current {
      color: ${colors.black};
      border-bottom: 1px solid ${colors.coral};
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-end;

    li {
      margin-left: 1.5rem;
      margin-bottom: 0;
    }

    a {
      font-size: 0.75rem;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    li {
      margin-left: 2.5rem;
    }

    a {
      font-size: 0.875rem;
    }
  }
`

const Arrow = styled.img`
  margin-left: 0.25rem;
  vertical-align: middle;
`

const LogoLink = styled(Link)`
  font-size: 1.5rem;
  text-shadow: none;
  text-decoration: none;

  img {
    transition: filter 250ms ease;

    &:hover {
      filter: brightness(1.125);
    }
  }
`

const MenuButton = styled.button`
  &.hamburger {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;

    &:focus {
      outline: none;
    }

    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

const MenuLabel = styled.span`
  margin: 5px 0 0;
  position: relative;
  font-size: 0.8em;
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
    setTimeout( () => this.setState({ isMounted: true }), 100);

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
            <img
              src={ logo }
              alt={ this.props.siteTitle }
              width="176"
            />

          </LogoLink>

          <NavMenu menuOpen={this.state.menuOpen}>
            <NavList>
              <li>
                <h3><Link to="/" activeClassName="current">Home</Link></h3>
              </li>
              <li>
                <h3><Link to="/about-me" activeClassName="current">About Me</Link></h3>
              </li>
              <li>
                <h3><Link to="/projects" activeClassName="current" partiallyActive={true}>Projects</Link></h3>
              </li>
              <li>
                <h3><Link to="/experience" activeClassName="current">Experience</Link></h3>
              </li>
              <li>
                <h3>
                  <a
                    href={this.props.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    >PDF Resume
                    <Arrow
                      src={ arrow }
                      alt="Arrow icon"
                    />
                  </a>
                </h3>
              </li>
            </NavList>
          </NavMenu>

          <MenuButton
          className={`hamburger hamburger--collapse hamburger--accessible js-hamburger ${this.state.menuOpen ? 'is-active' : ''}`}
          type="button"
          onClick={this.toggleMenu}
          >
            <MenuLabel className="hamburger-label">Menu</MenuLabel>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </MenuButton>

        </HeaderInner>
      </HeaderOuter>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header