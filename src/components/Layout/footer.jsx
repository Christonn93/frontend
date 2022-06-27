import React from "react";
import List from "../utils/list_component";


function Footer() {
 return (
  <div className="site-footer">
    <div className="footer-box">
    <List />
    </div>
    <div className="footer-box">
      <p>Copyright Christopher Tønnesland</p>
    </div>
  </div>
 );
}

export default Footer;
