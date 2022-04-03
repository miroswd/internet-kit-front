import React from "react";

import { Container, Logo, Description, Text, TextContent, Author } from './style'

import logo from '../../assets/pocket-knife.png'

export const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="web-survival" />
      <TextContent>
        <Text>Web Survival</Text>
        <Description>You need to know this</Description>
        <Author>by

          <a href="https://github.com/miroswd" target="_blank" rel="noreferrer"> Miro</a>

        </Author>
      </TextContent>
    </Container>
  )
};