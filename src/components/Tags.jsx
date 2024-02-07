import propTypes from "prop-types";

const Tags = ({ text }) => {
  return (
    <div>
      <p className="tags">{text}</p>
    </div>
  );
};
Tags.propTypes = {
  text: propTypes.string.isRequired,
};

export default Tags;
