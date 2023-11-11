import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.js';
import { getLatestNotification } from '../utils/utils.js';

const listNotifications = [
    {id: 1, type: 'default', html: {}, value: 'New course available'},
    {id: 2, type: 'urgent', html: {}, value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
];

describe('Notification component without props', () => {
    beforeEach(() => {
        render(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    });

    test('Notification renders without crashing', () => {
        const list = screen.queryByRole('list');
    
        expect(list).toBeInTheDocument();
        expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    });

    test('displays notifications with different data attributes', () => {
        const defaultNotification = screen.getByText('New course available');
        const urgentNotification = screen.getByText('New resume available');
        expect(defaultNotification).toHaveAttribute('data-notification-type', 'default');
        expect(urgentNotification).toHaveAttribute('data-notification-type', 'urgent');
    });

    test('calls the close function when "Close" button is clicked', () => {
        const closeSpy = jest.spyOn(console, 'log');
        const closeButton = screen.getByLabelText('Close');
        fireEvent.click(closeButton);
        expect(closeSpy).toHaveBeenCalledWith('Close button has been clicked');
        closeSpy.mockRestore();
    });
});

describe('Notification component with props', () => {
    test('menu item displays & Notifications doesnt when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} listNotifications={listNotifications}/>);
        const menuItem = screen.getByText('Your notifications');
        const notifications = screen.queryByRole('notification');

        expect(menuItem).toBeInTheDocument();
        expect(notifications).toBeNull();
    });

    test('menu item displays & Notifications doesnt when displayDrawer is false', () => {
        render(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        const menuItem = screen.getByText('Your notifications');
        const notifications = screen.getByText('Here is the list of notifications');
        const list = screen.getAllByRole('notice');

        expect(menuItem).toBeInTheDocument();
        expect(notifications).toBeInTheDocument();
        expect(list).toHaveLength(3);
    });

    test('renders correctly if empty array is passed', () => {
        render(<Notifications displayDrawer={true} />);
        const noNew = screen.getByText('No new notification for now');
        const list = screen.queryByText('Here is the list of notifications');
        expect(noNew).toBeInTheDocument();
        expect(list).toBeNull();
    })
});