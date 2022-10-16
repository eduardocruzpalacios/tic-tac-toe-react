import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';

const value = 'Title';

describe('<Title />', () => {
  beforeEach(() => {
    render(
      <Title
        value={value}
      />
    );
  });

  it('renders value', () => {
    const titleEl = screen.getByText(value);
    expect(titleEl).toBeInTheDocument();
  });
});
