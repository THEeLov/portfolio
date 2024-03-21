import MyPhoto from "../images/my_photo_nt.jpeg";
import Facebook from "../images/facebook.svg";
import Mail from "../images/gmail.svg";
import Gitlab from "../images/gitlab.svg";

const Main = () => {
  return (
    <header className="header">
      <div className="header__photo-container">
        <div className="header__photo">
          <img className="header__photo--myself" src={MyPhoto} alt="My photo" />
        </div>
      </div>

      <div className="header__left-grid">
        <div className="header__text-container">
          <div className="header__text">
            <p>Hey</p>
            <h1>I'm Filip</h1>
            <h2>Computer Science Student</h2>
            <p>
              Motivated second-year student studying Programming and Application
              Development. Actively seeking internship opportunities to sharpen
              my skills and gain hands-on experience in the industry.
            </p>
          </div>
        </div>

        <div className="header__icons-container">
          <div className="header__icons">
            <div className="header__icon-container">
              <img src={Facebook} alt="facebook" />
            </div>
            <div className="header__icon-container">
              <img src={Mail} alt="facebook" />
            </div>
            <div className="header__icon-container">
              <img src={Gitlab} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Main;
