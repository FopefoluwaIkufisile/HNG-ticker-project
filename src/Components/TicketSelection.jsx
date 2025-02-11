import React from "react";

const TicketSelection = () => {
  return (
    <form action={""} className="ticket-select">
      <div className="header">
        <div className="header-nav">
          <p className="ticket">Ticket Selection</p>
          <p className="step">Step 1 / 3</p>
        </div>
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="content">
        <div className="section-title">
          <p className="techember">Techember Fest ”25</p>
          <p className="join">
            Join us for an unforgettable experience at <br /> [Event Name]!
            Secure your spot now.
          </p>
          <div className="details">
            <p>📍 [Event Location]</p>
            <span>||</span>
            <p>March 15, 2025 | 7:00 PM</p>
          </div>
        </div>
        <div className="progress"></div>
        <div className="select">
          <p className="select-ticket">Select Ticket Type:</p>
          <div className="select-box">
            <label className="radio-label label-fill">
              <div className="text">
                <p>Regular Access</p>
                <p>20 left!</p>
              </div>
              <div className="radio">
                {" "}
                <input
                  type="radio"
                  name="option"
                  className="radio-input"
                  value="option1"
                />
                <div className="radio-custom">Free</div>
              </div>
            </label>
            <label className="radio-label">
              <div className="text">
                <p>VIP Access</p>
                <p>20 left!</p>
              </div>
              <div className="radio">
                {" "}
                <input
                  type="radio"
                  name="option"
                  className="radio-input"
                  value="option1"
                />
                <div className="radio-custom">$50</div>
              </div>
            </label>
            <label className="radio-label">
              <div className="text">
                <p>VIPP Access</p>
                <p>20 left!</p>
              </div>
              <div className="radio">
                {" "}
                <input
                  type="radio"
                  name="option"
                  className="radio-input"
                  value="option1"
                />
                <div className="radio-custom">$150</div>
              </div>
            </label>
          </div>
        </div>
        <div className="ticket-number">
          <label htmlFor="number" className="ticket-num-select">
            {" "}
            Number of Tickets
          </label>
          <select id="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="nav-buttons">
          <button className="cancel">Cancel</button>
          <button className="next">Next</button>
        </div>
      </div>
    </form>
  );
};

export default TicketSelection;
