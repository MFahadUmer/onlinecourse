import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import UserNavbar from '../component/userNavbar';

describe('User Navbar Test', () => {
  it('should render author panel navbar', () => {
    render(
      <BrowserRouter>
        <UserNavbar />
      </BrowserRouter>,
    );
    expect(screen.getByText('Favourites')).toBeTruthy();
  });

  it('should render author panel navbar', () => {
    render(
      <BrowserRouter>
        <UserNavbar />
      </BrowserRouter>,
    );
    expect(screen.getByText('Favourites').href).toBe('http://localhost/favourites');
  });

  it('matches the Navbar component snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <UserNavbar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
