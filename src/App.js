import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./firebase.js";
import logo from "./logo.svg";
import Clock from "./Components/Clock/Clock";
import CodeHighlighter from "./Components/CodeHighlighter/CodeHighlighter";

function Logo(props) {
  return <img src={props.url} className="App-logo" alt="Logo" />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo url={logo} />
        <Clock />
        <CodeHighlighter />
      </header>
    </div>
  );
}

export default App;
