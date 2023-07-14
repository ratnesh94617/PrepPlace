import React from "react";
import { Carousel } from "react-bootstrap";
import b1 from "../../images/banner1.png";
import b2 from "../../images/banner2.png";
import b3 from "../../images/banner3.png";

export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={900}>
          <img className="d-block w-100" src={b1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img className="d-block w-100" src={b2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img className="d-block w-100" src={b3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
