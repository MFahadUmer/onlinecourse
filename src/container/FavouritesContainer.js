import React from 'react';
import { useSelector } from 'react-redux';
import Courses from '../component/Courses';

const FavouritesContainer = () => {
  const favouriteCourse = useSelector(state => state.favourite);
  const favouriteCourseList = favouriteCourse.courses.map(courseData => (
    <Courses
      key={courseData.course_id}
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
  return (
    <>
      <div>
        <div className="headerContainer">
          <h2 className="allCoursesHeader">FAVOURUTE COURSES.</h2>
        </div>
        <div className="courseContainerList">
          {favouriteCourse.courses.length === 0 ? <h2 className="noFAv">NO COURSES ADDED.</h2> : favouriteCourseList }
        </div>
      </div>
    </>
  );
};

export default FavouritesContainer;
