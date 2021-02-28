import React from 'react';

// eslint-disable-next-line react/prop-types
const CourseDetailsContainer = ({ match }) => {
  // eslint-disable-next-line react/prop-types
  const courseId = match.params.id;
  return (
    <div>
      {courseId}
    </div>
  );
};

export default CourseDetailsContainer;
