import React from "react";
import Logo from "/public/logo.svg";
import Ticz from "/ticz.svg";
import Arrow from "/public/arrow.svg";

const Header = ({setAbout, setStep, setTicket}) => {
  const clickForAbout = () => {
    setAbout(true);
    setStep(0)
    setTicket(false)
}
  const clickForMain = () => {
    setAbout(false);
    setStep(1);
    setTicket(false);
}
  const clickForTickets = () => {
    setAbout(false);
    setStep(0)
    setTicket(true);
}
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-icon" />
        <img src={Ticz} alt="Ticz" className="ticz" />
      </div>
      <div className="nav-links">
        <p className="nav-link-text" onClick={clickForMain}>Events</p>
        <p className="nav-link-text" onClick={clickForTickets}>My tickets</p>
        <p className="nav-link-text" onClick={clickForAbout}>About Project</p>
      </div>
      <button className="ticket-btn">
        MY TICKETS <img src={Arrow} alt="" />
      </button>
    </nav>
  );
};

export default Header;
