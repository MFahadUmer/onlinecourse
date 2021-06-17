import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AuthorPanelNavbar from '../component/AuthorPanelNavbar';

describe('Author Panel Navbar Test', () => {
  it('should render author panel navbar', () => {
    render(
      <BrowserRouter>
        <AuthorPanelNavbar />
      </BrowserRouter>,
    );
    expect(screen.getByText('Add Course')).toBeTruthy();
  });

  it('should render author panel navbar', () => {
    render(
      <BrowserRouter>
        <AuthorPanelNavbar />
      </BrowserRouter>,
    );
    expect(screen.getByText('Add Course').href).toBe('http://localhost/addCourse');
  });

  it('should render author panel navbar', () => {
    render(
      <BrowserRouter>
        <AuthorPanelNavbar />
      </BrowserRouter>,
    );
    expect(screen.getByText('Logout').href).toBe('https://reactonlinecourse.herokuapp.com/');
  });

  it('matches the Navbar component snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <AuthorPanelNavbar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
