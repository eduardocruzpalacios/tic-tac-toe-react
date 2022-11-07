import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { DarkModeSwitch } from './DarkModeSwitch';

const name = 'themeSwitch';

describe('<DarkModeSwitch />', () => {
  beforeEach(() => {
    render(
      <DarkModeSwitch />
    );
  });

  it('renders input and label', () => {
    const inputEl = screen.getByTestId('checkbox');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl.getAttribute('name')).toEqual(name);
    const labelEl = screen.getByTestId('label');
    expect(labelEl).toBeInTheDocument();
    expect(labelEl.getAttribute('for')).toEqual(name);
  });
});
