import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
    return (
        value 
        ? (<li role='notice' data-notification-type={type} >{value}</li>)
        : (<li role='notice' data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
    );
}

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: {},
  };
  
  NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
  };