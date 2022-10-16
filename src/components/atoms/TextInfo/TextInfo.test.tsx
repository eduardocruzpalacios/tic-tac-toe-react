import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TextInfo } from './TextInfo';

const value = 'You won';

describe('<TextInfo />', () => {
  beforeEach(() => {
    render(
      <TextInfo
        value={value}
      />
    );
  });

  it('renders value', () => {
    const spanEl = screen.getByText(value);
    expect(spanEl).toBeInTheDocument();
  });
});
