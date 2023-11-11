import React from 'react';
import './Login.css';

export default function() {
    return (
        <>
          <div className='App-body' role='main'>
            <p>Login to access the full dashboard</p>
            <form>
              <label htmlFor='email'>Email: </label>
              <input type='email' id='email' name='email' data-testid="email-input" required />
              <label htmlFor='password'> Password: </label>
              <input type='password' id='password' name='password' data-testid="password-input" required />
              <button>OK</button>
            </form>
          </div>
        </>
    );
}