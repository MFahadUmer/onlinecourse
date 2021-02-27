import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { fetchCourse } from '../redux/courses/coursesAction';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';
// import { userRegistration } from '../redux/users/userAction';
// import LoginContainer from './LoginContainer';
// import CourseContainer from './CourseContainer';
// import SignupContainer from './SignupContainer';
// eslint-disable-next-line
const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  // const handleChange = () => {
  //   dispatch(addCourse(myCourse));
  // };

  // const handChangeUser = () => {
  //   dispatch(userRegistration(userObj));
  // };
  return (
    <div>
      <BrowserRouter>
        <Link to="/signin">SIGNIN</Link>
        <Link to="/signup">SIGNUP</Link>
        <Switch>
          <Route path="/signin" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppContainer;
