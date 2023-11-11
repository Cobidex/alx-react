import React from "react";
import { render, screen } from "@testing-library/react";
import CourseList from './CourseList.js';

describe('CourseList Component', () => {
    const listCourses = [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
    ];
    test('renders renders 5 rows without crashing', () => {
        render(<CourseList listCourses={listCourses}/>);
        const topHeader = screen.getByText('Credit');
        const firstHeader = screen.getByText('Course name');
        const secondHeader = screen.getByText('Available courses');
        const rowData = screen.getAllByRole('rowdata');
        expect(topHeader).toBeInTheDocument();
        expect(firstHeader).toBeInTheDocument();
        expect(secondHeader).toBeInTheDocument();
        expect(rowData).toHaveLength(6);
    });

    test('doesnt show courses if none is passed', () => {
        render(<CourseList />);
        const text = screen.getByText('No course available yet');
        const courses = screen.queryByText('Available courses');
        const rowData = screen.queryAllByRole('rowdata');
        expect(text).toBeInTheDocument();
        expect(courses).toBeNull();
        expect(rowData).toHaveLength(0);
    })
});