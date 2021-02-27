import React from 'react';

// eslint-disable-next-line react/prop-types
const Courses = ({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  details,
  // eslint-disable-next-line react/prop-types
  requirements,
  // eslint-disable-next-line react/prop-types
  difficulty,
  // eslint-disable-next-line react/prop-types
  author,
  // eslint-disable-next-line react/prop-types
  Uploaded,
}) => {
  console.log(title);
  console.log(details);
  console.log(requirements);
  console.log(difficulty);
  console.log(author);
  console.log(Uploaded);
  return (
    <div className="coursesContainer">
      <div className="coursesDetails">
        <img className="courseImage" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg" alt={title} />
        <div className="courseDetails">
          <div className="courseTitle">
            <h3 className="title">{title}</h3>
            <p className="price">$3000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
