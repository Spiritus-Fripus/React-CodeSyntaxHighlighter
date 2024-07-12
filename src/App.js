import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./firebase.js";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
