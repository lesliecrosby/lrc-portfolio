import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  breakpoints,
  colors,
  } from "./global-styles"
// import Desktop from "./Desktop"
import base from "../images/base.svg"

const ProjectItem = styled.article`
  height: 100vh;
  background-color: ${colors.dusk};
  padding: 80px 0;
  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    /* height: 100vh; */
    position: relative;
  }
`

const ProjectPreview = styled.section`
  width: 100%;
  /* display: flex; */
  /* justify-content: flex-start; */
  /* align-items: center; */

  /* & > a {
    flex: 1 1 auto;
  } */
`

const Desktop = styled.div`
  width: 90%;
  height: auto;
  padding-top: 56.25%;
  background-color: ${colors.grey800};
  border: 2vw solid ${colors.grey800};
  border-radius: 1rem;
  position: relative;
  left: -10%;
  overflow: hidden;
  z-index: 1;
  @media (min-width: ${breakpoints.mobile}) {
    width: 80%;
    padding-top: 50%;
    left: -20%;
  }
`

const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const PreviewImage = styled.img`
  width: 33.33%;
  position: relative;
  top: -3vw;
  margin-bottom: -3vw;
  left: 10%;
  @media (min-width: ${breakpoints.mobile}) {
    width: 30%;
    left: 0;
  }
`

const ProjectInfo = styled.section`
  padding: 2rem 7.5%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: ${colors.white};
  @media (min-width: ${breakpoints.mobile}) {
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
          <Link to={this.props.target}>
            {this.props.children}
            {/* <Desktop imageAlt={this.props.imageAlt} image={this.props.image} /> */}

            <Desktop>
              <ImageWrap>
                <Img
                  alt={this.props.imageAlt}
                  fluid={this.props.image}
                />
              </ImageWrap>
            </Desktop>

            <PreviewImage
              src={base}
              alt="desktop base illustration"
            />
          </Link>
        </ProjectPreview>

        <ProjectInfo>
          <h2 className="h6">
            <Link to={this.props.target}>
              {this.props.title}
            </Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
          <TagList>
            {this.props.tags.map(({tag}, i) => (
              <li key={i}>{tag}</li>
            ))}
          </TagList>
        </ProjectInfo>
      </ProjectItem>
    )
  }
}

export default ProjectSlide