import React from "react";
import CodeWitchLogo from "../CodeWitchLogo.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <ul>
      <li>©2019 Audrea Cook</li>
        <li><Link to={'/about'}>About Us</Link></li>
      <li>
        <img src={CodeWitchLogo} alt="AudTheCodeWitch Logo" height="50px" />
      </li>
    </ul>
  );
};

export default Footer;
