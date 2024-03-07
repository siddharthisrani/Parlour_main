import "./Home.css";

const Home = () => {
  return (
    <>
      <section
        id="home"
        class="overlay-home d-flex justify-center align-items-center"
      >
        <div class="  p-5 text-center container ">
          <h1 class="tr-text  mb-5 animate__animated wow animate__zoomIn" >
            Jyoti's Makeover Studio
          </h1>

          <p class="prg p-3 animate__animated  animate__fadeInUp">
            {" "}
            Firstly follow our Instagram page then fill the Form and verify OTP for free service...
          </p>
          <button type="button" class="btn btn-outline-warning" >
          <a href="https://www.instagram.com/jyotis_makeover_studio?igsh=ZGZnb3lwcWFzejdw" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"white"}}> FOLLOW NOW
          </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
