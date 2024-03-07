import "./HomeVideo.css";
import video from "./videomain2.mp4";

const HomeVideo = () => {
  return (
    <>
      <div className="second-video" style={{ padding: "0 7.8%" }}>
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          className="second-videos"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HomeVideo;
