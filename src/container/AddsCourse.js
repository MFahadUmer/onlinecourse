import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse, setMessage } from '../redux/courses/coursesAction';

const AddsCourse = () => {
  const dispatch = useDispatch();
  const changeHandler = () => {
    dispatch(setMessage(''));
    document.getElementById('addCourseForm').reset();
  };
  const courseError = useSelector(state => state.course.error);
  const author = useSelector(state => state.user.user[0].user.id);
  const courseStatusMsg = useSelector(state => state.course.message);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [requirements, setRequirements] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const imageAddress = 'https://itchronicles.com/wp-content/uploads/2018/02/bigstock-Big-Data-Futuristic-Visualizat-216534871.jpg';

  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'details') {
      setDetails(e.target.value);
    } else if (e.target.name === 'requirements') {
      setRequirements(e.target.value);
    } else if (e.target.name === 'difficulty') {
      setDifficulty(e.target.value);
    } else if (e.target.name === 'image') {
      setImage(e.target.value);
    } else if (e.target.name === 'price') {
      setPrice(e.target.value);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    const newCourse = {
      course_title: title,
      course_details: details,
      course_author: author,
      course_requirements: requirements === '' ? 'No Requirements' : requirements,
      course_difficulty: difficulty === '' ? 'Beginners' : difficulty,
      course_image: image === '' ? imageAddress : image,
      course_price: price,
    };
    dispatch(addCourse(newCourse));
    setTitle('');
    setDetails('');
    setRequirements('');
    setDifficulty('');
    setImage('');
    setPrice('');
  };
  if (courseStatusMsg === 'Course Added.') {
    setTimeout(changeHandler, 1000);
  }
  return (
    <>
      <h2 className="allCoursesHeader">Add New Course</h2>
      <form onSubmit={handleClick} id="addCourseForm">
        <div className="addCourseContainer">
          <input className="inputField" type="text" placeholder="Course Title" name="title" onChange={e => handleChange(e)} />
          <input className="inputField" type="text" placeholder="Course Details" name="details" onChange={e => handleChange(e)} />
          <input className="inputField" type="text" placeholder="Requirements for this course" name="requirements" onChange={e => handleChange(e)} />
          <select className="inputField" name="difficulty" defaultValue="Beginners" onChange={e => handleChange(e)}>
            <option value="Beginners">Beginners</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <input className="inputField" type="text" placeholder="Paste Course Image Link" name="image" onChange={e => handleChange(e)} />
          <input className="inputField" type="text" placeholder="Price of this course" name="price" onChange={e => handleChange(e)} />
          <input className="submitField" type="submit" value="SAVE" />
        </div>
      </form>
      {courseStatusMsg === 'Course Added.'
        ? <p className="courseAdded">Course Added.</p>
        : ''}
      {courseError !== ''
        ? <p className="courseAdded">Incomplete Details.</p>
        : ''}
    </>
  );
};

export default AddsCourse;
