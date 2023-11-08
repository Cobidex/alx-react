import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <>
      <div className='App-header' role='banner'>
        <div id='logo'></div>
        <h1>School Dashboard</h1>
      </div>
      <div className='App-body' role='main'>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' name='email' required />
          <label htmlFor='password'> Password: </label>
          <input type='password' id='password' name='password' required />
          <button>OK</button>
        </form>
      </div>
      <div className='App-footer' role='contentinfo'>
        <p>{ `Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
      </div>
    </>
  );
}

export default App;
