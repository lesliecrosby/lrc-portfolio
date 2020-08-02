import React, { Component } from "react"
import parse from "html-react-parser"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  breakpoints,
  colors,
  } from "./global-styles"
import base from "../images/base.svg"

const ProjectItem = styled.article`
  min-height: 100vh;
  background-color: ${colors.darkcoral};
  padding: 80px 0;
  overflow: hidden;

  @media (min-width: ${breakpoints.mobile}) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`

const ProjectPreview = styled.section`
  width: 100%;
`

const ProjectLink = styled(Link)`
  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Desktop = styled.div`
  position: relative;
  left: -10%;
  overflow: hidden;
  width: 90%;
  height: auto;
  padding-top: 56.25%;
  background-color: ${colors.gray800};
  border: 2vw solid ${colors.gray800};
  border-radius: 1rem;
  z-index: 1;

   @media (min-width: ${breakpoints.mobile}) {
    width: 80%;
    padding-top: 50%;
    left: auto;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 60%;
    padding-top: 37.5%;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 50%;
    padding-top: 31.25%
  }
`

const DesktopBase = styled.img`
  position: relative;
  width: 33.33%;
  top: -3vw;
  margin-bottom: -3vw;
  left: 17.5%;

  @media (min-width: ${breakpoints.mobile}) {
    /* width: 22.5%; */
    width: 30%;
    left: auto;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 22.5%;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 18.75%;
  }
`

const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const ProjectInfo = styled.section`
  padding: 2rem 7.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .button {
    background-color: ${colors.gray800};
    border-bottom: 4px solid ${colors.black};
    &:hover {
      background-color: ${colors.black};
      border-bottom: 4px solid ${colors.gray800};
    }
  }

  @media (min-width: ${breakpoints.mobile}) {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    padding: 2rem 10% 2rem 12.5%;
    display: flex;
    z-index: 1;
  }
`

const TagList = styled.ul`
  list-style: none;
  padding-left: 0;
`

class ProjectSlide extends Component {
  render() {
    return (
      <ProjectItem>
        <ProjectPreview>
          <ProjectLink to={this.props.target}>
            {this.props.children}

            <Desktop>
              <ImageWrap>
                <Img
                  alt={this.props.imageAlt}
                  fluid={this.props.image}
                />
              </ImageWrap>
            </Desktop>

            <DesktopBase
              src={base}
              alt="desktop base illustration"
            />
          </ProjectLink>
        </ProjectPreview>

        <ProjectInfo>
          <h2 className="h4">
            {this.props.title}
          </h2>
          <div>{ parse(this.props.description) }</div>
          <TagList>
            {this.props.tags.map(({tag}, i) => (
              <li key={i}>{tag}</li>
            ))}
          </TagList>
          <Link to={this.props.target} className="button button--sm">View Project</Link>
        </ProjectInfo>
      </ProjectItem>
    )
  }
}

export default ProjectSlide