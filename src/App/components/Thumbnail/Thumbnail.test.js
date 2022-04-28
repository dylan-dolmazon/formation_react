import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Thumbnail from './Thumbnail';

describe('<Thumbnail />', () => {
  test('it should mount', () => {
    render(<Thumbnail />);
    
    const thumbnail = screen.getByTestId('Thumbnail');

    expect(thumbnail).toBeInTheDocument();
  });
});