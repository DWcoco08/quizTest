import VideoHomePage from "../../assets/Video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
      <div className="homepage-video">
        <video autoPlay muted loop>
          <source src={VideoHomePage} type="video/mp4" />
        </video>
      </div>
      <div className="homepage-content">
        <div className="homepage-title">{t("homepage.homepage-title")}</div>
        <div className="homepage-desc">{t("homepage.homepage-desc")}</div>
        <div className="homepage-button">
          {isAuthenticated === false ? (
            <button onClick={() => navigate("/login")}>
              Challenge your knowledge!
            </button>
          ) : (
            <button onClick={() => navigate("/users")}>Start Quiz</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
