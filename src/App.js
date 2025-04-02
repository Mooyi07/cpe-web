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
        <form>
          <h1>User Authentication</h1>
          <label for="username">Username :</label><br></br>
          <input type="text" id="username" name="username" placeholder="Username"></input><br></br>
          <label for="password">Password :</label><br></br>
          <input type="password" id="password" name="password" placeholder="Password"></input><br></br>
          <label for="birthday">Birthday :</label><br></br>
          <input type="date" id="birthday" name="birthday" placeholder="Birth Date"></input><br></br>
        </form>
      </div>
    </div>
  );
}

export default App;
