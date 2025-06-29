import VideoHomePage from "../../assets/Video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <div className="homepage-video">
        <video autoPlay muted loop>
          <source src={VideoHomePage} type="video/mp4" />
        </video>
      </div>
      <div className="homepage-content">
        <div className="homepage-title">
          This is the place to test your knowledge
        </div>
        <div className="homepage-desc">
          You are in the IT industry and are not sure about your current
          knowledge. Don't worry, here you will be tested on the knowledge you
          have learned!
        </div>
        <div className="homepage-button">
          <button>Challenge your knowledge</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
