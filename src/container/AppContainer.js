import React from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCourse } from '../redux/courses/coursesAction';
// import { userRegistration } from '../redux/users/userAction';
import LoginContainer from './LoginContainer';
// eslint-disable-next-line
const AppContainer = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCourse());
  // }, []);
  // const myCourse = {
  //   course_title: 'Seerat E Muhammadia',
  //   course_details: 'Seerat E Mustafa',
  //   course_author: 'Seerat E Mustafa',
  //   course_requirements: 'Seerat E Mustafa',
  //   course_difficulty: 'Seerat E Mustafa',
  // };
  // const handleChange = () => {
  //   dispatch(addCourse(myCourse));
  // };

  // const userObj = {
  //   first_name: 'Muhammad Fahad',
  //   last_name: 'Umer',
  //   username: 'fahad',
  //   email: 'eng.fahadumer@gmail.com',
  //   user_type: 'AUthor',
  //   password: 'asdfghjkl',
  // };

  // const handChangeUser = () => {
  //   dispatch(userRegistration(userObj));
  // };
  return (
    <div>
      <LoginContainer />
    </div>
  );
};

export default AppContainer;
