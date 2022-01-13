import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ReactPortalPage from "./pages/ReactPortalPage";
import SomePage from "./pages/SomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/react-portal" element={<ReactPortalPage />} />
          <Route exact path="/somepage" element={<SomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
