import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VillageDetails from "./pages/VillageDetails";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // updated import
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Assuming Navbar should be rendered on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Corrected: component -> element */}
        <Route path="/village-details" element={<VillageDetails />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
