import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { fetchCourse } from '../redux/courses/coursesAction';
import Courses from '../component/Courses';
import UserNavbar from '../component/userNavbar';
import CourseDetailsContainer from './CourseDetailsContainer';
import { fetchFavouriteCourses } from '../redux/favourites/favouriteActions';

const CourseContainer = ({ userId }) => {
  const course = useSelector(state => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchFavouriteCourses(userId));
  }, []);
  const coursesList = course.courses.map(courseData => (
    <Courses
      key={courseData.title}
      uniqueKey={courseData.course_id}
      title={courseData.title}
      details={courseData.details}
      requirements={courseData.requirements}
      difficulty={courseData.difficulty}
      image={courseData.image}
      price={courseData.price}
      author={courseData.author}
      Uploaded={courseData.date}
      index={course.courses.indexOf(courseData) + 1}
      total={course.courses.length}
    />
  ));
  return (
    <>
      <BrowserRouter>
        <UserNavbar />
        <div className="courseReducer">
          <div className="courseContainerList">
            <Switch>
              <Route path="/" exact>
                {coursesList}
              </Route>
              <Route path="/couseDetails/:id" component={CourseDetailsContainer} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

CourseContainer.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default CourseContainer;
