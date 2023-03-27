import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isAdd, setIsAdd] = useState(true);
  return (
    <header className="navbar">
      <nav>
        <div className="title">
          <Link to="/" className="link" onClick={() => setIsAdd(true)} >
            My Contact Book
          </Link>
        </div>
        <div>
          <div>
            {isAdd && (
              <Link
                to="/add"
                className="link_btn"
                onClick={() => setIsAdd(false)}
              >
                Add Contact
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
