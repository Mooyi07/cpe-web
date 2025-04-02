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
      </div>
    </div>
  );
}

export default App;
