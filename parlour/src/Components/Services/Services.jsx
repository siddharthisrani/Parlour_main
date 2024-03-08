import React from "react";
import "./Services.css";

import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 740 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
  },
};
const homebrand = [
  {
    img: "https://wallpapers.com/images/high/handsome-man-turtleneck-glasses-ggolfxxykp1ts39a.webp",
  },
  {
    img: "https://wallpapers.com/images/high/handsome-man-turtleneck-glasses-ggolfxxykp1ts39a.webp",
  },
  {
    img: "https://wallpapers.com/images/high/handsome-man-turtleneck-glasses-ggolfxxykp1ts39a.webp",
  },
  {
    img: "https://wallpapers.com/images/high/handsome-man-turtleneck-glasses-ggolfxxykp1ts39a.webp",
  },
  {
    img: "https://wallpapers.com/images/high/handsome-man-turtleneck-glasses-ggolfxxykp1ts39a.webp",
  },
];
const Services = () => {
  return (
    <>
       <section id="services" class="">
        <div class="container">
          <div class="p-5">
            <h1 class="p-1 tr-text text-center wow animate__animated  animate__zoomIn">
              Contact Us
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="parlor-info">
                <h2>Parlour Information</h2>
                <p>Name: Jyoti Israni</p>
                <p>Email: jyotiisrani1@gmail.com</p>
                <p>Phone: +917987096549</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="website-maker-info">
                <h2>Website Developer</h2>
                <p>Name: Siddharth Israni</p>
                <p>Email: siddharthisrani123@gmail.com</p>
                <p>Contact: +916261437008 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <img
        src="https://indiabikeweek.in/wp-content/uploads/2023/11/IBW-sponsor-panel-revised-02.png"
        alt=""
        width="90%"
        style={{ margin: "0 5%" }}
      /> */}
      

    </>
  );
};

export default Services;
