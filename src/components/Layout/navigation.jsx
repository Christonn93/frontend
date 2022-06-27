import React from "react";
import { Link } from "react-router-dom";

function Nav() {
 return (
  <div className="site-navigation">
   <div>
    <Link to="/">
     <label className="brand">Brand Name</label>
    </Link>
   </div>
   <ul>
    <li>
     <Link to="/" className="navigation-link">
      Home
     </Link>
    </li>
    <li>
     <Link to="/about" className="navigation-link">
      About
     </Link>
    </li>
    <li>
     <Link to="/contact" className="navigation-link">
      Contact
     </Link>
    </li>
   </ul>
  </div>
 );
}

export default Nav;
