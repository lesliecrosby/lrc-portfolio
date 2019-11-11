import React, { Component } from "react"
// import { css } from "@emotion/core"

// class Hamburgerr extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {isOpen: false};
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState(state => ({
  //     isOpen: !state.isOpen
  //   }));
  // }

//   render() {
//     return (
//       <button
//       className={`hamburger hamburger--collapse hamburger--accessible js-hamburger ${this.state.isOpen ? 'is-active' : ''}`}
//       type="button"
//       onClick={this.handleClick}
//       >
//         <span className="hamburger-box">
//           <span className="hamburger-inner"></span>
//         </span>
//         <span className="hamburger-label">Menu</span>
//       </button>
//     )
//   }
// }

const Hamburger = ({ menuOpen, toggleMenu }) => {
  // const handleMenuClick = e => {
  //   const target = e.target;
  //   const isLink = target.hasAttribute('href');
  //   const isNotMenu = target.classList && target.classList[0].includes('MenuContainer');

  //   if (isLink || isNotMenu) {
  //     toggleMenu();
  //   }
  // };

  return (
    <button
    className={`hamburger hamburger--collapse hamburger--accessible js-hamburger ${this.state.isOpen ? 'is-active' : ''}`}
    type="button"
    onClick={toggleMenu}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
      <span className="hamburger-label">Menu</span>
    </button>
  )
}

export default Hamburger