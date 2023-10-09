import { useState } from "react";
import { historicalDate } from "../api";
import { RoundSlider } from "../feature/round-slider";
import { Slider } from "../feature/slider";
import styled from "@emotion/styled";
import "./styles/index.css";

function App() {
  const [slide, setSlide] = useState(0);

  return (
    <Container>
      <BlockTitle>
        <Title>Исторические даты</Title>
      </BlockTitle>
      <RoundSlider data={historicalDate} slide={slide} setSlide={setSlide} />
      <Slider data={historicalDate[slide].event} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: calc((100% - 1440px) / 3);

  border: 1px solid rgba(var(--color-black-blue-rgb), 0.1);

  :before {
    content: " ";
    background: rgba(var(--color-black-blue-rgb), 0.1);
    width: 1px;
    height: 100%;
    right: 50%;
    position: absolute;
  }

  @media (max-width: 1440px) {
    margin: auto;
  }
  @media (max-width: 400px) {
    :before {
      display: none;
    }
  }
`;

const BlockTitle = styled.div`
  position: absolute;
  top: 177px;
  height: 120px;
  border-left: 5px solid;
  border-image: linear-gradient(var(--color-blue), var(--color-pink));
  border-image-slice: 1;
  width: min-content;
  padding-left: 78px;

  @media (max-width: 800px) {
    position: static;
    padding-left: 20px;
    margin-top: 60px;
  }

  @media (max-width: 400px) {
    border: none;
    height: 60px;
  }
`;

const Title = styled.span`
  font-size: 56px;
  font-weight: 700;
  line-height: 56px;
  @media (max-width: 400px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
