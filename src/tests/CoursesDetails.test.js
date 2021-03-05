import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import CourseDetails from '../component/CourseDetails';

describe('Test Suit', () => {
  const courseId = 1;
  const userId = 1;
  const title = 'React and Redux';
  const details = 'A Very Nice Course';
  const price = '100';

  it('should found the title on screen', () => {
    render(
      <CourseDetails
        key={courseId}
        uniqueKey={courseId}
        userid={userId}
        title={title}
        details={details}
        price={price}
        check="Remove From Favourites"
      />,
    );
    expect(screen.getByText('React and Redux')).toBeTruthy();
  });

  it('should found the details on screen', () => {
    render(
      <CourseDetails
        key={courseId}
        uniqueKey={courseId}
        userid={userId}
        title={title}
        details={details}
        price={price}
        check="Remove From Favourites"
      />,
    );
    expect(screen.getByText('A Very Nice Course')).toBeTruthy();
  });

  it('should match the course details component snapshot', () => {
    const tree = renderer.create(
      <CourseDetails
        key={courseId}
        uniqueKey={courseId}
        userid={userId}
        title={title}
        details={details}
        price={price}
        check="Remove From Favourites"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
