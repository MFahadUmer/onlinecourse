import React from 'react';
import { useSelector } from 'react-redux';
import Courses from '../component/Courses';
import Loading from '../component/Loading';

const FavouritesContainer = () => {
  const user = useSelector(state => state.user.user[0].user);
  const favouriteCourse = useSelector(state => state.favourite);
  if (favouriteCourse.loading) {
    return (
      <Loading loading={user.loading} color="brown" />
    );
  }
  let favouriteCourseList = [];
  if (favouriteCourse.courses !== []) {
    favouriteCourseList = favouriteCourse.courses.map(courseData => (
      <Courses
        key={courseData.course_id}
        userType={user.user_type}
        uniqueKey={courseData.course_id}
        title={courseData.title}
        details={courseData.details}
        requirements={courseData.requirements}
        difficulty={courseData.difficulty}
        image={courseData.image}
        price={courseData.price}
        author={courseData.author}
        Uploaded={courseData.date}
        index={favouriteCourse.courses.indexOf(courseData) + 1}
        total={favouriteCourse.courses.length}
      />
    ));
  }
  return (
    <>
      <div className="courseContainerList">
        {favouriteCourse.courses.length === 0 ? <h2 className="noFAv">NO COURSES ADDED.</h2> : favouriteCourseList }
      </div>
    </>
  );
};

export default FavouritesContainer;
