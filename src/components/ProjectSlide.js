import React, { Component } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import {
  breakpoints,
  colors,
  } from "./global-styles"
import Desktop from "./desktop"
import base from "../images/base.svg"

class ProjectSlide extends Component {
  render() {
    return (
      <article
        css={css`
          height: 100vh;
          background-color: ${colors.dusk};
          padding: 80px 0;
          @media (min-width: 650px) {
            display: flex;
            /* height: 100vh; */
            position: relative;
          }
        `}
      >
        <section
          css={css`
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          `}
        >
          <Link
            to={this.props.target}
            css={css`
              flex: 1 1 auto;
            `}
          >
            {this.props.children}
            <Desktop imageAlt={this.props.imageAlt} image={this.props.image} />
            <img
              src={base}
              alt="desktop base illustration"
              css={css`
                width: 33.33%;
                position: relative;
                top: -3vw;
                left: 10%;
                @media (min-width: ${breakpoints.mobile}) {
                  width: 30%;
                  left: 0;
                }
              `}
            />
          </Link>

        </section>
        <section
          css={css`
            padding: 2rem 7.5%;
            display: flex;
            flex-direction: column;
            justify-items: center;
            color: ${colors.white};
            @media (min-width: 650px) {
              position: absolute;
              width: 50%;
              height: 100%;
              top: 0;
              right: 0;
              background-color: ${colors.lightdusk}70;
              padding: 2rem 10% 2rem 12.5%;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              z-index: 1;
            }
          `}
        >
          <h2 className="h6">
            <Link
              to={this.props.target}
              css={css`
                text-decoration: none;
              `}
              href="#"
            >
              {this.props.title}
            </Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
          <ul
            css={css`
              list-style: none;
              padding-left: 0;
            `}
          >
            {this.props.tags.map(({tag}, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        </section>
      </article>
    )
  }
}

export default ProjectSlide