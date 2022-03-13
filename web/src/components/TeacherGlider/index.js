import React from "react";
import { TeacherGliderStyled, CardsWrappwer } from "./style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const TeacherGlider = ({ teachers }) => {
  console.log(teachers);
  return (
    <TeacherGliderStyled>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {teachers?.map((teacher) => (
          <CardsWrappwer className="card">
            <img src={teacher?.author?.image?.asset?.url} alt={teacher?.name} />
            <h3>{teacher?.author?.name}</h3>
            <h4>@{teacher?.author?.handle}</h4>
            <h5>{teacher?.author?.nationality}</h5>
          </CardsWrappwer>
        ))}
      </Carousel>
    </TeacherGliderStyled>
  );
};