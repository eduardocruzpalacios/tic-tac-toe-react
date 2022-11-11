import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

const title = 'Tic tac toe';

describe('Header />', () => {
  beforeEach(() => {
    render(
      <Header />
    );
  });

  it('renders title', () => {
    const titleEl = screen.getByText(title);
    expect(titleEl).toBeInTheDocument();
  });
});
