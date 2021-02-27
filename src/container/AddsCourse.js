import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse } from '../redux/courses/coursesAction';

const AddsCourse = () => {
  const dispatch = useDispatch();
  const author = useSelector(state => state.user.user.user_id);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [requirements, setRequirements] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

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

  const handleClick = () => {
    const newCourse = {
      course_title: title,
      course_details: details,
      course_author: author,
      course_requirements: requirements,
      course_difficulty: difficulty,
      course_image: image,
      course_price: price,
    };
    console.log(newCourse);
    dispatch(addCourse(newCourse));
  };
  return (
    <div>
      <input type="text" placeholder="Course Title" name="title" onChange={e => handleChange(e)} />
      <input type="text" placeholder="Course Details" name="details" onChange={e => handleChange(e)} />
      <input type="text" placeholder="Requirements for this course" name="requirements" onChange={e => handleChange(e)} />
      <select name="difficulty" defaultValue="Beginners" onChange={e => handleChange(e)}>
        <option value="Beginners">Beginners</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <input type="text" placeholder="Paste Course Image Link" name="image" onChange={e => handleChange(e)} />
      <input type="text" placeholder="Price of this course" name="price" onChange={e => handleChange(e)} />
      <input type="submit" value="SAVE" onClick={() => handleClick()} />
    </div>
  );
};

export default AddsCourse;
