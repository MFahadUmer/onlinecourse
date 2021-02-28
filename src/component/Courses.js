import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Courses = ({
  uniqueKey,
  title,
  index,
  total,
  image,
  price,
}) => (
  <div className="coursesContainer">
    <div className="courseContainerCourse">
      <img className="courseImage" src={image} alt={image} />
      <div className="userCourseDetailsContainer">
        <div className="userCourseDetailsDetails">
          <h2 className="userCoursesTitle">
            <Link className="courseTitleLink" to={`/couseDetails/${uniqueKey}`}>{title}</Link>
          </h2>
          <p className="userCoursesPrice">
            {`${price} $`}
          </p>
        </div>
        <div className="userCourseDetailsDetails">
          <div>
            <span className="fas fa-star starColor" />
            <span className="fas fa-star starColor" />
            <span className="fas fa-star starColor" />
            <span className="fas fa-star starColor" />
            <span className="fas fa-star" />
          </div>
          <p> Per Month </p>
        </div>
      </div>
      <div className="numbering">
        {`${index} / ${total}`}
      </div>
    </div>
  </div>
);

Courses.propTypes = {
  title: PropTypes.string,
  uniqueKey: PropTypes.number,
  index: PropTypes.number,
  total: PropTypes.number,
  image: PropTypes.string,
  price: PropTypes.string,
};

Courses.defaultProps = {
  title: '',
  uniqueKey: '',
  index: '',
  total: '',
  image: '',
  price: '',
};

export default Courses;
