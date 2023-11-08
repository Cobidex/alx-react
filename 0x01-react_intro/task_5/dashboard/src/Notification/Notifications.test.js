import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.js';

test('Notification renders without crashing', () => {
    render(<Notifications />);
    const closeButton = screen.getByLabelText('Close');
    const list = screen.getByRole('list');
    const listitems = screen.getAllByRole('listitem');
    
    expect(closeButton).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(listitems).toHaveLength(3);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
});

it('displays notifications with different data attributes', () => {
    render(<Notifications />);
    const defaultNotification = screen.getByText('New course available');
    const urgentNotification = screen.getByText('New resume available');
    expect(defaultNotification).toHaveAttribute('data', 'default');
    expect(urgentNotification).toHaveAttribute('data', 'urgent');
});

it('calls the close function when "Close" button is clicked', () => {
    const closeSpy = jest.spyOn(console, 'log');
    render(<Notifications />);
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(closeSpy).toHaveBeenCalledWith('Close button has been clicked');
    closeSpy.mockRestore();
});

