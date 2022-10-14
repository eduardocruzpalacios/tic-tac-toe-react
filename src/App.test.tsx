import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders tic tac toe text', () => {
  render(<App />);
  const linkElement = screen.getByText(/tic tac toe/i);
  expect(linkElement).toBeInTheDocument();
});
