import Python from "../images/python.png";
import C from "../images/c.png";
import Java from "../images/java.webp";
import Haskell from "../images/haskell.png";
import Javascript from "../images/javascript.webp";
import LeftButton from "../images/left-button.svg";
import RightButton from "../images/right-button.svg";
import { useState } from "react";

const Languages = () => {
  const [index, setIndex] = useState(0);

  const images = [Javascript, Python, C, Java, Haskell];

  const goToNextImage = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="languages">
      <div className="languages__text">
        <h5>Languages</h5>
        <p className="languages__text-desktop">
          I've had the opportunity to work with a variety of programming
          languages during my studies. Some of these I'm still actively
          learning, while others have become core parts of my skillset.
        </p>
      </div>
      <div className="languages_carousel">
        <div className="languages__image-container">
          <div className="languages__image-slider">
            {images.map((url) => (
              <img
                key={url}
                src={url}
                style={{ translate: `${-100 * index}%` }}
              />
            ))}
          </div>
          <div
            className="languages__button languages__button--primary"
            onClick={goToPreviousImage}
          >
            <img src={LeftButton} alt="prev" />
          </div>
          <div
            className="languages__button languages__button--secondary"
            onClick={goToNextImage}
          >
            <img src={RightButton} alt="prev" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
