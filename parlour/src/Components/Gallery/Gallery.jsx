import { useState } from "react";
import "./Gallery.css";
import img1 from "./image1.jpg"
import img2 from "./image2.jpg"
import img3 from "./image3.jpg"
import img4 from "./image4.jpg"
import img6 from "./image6.jpg"
import img8 from "./image8.jpg"
import img5 from "./image5.jpg"
import img7 from "./image7.jpg"
const Gallery = () => {
  return (
    <>
      <section id="gallary" class="p-5 animate__animated  wow animate__zoomIn">
        <div class="container">
          <div class="row ">
            <div class="col-lg-4 col-md-6 ">
              <img
                src={img1}
                class="rounded float-start img-fluid mt-3 p-0  border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-4 col-md-6">
              <img
                src={img2}
                class="rounded float-start img-fluid mt-3 p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-4 col-md-6">
              {" "}
              <img
                src={img3}
                class="rounded float-start img-fluid mt-3 p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-6 col-md-6">
              <img
                src={img4}
                class="rounded float-start img-fluid mt-3 p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-6 ">
              <img
                src={img5}
                class="rounded float-start img-fluid mt-3 responsive p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-8 col-md-8 d-block">
              <img
                src={img6}
                class="rounded float-start container-fluid mt-3 p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-4 col-md-4 img-fluid">
              <img
                src={img7}
                class="rounded float-start container-fluid img-fluid mt-3 mb-0 p-0 border1 border-3 abhishek"
                alt="..."
              />
              <img
                src={img8}
                class="rounded float-start container-fluid mt-3 p-0 border1 border-3 abhishek"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
