import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('changes theme when clicking after a transition time', () => {
    const labelEl = screen.getByTestId('label');
    expect(labelEl).toBeInTheDocument();
    setTimeout(() => {
      expect(labelEl).toHaveStyle('background-color: #222');
    }, 400);
    fireEvent.click(labelEl);
    setTimeout(() => {
      expect(labelEl).toHaveStyle('background-color: #ddd');
    }, 400);
  });
});
