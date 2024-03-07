import TeamMember from "../TeamMember/TeamMember";
import "./Team.css";
import Carousel from "react-multi-carousel";

const Team = () => {
  return (
    <>
      <section id="team" class="pt-5 pb-5">
        <div class="container text-center">
          <h1 class="tr-text mb-5 wow animate__animated animate__zoomIn">
            Meet Our Team
          </h1>
        </div>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "0 5%",
          flexWrap: "wrap",
        }}
      >
        <figure class="snip1127">
          <img
            src="https://images.hdqwalls.com/download/brunette-girl-in-depth-of-field-4k-ye-3840x2400.jpg"
            alt="sample14"
          />
          {/* <i class="ion-ios-plus-empty"></i> */}
          <a href="#"></a>
        </figure>
        <figure class="snip1127 green">
          <img
            src="https://wallpapers.com/images/high/handsome-man-turtleneck-glasses-ggolfxxykp1ts39a.webp"
            alt="sample22"
          />
          {/* <i class="ion-ios-plus-empty">Ajay</i> */}
          <a href="#"></a>
        </figure>

        <figure class="snip1127 green">
          <img
            src="https://images.hdqwalls.com/download/brunette-girl-with-bike-4k-x2-3840x2400.jpg"
            alt="sample22"
          />
          {/* <i class="ion-ios-plus-empty"></i> */}
          <a href="#"></a>
        </figure>
        <figure class="snip1127 green">
          <img
            src="https://images.hdqwalls.com/download/constanze-aurelia-ye-3840x2400.jpg"
            alt="sample22"
          />
          {/* <i class="ion-ios-plus-empty"></i> */}
          <a href="#"></a>
        </figure>
        <figure class="snip1127 green">
          <img
            src="https://wallpapers.com/images/high/handsome-man-black-and-white-suit-643w0zqkuc6kohxx.webp"
            alt="sample22"
          />
          {/* <i class="ion-ios-plus-empty"></i> */}
          <a href="#"></a>
        </figure>
        <figure class="snip1127 green">
          <img
            src="https://wallpapers.com/images/high/man-sitting-on-a-black-sofa-cov6mic3n5jxcqiq.webp"
            alt="sample22"
          />
          {/* <i class="ion-ios-plus-empty"></i> */}
          <a href="#"></a>
        </figure>
      </div>
    </>
  );
};

export default Team;
