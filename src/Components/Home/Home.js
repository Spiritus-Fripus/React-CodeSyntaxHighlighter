import React from "react";

import CodeHighlighter from "../CodeHighlighter/CodeHighlighter";
import Clock from "../Clock/Clock";

function Home(props) {
  return (
    <div>
      <header className="App-header">
        <Clock />
        <CodeHighlighter />
      </header>
    </div>
  );
}

export default Home;
