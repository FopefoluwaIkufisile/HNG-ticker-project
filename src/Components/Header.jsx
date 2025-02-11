import React from "react";
import Logo from "/public/logo.svg";
import Ticz from "/public/ticz.svg";
import Arrow from "/public/arrow.svg";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-icon" />
        <img src={Ticz} alt="Ticz" className="ticz" />
      </div>
      <div className="nav-links">
        <p className="nav-link-text">Events</p>
        <p className="nav-link-text">My tickets</p>
        <p className="nav-link-text">About Project</p>
      </div>
      <button className="ticket-btn">
        MY TICKETS <img src={Arrow} alt="" />
      </button>
    </nav>
  );
};

export default Header;
