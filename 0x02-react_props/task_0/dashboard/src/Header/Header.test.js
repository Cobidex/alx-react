import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.js';

describe('Test the Header Component', () => {
    test('Renders correctly an image and h1 element', () => {
        render(<Header />);

        const imageTag = screen.getByTestId('logo');
        const heading = screen.getByRole('heading');
    
        screen.debug();
        expect(imageTag).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
    });
});