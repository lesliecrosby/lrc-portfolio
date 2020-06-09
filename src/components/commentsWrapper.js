import React, { Component } from "react"
import styled from "styled-components"

const OrderedList = styled.ol`
  list-style: none;
  margin-left: 3rem;
  padding-left: 0;
`

class CommentsWrapper extends Component {
  render(props) {
    return (
      <OrderedList>
        {this.props.children}
      </OrderedList>
    )
  }
}

export default CommentsWrapper