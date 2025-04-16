import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="brand">
        <img src={logo} className="brand-logo" alt="logo"></img>
        <h1 className="brand-name">Computer Department</h1>
      </header>
      <div className="display-form">
        <h1>Student Access Module</h1>
        <form method='GET'>
          <h1>User Authentication</h1>
          <label for="username">Username :</label>
          <input type="text" id="username" name="username" placeholder="Username"></input>
          <label for="password">Password :</label>
          <input type="password" id="password" name="password" placeholder="Password"></input>
          <label for="birthday">Birthday :</label>
          <input type="date" id="birthday" name="birthday" placeholder="Birth Date"></input>

          <div className="button-container">
            <button type="reset">Clear Entries</button>
            <button type="submit">Login</button>
          </div>

          <p>Forgot you password? Click Here</p>
        </form>
      </div>
    </div>
  );
}

export default App;
