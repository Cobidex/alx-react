import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notification/Notifications.js';
import { getLatestNotification } from '../utils/utils.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';
import './App.css';

const App = ({ isLoggedIn }) => {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  const listNotifications = [
    {id: 1, type: 'default', html: {}, value: 'New course available'},
    {id: 2, type: 'urgent', html: {}, value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}, value: null}
  ];

  return (
    <>
      <Notifications listNotifications={listNotifications}/>
      <Header />
      {isLoggedIn ? (
        <CourseList listCourses={listCourses} />
      ) : (
      <Login />
      )}
      <Footer />
    </>
  );
}

App.defaultprops = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;