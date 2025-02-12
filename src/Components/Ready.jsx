import React from "react";
import Ticket from "/public/ticket.svg"

const Ready = ({setStep}) => {
  return (
    <form action={""} className="ready">
      <div className="header">
        <div className="header-nav">
          <p className="ticket">Ready</p>
          <p className="step">Step 3 / 3</p>
        </div>
        <div className="progress">
          <div className="progress-bar-ready"></div>
        </div>
      </div>
      <div className="ready-content">
        <div className="ready-box">
          <div className="ready-texts">
            <p className="ready-ticket">Your Ticket is Booked!</p>
            <p className="download">
              You can download or Check your email for a copy
            </p>
          </div>
          <div className="ticket-and-buttons">
            <div className="ticket-main">
                <img src={Ticket} alt="" className="ticket-img" />
            </div>
            <div className="nav-buttons">
              <button className="back" onClick={() => setStep(1)}>Book another Ticket</button>
              <button className="get">Download Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Ready;
