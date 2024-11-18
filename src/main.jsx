import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import App from "./App";
import HomePage from "./HomePage";
import Contactanos from "./Contactanos";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<App/>} />
        <Route path="/contactanos" element={<Contactanos/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);