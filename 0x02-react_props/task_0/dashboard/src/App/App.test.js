import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

describe('App component without props', () => {
    beforeEach(() => {
        render(<App />);
    });

    test('contains Notification Component', () => {
        expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    });

    test('contains Header component', () => {
        expect(screen.getByText('School Dashboard')).toBeInTheDocument();
    });

    test('contains Login Component', () => {
        expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument();
    });

    test('contains Footer component', () => {
        expect(screen.getByText(/Copyright/)).toBeInTheDocument();
    });

    test('ÇourseList is not displayed by default', () => {
        const courseList = screen.queryByTestId('courselist');
        expect(courseList).toBeNull();
    });
});

describe('App component with props', () => {
    test('Login not displayed when isLogged in is true', () => {
        render(<App isLoggedIn={true} />);
        const loggedIn = screen.queryByRole('main');
        const courseList = screen.queryByTestId('courselist');

        expect(loggedIn).toBeNull();
        expect(courseList).toBeInTheDocument();
    });
})