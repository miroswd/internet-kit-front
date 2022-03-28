import React from "react";
import { Carousel } from "../../components/Carousel";
import { Container, Content } from "./style";

export const Home = () => {

  return (
    <Container className="container">
      <Content>
        <Carousel />
      </Content>
    </Container>
  )
}