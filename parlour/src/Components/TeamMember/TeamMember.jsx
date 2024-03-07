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
    brandname: "titan",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd005b872/images/TitanSBDesktop.jpg",
  },
  {
    brandname: "fasttrack",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dweedae1b7/images/fastrackdesktop.jpg",
  },
  {
    brandname: "Sonata",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg",
  },
  {
    brandname: "police",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw34585a51/images/homepage/Police_desktop.jpg",
  },
  {
    brandname: "tommy hilfiger",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwcf32cbd5/images/tommydesktop.jpg",
  },
  {
    brandname: "Kenneth cole",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw5d8cea36/images/homepage/KC_desktop.jpg",
  },
  {
    brandname: "Coach",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw85b1e038/images/homepage/Coach_desktop.jpg",
  },
  {
    brandname: "tommy hilfiger",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwcf32cbd5/images/tommydesktop.jpg",
  },
  {
    brandname: "Xylys",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw90ad9714/images/Xylys-Desktop.jpg",
  },
  {
    brandname: "Zoop",
    img: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw8378eacd/images/Zoop-Desktop.jpg",
  },
];

const TeamMember = () => {
  return (
    <>
      <div className="home-brands-carousel-container">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {homebrand.map((key) => {
            return (
              <figure class="snip1127">
                <img src={key.img} alt="sample14" />
                <i class="ion-ios-plus-empty"></i>
                <a href="#"></a>
              </figure>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default TeamMember;
