import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const Courses = ({
// eslint-disable-next-line no-unused-vars
  uniqueKey,
  title,
  index,
  total,
  image,
  price,
  userType,
}) => (
  <div className="coursesContainer">
    <div className="courseContainerCourse">
      <img className="courseImage" src={image} alt={image} />
      <div className="userCourseDetailsContainer">
        <div className="userCourseDetailsDetails">
          <h2 className="userCoursesTitle">
            {userType === 'user'
              ? (<Link className="courseTitleLink" to={`/couseDetails/${uniqueKey}`}>{title}</Link>)
              : <p className="courseTitleLink">{title}</p>}
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
  userType: PropTypes.string,
};

Courses.defaultProps = {
  title: '',
  uniqueKey: '',
  userType: '',
  index: '',
  total: '',
  image: '',
  price: '',
};

export default Courses;
