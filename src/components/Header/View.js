import React from "react"
import { Link } from "react-router-dom"

import { Header, Left, Right, Nav, Title } from "./styles"

export default () => (
  <Header>
    <Left>
      <Title>Recipe Finder</Title>
      <Nav>
        <Link to="/">Search</Link>
      </Nav>
    </Left>
    <Right>PurePoint</Right>
  </Header>
)
