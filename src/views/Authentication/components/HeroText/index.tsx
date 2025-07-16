import React from "react";
import {
  Container,
  RotatedRectangle,
  Title,
  Line,
  UnderlineContainer,
} from "./styles";

export const Underline = ({ children }) => (
  <UnderlineContainer>
    <Line />
    {children}
  </UnderlineContainer>
);

export const RectangleHighLight = ({ children }) => (
  <UnderlineContainer>
    <RotatedRectangle />
    {children}
  </UnderlineContainer>
);

const HeroText: React.FC = () => {
  return (
    <Container>
      <Title>Find your </Title>
      <RectangleHighLight>
        <Title style={{ color: "white" }}>perfect</Title>
      </RectangleHighLight>
      <Title> </Title>
      <RectangleHighLight>
        <Title style={{ color: "white" }}>spark</Title>
      </RectangleHighLight>
    </Container>
  );
};

export default HeroText;
