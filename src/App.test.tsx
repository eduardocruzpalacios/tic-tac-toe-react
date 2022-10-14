import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/tic tac toe/i);
  expect(linkElement).toBeInTheDocument();
});
