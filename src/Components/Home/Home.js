import React, { useState } from "react";

import CodeHighlighter from "../CodeHighlighter/CodeHighlighter";
import Clock from "../Clock/Clock";
import Login from "../Login/Login";

function Home(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const userId = localStorage.getItem("userId");

  return (
    <div>
      {!loggedIn && !userId ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <header className="App-header">
          <Clock />
          <CodeHighlighter setLoggedIn={setLoggedIn} />
        </header>
      )}
    </div>
  );
}

export default Home;
