import React from 'react';
import PropTypes from 'prop-types';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    let table = undefined;
    if (isHeader === true) {
        if (textSecondCell === null) {
          table = (<th id='tophead' role='rowheader' colSpan='2'>{textFirstCell}</th>);
        }

        if (textSecondCell !== null) {
           table = (
            <>
                <th className='second' role ='rowheader'>{textFirstCell}</th>
                <th className='second' role='rowheader'>{textSecondCell}</th>
            </>
            );
        }
    }

    if (isHeader === false) {
        table = (
        <>
            <td className='data' role='rowdata'>{textFirstCell}</td>
            <td className='data' role='rowdata'>{textSecondCell}</td>
        </>
        );
    }

    return (<tr role='parent'>{table}</tr>);
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
};

export default CourseListRow;