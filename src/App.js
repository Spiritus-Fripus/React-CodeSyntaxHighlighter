import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./firebase/firebase";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { auth } from "./firebase/firebase";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App-header">
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
