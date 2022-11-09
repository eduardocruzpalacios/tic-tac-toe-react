import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Span } from './Span';

const value = 'You won';

describe('<Span />', () => {
  beforeEach(() => {
    render(
      <Span
        value={value}
      />
    );
  });

  it('renders value', () => {
    const spanEl = screen.getByText(value);
    expect(spanEl).toBeInTheDocument();
  });
});
