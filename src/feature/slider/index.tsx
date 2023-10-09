import { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import styled from "@emotion/styled";
import "swiper/css";

type TypeSliderProps = {
  data: { date: number; text: string }[];
};

export const Slider = ({ data }: TypeSliderProps) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});
    gsap.from(el.current, { opacity: 0 });
    gsap.to(el.current, { duration: 2, opacity: 1 });
    return () => ctx.revert();
  }, [data]);

  return (
    <SwiperContainer>
      <SwiperStyled
        ref={el}
        slidesPerView={"auto"}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.map((event, index) => (
          <SwiperSlide key={event.date + index}>
            <Date>{event.date}</Date>
            <Text>{event.text}</Text>
          </SwiperSlide>
        ))}
      </SwiperStyled>
      <div className="swiper-button-prev">
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 11L2 6L7 0.999998" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </div>
      <div className="swiper-button-next">
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </div>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  position: relative;

  .swiper-slide {
    width: 370px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
    border-radius: 50%;
    background-color: #fff;
  }

  .swiper-button-prev {
    top: calc(50% - 20px);
    left: 15px;
  }

  .swiper-button-next {
    top: calc(50% - 20px);
    right: 15px;
  }

  .swiper-button-disabled {
    display: none;
  }

  @media (max-width: 400px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    .swiper-slide {
      width: 70%;
    }

    .swiper-slide-next {
      opacity: 0.4;
    }
  }
`;

const SwiperStyled = styled(Swiper)`
  margin: 56px 80px 0 80px;

  @media (max-width: 800px) {
    position: static;
    margin: 0 20px;
  }

  @media (max-width: 400px) {
    border-top: 1px solid #c7cdd9;

    position: static;
    padding-top: 10px;
    margin: 0 20px;
  }
`;

const Date = styled.span`
  font-family: "BebasNeue-Regular";
  font-size: 25px;
  color: var(--color-blue);
`;

const Text = styled.div`
  margin-top: 15px;
  font-size: 20px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
