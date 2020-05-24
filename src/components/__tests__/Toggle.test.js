import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Toggle from '../Toggle';

describe('Toggle component ON and OFF', () => {
  it('should render Toggle and change between ON and OFF', () => {
    let active = false;
    const changeActive = () => {
      active = !active;
    };
    render(<Toggle active={active} toggleActive={changeActive} />);
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(active).toBe(true);
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(active).toBe(false);
  });
});
