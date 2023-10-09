import { useState } from "react";
import { TypeHistoricalDate } from "../../api";
import { NumberCrunching } from "../number-crunching";
import styled from "@emotion/styled/macro";

type TypeRoundSliderProps = {
  data: TypeHistoricalDate;
  slide: number;
  setSlide: (slide: number) => void;
};

export const RoundSlider = ({
  data,
  slide,
  setSlide,
}: TypeRoundSliderProps) => {
  const [degree, setDegree] = useState(30);

  const handleClick = (index: number) => {
    setSlide(index);

    const num = slide - index;
    if (Math.abs(num) >= 4) {
      if (num > 0) {
        return setDegree(degree - (6 - Math.abs(num)) * 60);
      } else {
        return setDegree(degree + (6 - Math.abs(num)) * 60);
      }
    }

    setDegree(degree + (slide - index) * 60);
  };

  return (
    <>
      <Container>
        <Dates>
          <StartDate value={data[slide].date.start} />
          <EndDate value={data[slide].date.end} />
        </Dates>

        <Circle>
          <ItemTitle>{data[slide].title}</ItemTitle>

          {data.map((item, i, arr) => {
            const transformDegree = (i * 360) / arr.length + degree;
            return (
              <Item
                key={item.title + i}
                onClick={() => handleClick(i)}
                style={{
                  transform: `rotateZ(${transformDegree}deg)`,
                }}
              >
                <ItemContent
                  className={slide === i ? "active" : ""}
                  style={{
                    transform: `rotateZ(${-transformDegree}deg)`,
                  }}
                >
                  {i + 1}
                </ItemContent>
              </Item>
            );
          })}
        </Circle>
      </Container>
      <NavigationBlock>
        <Count>{`0${slide + 1}/0${data.length}`}</Count>
        <Navigation>
          <ButtonNav
            disabled={slide <= 0}
            onClick={() => {
              setDegree(degree + 60);
              setSlide(slide - 1);
            }}
          >
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                stroke="var(--color-black-blue)"
                strokeWidth="2"
              />
            </svg>
          </ButtonNav>
          <ButtonNav
            disabled={slide >= 5}
            onClick={() => {
              setDegree(degree - 60);
              setSlide(slide + 1);
            }}
          >
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.50012 0.750001L7.75012 7L1.50012 13.25"
                stroke="var(--color-black-blue)"
                strokeWidth="2"
              />
            </svg>
          </ButtonNav>
        </Navigation>
      </NavigationBlock>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 225px;

  :before {
    content: " ";
    background: rgba(var(--color-black-blue-rgb), 0.1);
    width: 100%;
    height: 1px;
    top: 50%;
    position: absolute;
  }

  @media (max-width: 800px) {
    position: static;
    margin-top: 0;
  }
  @media (max-width: 400px) {
    :before {
      display: none;
    }
  }
`;

const Circle = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid rgba(var(--color-black-blue-rgb), 0.2);
  margin: 0 auto;

  @media (max-width: 800px) {
    position: fixed;
    display: flex;
    justify-content: center;
    gap: 4px;
    left: 0;
    bottom: 0;
    border: none;
    width: 100%;
    height: 38px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6px;
  transition: 0.2s;
  width: 6px;
  height: 6px;
  background-color: var(--color-black-blue);
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 800px) {
    transition: initial;
    font-size: 0;
    background-color: rgba(var(--color-black-blue-secondary-rgb), 0.4);
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: absolute;
  top: -28px;
  left: 236px;
  transform-origin: 28px 292px;
  transition: 0.5s;

  .active {
    cursor: auto;
  }

  .active,
  :hover ${ItemContent} {
    width: 56px;
    height: 56px;
    background-color: var(--color-body);
    font-size: 20px;
    border: 1px solid rgba(var(--color-black-blue-secondary-rgb), 0.5);
  }
  @media (max-width: 800px) {
    transition: initial;
    transform-origin: initial;
    position: static;

    width: 16px;
    height: 16px;

    .active,
    :hover ${ItemContent} {
      width: 6px;
      height: 6px;
      background-color: var(--color-black-blue);
      font-size: 0;
    }
  }
`;

const ItemTitle = styled.span`
  position: absolute;
  font-size: 20px;
  left: 442px;
  top: 24px;
  white-space: nowrap;
  font-weight: 700;
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 400px) {
    display: block;
    position: fixed;
    left: 20px;
    top: calc(50vh - 33px);
  }
`;

const StartDate = styled(NumberCrunching)`
  position: absolute;
  font-size: 200px;
  left: 225px;
  top: calc(50% - 100px);
  white-space: nowrap;
  font-weight: 700;
  line-height: 200px;
  color: var(--color-blue);

  @media (max-width: 1440px) {
    left: calc(225px - ((1440px - 100%) / 2));
  }

  @media (max-width: 1000px) {
    font-size: 20vw;
    left: 20px;
  }

  @media (max-width: 800px) {
    position: relative;
  }
  @media (max-width: 400px) {
    font-size: 60px;
  }
`;

const EndDate = styled(NumberCrunching)`
  position: absolute;
  font-size: 200px;
  right: 225px;
  top: calc(50% - 100px);
  white-space: nowrap;
  font-weight: 700;
  line-height: 200px;
  color: var(--color-pink);
  @media (max-width: 1440px) {
    right: calc(225px - ((1440px - 100%) / 2));
  }

  @media (max-width: 1000px) {
    font-size: 20vw;
    right: 20px;
  }

  @media (max-width: 800px) {
    position: relative;
  }
  @media (max-width: 400px) {
    font-size: 60px;
  }
`;

const NavigationBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  gap: 20px;
  @media (max-width: 800px) {
    position: fixed;
    margin-left: 20px;
    left: 0;
    bottom: 20px;
    border: none;
  }
`;

const Navigation = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 800px) {
    gap: 10px;
  }
`;

const ButtonNav = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(var(--color-black-blue-rgb), 0.5);
  background-color: var(--color-body);
  font-size: 30px;
  cursor: pointer;
  :hover:not(:disabled) {
    background-color: #fff;
  }
  :disabled {
    cursor: auto;
    border: 1px solid rgba(var(--color-black-blue-rgb), 0.2);
    path {
      stroke: rgba(var(--color-black-blue-rgb), 0.2);
    }
  }

  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
    svg {
      width: 5px;
    }
  }
`;

const Count = styled.div`
  font-size: 18px;
`;

const Dates = styled.div`
  @media (max-width: 800px) {
    position: static;
    width: 100%;
    height: calc(50vh - 120px);
    display: flex;
    justify-content: space-between;
  }
`;
