import React, { Component } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import {
  colors,
  } from "../components/global-styles"
import Desktop from "./desktop"

class Card extends Component {
  render() {
    return (
      <article
        css={css`
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
              display: flex;
              justify-content: center;
              align-items: flex-start;
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
          {/* <TagList tags={this.props.tags} /> */}
          <ul
            css={css`

            `}
          >
            {this.props.tags.map(tag => (
              <li key={tag.id}>{tag}</li>
            ))}
          </ul>
        </section>
      </article>
    )
  }
}

export default Card