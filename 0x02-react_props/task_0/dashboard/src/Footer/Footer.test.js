import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer.js';

describe('Test Footer Component', () => {
    test('verify that it renders correctly the text Copyright', () => {
        render(<Footer />);

        const copyrightText = screen.getByText(/Copyright/);

        screen.debug();
        expect(copyrightText).toBeInTheDocument();
    });
});