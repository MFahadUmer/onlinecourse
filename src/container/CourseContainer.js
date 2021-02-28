import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchCourse } from '../redux/courses/coursesAction';
import UserNavbar from '../component/userNavbar';
import FavouriteContainer from './FavouriteContainer';
import AllCoursesContainer from './AllCoursesContainer';
import LogoutContainer from './LogoutContainer';
import Courses from '../component/Courses';

const CourseContainer = () => {
  const course = useSelector(state => state.course);
  console.log(course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  const coursesList = course.courses.map(course => (
    <Courses
      key={course.title}
      title={course.title}
      details={course.details}
      requirements={course.requirements}
      difficulty={course.difficulty}
      author={course.author}
      Uploaded={course.date}
    />
  ));
  console.log(coursesList);
  return (
    <div>
      <BrowserRouter>
        <UserNavbar />
        <Switch>
          <Route path="/favourites/" component={FavouriteContainer} />
          <Route default path="/allCourses/" component={AllCoursesContainer} />
          <Route path="/logout" component={LogoutContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default CourseContainer;
