import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import Notifications from './Notification/Notifications.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);