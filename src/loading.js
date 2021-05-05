import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default Loading;
