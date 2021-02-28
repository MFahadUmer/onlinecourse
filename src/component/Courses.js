import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Courses = ({
  // eslint-disable-next-line react/prop-types
  uniqueKey,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  details,
  // eslint-disable-next-line react/prop-types
  requirements,
  // eslint-disable-next-line react/prop-types
  difficulty,
  // eslint-disable-next-line react/prop-types
  index,
  // eslint-disable-next-line react/prop-types
  total,
  // eslint-disable-next-line react/prop-types
  image,
  // eslint-disable-next-line react/prop-types
  price,
}) => {
  console.log(title);
  console.log(details);
  console.log(requirements);
  console.log(difficulty);
  console.log(index);
  console.log(total);
  console.log(image);
  console.log(price);
  console.log(uniqueKey);
  return (
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
};

export default Courses;
