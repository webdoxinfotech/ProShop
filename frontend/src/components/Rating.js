import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, col }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: col }}
          className={
            value > 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color: col }}
          className={
            value > 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color: col }}
          className={
            value > 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color: col }}
          className={
            value > 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color: col }}
          className={
            value > 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>{text && text}</span>
      {/* <span>{text ? text : ''}</span> */}
    </div>
  );
};

Rating.defaultProps = {
  col: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  col: PropTypes.string.isRequired,
};

export default Rating;
