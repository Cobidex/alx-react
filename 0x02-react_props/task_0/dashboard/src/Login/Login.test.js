import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login.js';

describe('Test Login Component', () => {
    test('Renders correctly 2 input boxes and Email and Password label', () => {
        render(<Login />);

        const emailBox = screen.getByTestId('email-input');
        const passwordBox = screen.getByTestId('password-input');
        const email = screen.getByText(/Email:/);
        const password = screen.getByText(/Password:/)
        screen.debug();

        expect(emailBox).toBeInTheDocument();
        expect(passwordBox).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    });
});