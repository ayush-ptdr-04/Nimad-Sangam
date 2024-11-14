import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Nimad Sangam</h1>
      <input type="text" placeholder="Search..." class="search-input" />

      <div className="nav-icons">
        <a href="/profile">Profile</a>
        <a href="/add-listing">Add Listing</a>
        <a href="/help">Help</a>
      </div>
    </nav>
  );
}

export default Navbar;
