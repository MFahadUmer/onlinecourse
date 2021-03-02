import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { fetchCourse } from '../redux/courses/coursesAction';
import Courses from '../component/Courses';
import UserNavbar from '../component/userNavbar';
import CourseDetailsContainer from './CourseDetailsContainer';
import { fetchFavouriteCourses } from '../redux/favourites/favouriteActions';
import FavouritesContainer from './FavouritesContainer';
import Loading from '../component/Loading';

const CourseContainer = () => {
  const user = useSelector(state => state.user.user);
  const userId = user.user_id;
  const course = useSelector(state => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchFavouriteCourses(userId));
  }, []);
  const coursesList = course.courses.map(courseData => (
    <Courses
      key={courseData.course_id}
      uniqueKey={courseData.course_id}
      userType={user.user_type}
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
        {course.loading ? <Loading loading={course.loading} color="blue" /> : '' }
        <div className="courseReducer">
          <div className="courseContainerList">
            <Switch>
              <Route path="/" exact>
                {coursesList}
              </Route>
              <Route path="/couseDetails/:id" component={CourseDetailsContainer} />
              <Route path="/favourites" component={FavouritesContainer} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default CourseContainer;
