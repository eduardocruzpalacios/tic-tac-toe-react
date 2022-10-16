import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from './MainPage';

const title = 'Tic tac toe';

describe('MainPage />', () => {
  beforeEach(() => {
    render(
      <MainPage />
    );
  });

  it('renders title', () => {
    const titleEl = screen.getByText(title);
    expect(titleEl).toBeInTheDocument();
  });
});
