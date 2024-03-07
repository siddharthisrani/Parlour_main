import "./Header.css";
import video from "./parlourmain.mp4";
const Header = () => {
  return (
    <>
      <div className="home-video" style={{ maxHeight: "100vh" }}>
        <h1 id="headerquotes">
        Elevate your beauty with  <br />grace and confidence <br />at our girl's beauty haven
          DREAMS <br />
          <button type="button" class="btn btn-outline-warning " id="homebtnl">
           Jyoti's Makeover Studio
          </button>
        </h1>

        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          className="home-videos"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Header;
