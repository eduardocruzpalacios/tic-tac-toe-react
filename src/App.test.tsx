import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';

describe('App />', () => {
  beforeEach(() => {
    render(
      <App />
    );
  });

  it('changes theme when clicking DarkModeSwitch component', () => {
    const labelEl = screen.getByTestId('label');
    expect(labelEl).toHaveStyle('background-color: #222');
    fireEvent.click(labelEl);
    expect(labelEl).toHaveStyle('background-color: #ddd');
  });
});
