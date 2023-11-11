import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
    test('renders one cell with colspan set to 2 if isHeader is true &textSecondCell is null', () => {
        render(<table><CourseListRow isHeader={true} textFirstCell='test' /></table>);
        screen.debug();

        const item = screen.getAllByRole('rowheader');
        expect(item).toHaveLength(1);
        expect(item[0]).toHaveAttribute('colSpan', '2');
    });

    test('renders two cells within a tr if isHeader is false', () => {
        render(<CourseListRow isHeader={false} textFirstCell='test' />);
        screen.debug();

        const item = screen.getAllByRole('rowdata');
        const tr = screen.getByRole('parent');
        expect(item).toHaveLength(2);
        expect(tr).toBeInTheDocument();
    });
});