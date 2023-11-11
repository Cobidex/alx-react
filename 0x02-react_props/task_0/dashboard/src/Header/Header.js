import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <>
          <div className='App-header' role='banner'>
            <div id='logo' data-testid="logo"></div>
            <h1>School Dashboard</h1>
          </div>
        </>
    );
};