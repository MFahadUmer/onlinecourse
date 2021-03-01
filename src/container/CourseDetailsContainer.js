import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CourseDetails from '../component/CourseDetails';

const CourseDetailsContainer = ({ match }) => {
  const userId = useSelector(state => state.user.user.user_id);
  const courseId = parseInt(match.params.id, 10);
  const courseDetail = useSelector(state => state.course.courses);
  const filtered = courseDetail.filter(course => course.course_id === courseId)
    .map(course => (
      <CourseDetails
        key={course.course_id}
        uniqueKey={course.course_id}
        userid={userId}
        title={course.title}
        details={course.details}
        requirements={course.requirements}
        difficulty={course.difficulty}
        image={course.image}
        price={course.price}
        date={course.date}
      />
    ));
  return (
    <div>
      {filtered}
    </div>
  );
};

CourseDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

CourseDetailsContainer.defaultProps = {
  match: {},
};

export default CourseDetailsContainer;
