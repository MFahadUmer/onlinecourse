import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Courses from '../component/Courses';

describe('Test Suit', () => {
  const courseId = 1;
  const userId = 1;
  const title = 'React and Redux';
  const details = 'A Very Nice Course';
  const price = '100';
  const requirements = 'No Requirements';
  const difficulty = 'Beginners';
  const image = 'difficulty';

  it('should render title on course component', () => {
    render(
      <BrowserRouter>
        <Courses
          key={courseId}
          uniqueKey={courseId}
          userType="user"
          title={title}
          details={details}
          requirements={requirements}
          difficulty={difficulty}
          image={image}
          price={price}
          author={userId}
          index="1"
          total="1"
        />
      </BrowserRouter>,
    );
    expect(screen.getByText('React and Redux')).toBeTruthy();
  });

  it('should Match the Courses componenrender title on course componentt snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Courses
          key={courseId}
          uniqueKey={courseId}
          userType="user"
          title={title}
          details={details}
          requirements={requirements}
          difficulty={difficulty}
          image={image}
          price={price}
          author={userId}
          index="1"
          total="1"
        />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
