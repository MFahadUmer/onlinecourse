import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Loading from '../component/Loading';
import { fetchCourse } from '../redux/courses/coursesAction';
// eslint-disable-next-line no-unused-vars
import Courses from '../component/Courses';
import UserNavbar from '../component/userNavbar';
import CourseDetailsContainer from './CourseDetailsContainer';
// eslint-disable-next-line no-unused-vars
import { fetchFavouriteCourses } from '../redux/favourites/favouriteActions';
import FavouritesContainer from './FavouritesContainer';

const CourseContainer = () => {
  const user = useSelector(state => state.user.user[0].user);
  console.log(user);
  const course = useSelector(state => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  if (course.loading) {
    return (
      <Loading loading={user.loading} color="black" />
    );
  }
  let coursesList = '';
  if (course.courses !== []) {
    coursesList = course.courses.map(courseData => (
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
  }
  const noCourses = (
    <div className="noCourse">
      NO COURSES FOUND.&nbsp;&nbsp;
      <span className="fas fa-frown color-green" />
    </div>
  );
  console.log(coursesList);
  return (
    <>
      <BrowserRouter>
        <UserNavbar />
        {course.loading ? <Loading loading={course.loading} color="blue" /> : '' }
        <div className="courseReducer">
          <div className="courseContainerList">
            <Switch>
              <Route path="/" exact>
                { coursesList.length === 0
                  ? noCourses : coursesList}
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
