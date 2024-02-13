import arrowRight from "../assets/img/arrowRight.svg";
import arrowLeft from "../assets/img/arrowLeft.svg";
import { useState } from "react";
import { PropTypes } from "prop-types";

const Caroussel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const totalSlides = slides.length;

  const updateIndex = (increment) => {
    setCurrentIndex((lastIndex) => {
      let newIndex = lastIndex + increment;

      newIndex = newIndex >= totalSlides ? 0 : newIndex;
      newIndex = newIndex < 0 ? totalSlides - 1 : newIndex;
      return newIndex;
    });
  };

  const showArrows = totalSlides > 1;
  const showIndicator = totalSlides > 1;

  return (
    <div className="caroussel">
      <img
        className="slider"
        src={currentSlide}
        alt={`Slide ${currentIndex + 1}`}
      />
      {showArrows && (
        <>
          <img
            className="arrowRight"
            src={arrowRight}
            alt="flèche droite"
            onClick={() => updateIndex(1)}
          />
          <img
            className="arrowLeft"
            src={arrowLeft}
            alt="flèche gauche"
            onClick={() => updateIndex(-1)}
          />
        </>
      )}
      {showIndicator && (
        <div className="slide-indicator">
          {`${currentIndex + 1}/${totalSlides}`}
        </div>
      )}
    </div>
  );
};
export default Caroussel;

Caroussel.propTypes = {
  slides: PropTypes.array.isRequiered,
};
