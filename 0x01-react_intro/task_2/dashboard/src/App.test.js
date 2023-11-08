import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

test('App renders correctly', () => {
    render(<App />);
    expect(screen.getByText('School Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument();
    expect(screen.getByText(/Email:/)).toBeInTheDocument();
    expect(screen.getByText(/Password:/)).toBeInTheDocument();
    expect(screen.getByText(/Copyright/)).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
});

test('contains correct elements and attributes', () => {
    render(<App />);
    const divHead = screen.getByRole('banner', { class: 'App-header' });
    const divBody = screen.getByRole('main', { class: 'App-body' });
    const button = screen.getByRole('button');
    const divFoot = screen.getByRole('contentinfo', { class:'App-footer' });

    //make assertions
    expect(button).toBeInTheDocument();
    expect(divHead).toHaveClass('App-header');
    expect(divBody).toHaveClass('App-body');
    expect(divFoot).toHaveClass('App-footer');
})