import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem.js';

describe('NotificationItem component', () => {
    test('renders correctly with props', () => {
        const type = 'default';
        const value = 'test';

        render(<NotificationItem type={type} value={value} />);
        screen.debug();
        const item = screen.getAllByRole('notice');
        const text = screen.getByText('test');
        expect(item[0]).toHaveAttribute('data-notification-type', 'default');
        expect(text).toBeInTheDocument();
    });

    test('renders with dangerouslySetInnerHTML', () => {
        const type = 'default';
        const html = { __html: '<u>test</u>' };
        render(<NotificationItem type={type} html={html} />);
        const htmlText = screen.getByText('test');
        expect(htmlText).toBeInTheDocument();
    });
});