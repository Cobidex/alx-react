import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem.js';
import close_icon from '../assets/close-icon.png';
import './Notifications.css';
import { NotificationItemShape } from './NotificationItemShape.js';

const Notification = ({ displayDrawer, listNotifications }) => {
  const close = () => {
    console.log('Close button has been clicked');
  };
  const displayStyle = { display: displayDrawer ? 'block' : 'none' }

  return (
    <Fragment>
      <div id='notification-block'>
        {listNotifications.length === 0 ? (
          <p>No new notification for now</p>
        ) : (
          <Fragment>
            <div className='menuItem'>Your notifications</div>
            <div className='Notifications' role='notification' style={ displayStyle }>
              <button onClick={close} aria-label='Close' style={ {
                position: 'absolute',
                right: 20,
                top: 20}}
              >
                <img src={close_icon} alt='close icon' style={{ width: '8px', height: '8px'}} />
              </button>
              <p>Here is the list of notifications</p>
              <ul role='list'>
                {listNotifications.map((notice) => (
                  <NotificationItem
                    key={notice.id}
                    type={notice.type}
                    value={notice.value}
                    html={notice.html}
                  />
                ))}
              </ul>
            </div>
          </Fragment>
      )}
    </div>
    </Fragment>
  );
};

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notification;