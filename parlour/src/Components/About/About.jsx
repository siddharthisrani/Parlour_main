import "./About.css";
import CountUp from "react-countup";
import aboutimg from "./aboutimage.jpg"
const About = () => {
  return (
    <>
      <section id="about" class="p-5">
        <div class="container">
          <h1 class="tr-text wow animate__animated animate__zoomIn">
            {" "}
            About Us
          </h1>
          <div class="row pt-5 pb-5 ">
            <div class=" col-lg-6 wow animate__animated  animate__fadeInLeft">
              <div class="about-img m-3">
                <img
                  src={aboutimg}
                  class="  rounded float-start container-fluid  p-0 border1 border-3"
                  alt=""
                />
              </div>
            </div>
            <div class=" col-lg-6 wow animate__animated animate__fadeInRight d-flex align-items-center">
              <div class="about-contan m-3 align-items-center">
                <h2>Best Parlour in Bhopal </h2>
                <br />
                <p class="">
                "At Jyoti's Makeover Studio, we craft more than just styles, we curate experiences that celebrate your unique beauty. Our dedicated team believes in empowering each woman to embrace her individuality with confidence. Step into a world where passion meets expertise, and let us enhance your natural radiance. Discover the allure of personalized care and redefine your beauty journey with us. Welcome to a space where beauty meets empowerment, and every visit is a celebration of you."
                </p>
                <div class="row text-center">
                  <div class="col-md-4 col-sm-4 col-lg-4">
                    <h3>10000 +</h3>
                    <p>Followers</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-lg-4">
                    <h3>1000 +</h3>
                    <p>Customer</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-lg-4">
                    <h3>5+</h3>
                    <p>Artist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
