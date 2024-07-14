import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';

test('renders 2 little lemon text', () => {
  render( <BrowserRouter>
    <Homepage />
  </BrowserRouter>);
  const headingElement = screen.getAllByText('Little Lemon');
  expect(headingElement.length).toBe(2);
});

test('renders About Little Lemon lemon text', () => {
  render( <BrowserRouter>
    <Homepage />
  </BrowserRouter>);
  const headingElement = screen.getByText('About Little Lemon');
  expect(headingElement).toBeInTheDocument();
});
