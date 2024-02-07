import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const Rating = ({ rating }) => {
  const globalStars = 5;
  const fullStars = Array.from({ length: rating }, (unused, index) => (
    <FaStar key={index} className="redStar" />
  ));
  const emptyStars = Array.from(
    { length: globalStars - rating },
    (unused, index) => <FaStar key={index} className="originStar" />
  );

  return (
    <>
      {fullStars}
      {emptyStars}
    </>
  );
};
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
