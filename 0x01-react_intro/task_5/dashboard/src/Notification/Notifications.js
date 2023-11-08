import React from 'react';
import { getLatestNotification } from '../utils/utils.js';
import close_icon from '../assets/close-icon.png';
import './Notifications.css';

export default function Notification() {
  const close = () => {
    console.log('Close button has been clicked');
  };
  const createMarkup = () => {
    return {__html: getLatestNotification()};
  };
  return (
        <div className='Notifications'>
          <button onClick={close} aria-label='Close' style={ {
          position: 'absolute',
          right: 20,
          top: 20}}>
            <img src={close_icon} alt='close icon' style={{ width: '8px', height: '8px'}} />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <li data='default'>New course available</li>
            <li data='urgent'>New resume available</li>
            <li data='urgent'>
              <div dangerouslySetInnerHTML={createMarkup()} />
            </li>
          </ul>
        </div>
    )
};