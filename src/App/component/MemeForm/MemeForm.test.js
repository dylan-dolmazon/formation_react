import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeForm from './MemeForm(1)';

describe('<MemeForm />', () => {
  test('it should mount', () => {
    render(<MemeForm />);
    
    const memeForm = screen.getByTestId('MemeForm');

    expect(memeForm).toBeInTheDocument();
  });
});