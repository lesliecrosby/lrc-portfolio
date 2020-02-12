import React, { Component } from "react"
import styled from "styled-components"
import { colors } from "./global-styles"

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-bottom: 0;
  max-width: 700px;
  & a {
    color: unset;
    background: none;
    text-decoration: none;
  }
  & li {
    background-color: ${colors.white};
    margin-right: 0.75rem;
    padding: 2px 0.45rem;
    border-radius: 4px;
    border: 1px solid ${colors.grey200};
    border-bottom: 2px solid ${colors.sage};
    margin-bottom: 0.5rem;
    &:before {
      content: "#";
      margin-right: 2px;
      font-weight: bold;
      color: ${colors.sage};
    }
  }
`

class TagList extends Component {
  render() {
    return (
      <List>
        {this.props.tags.map(tag => (
          <li key={tag.id}>{tag}</li>
        ))}
      </List>
    )
  }
}

export default TagList