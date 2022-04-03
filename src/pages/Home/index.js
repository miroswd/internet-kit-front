import React from "react";
import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { Container, Content } from "./style";

export const Home = () => {

  return (
    <Container className="container">
      <Header />
      <Content>
        <Carousel />
      </Content>
    </Container>
  )
}