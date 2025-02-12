import React, { useState, useEffect } from "react";

const TicketSelection = ({ setStep }) => {
  const [ticketType, setTicketType] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [errors, setErrors] = useState({ ticketType: "", ticketNumber: "" });

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedTicketData = JSON.parse(localStorage.getItem("ticketDetails"));
    if (savedTicketData) {
      setTicketType(savedTicketData.ticketType);
      setTicketNumber(savedTicketData.ticketNumber);
    }
  }, []);

  const handleNext = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { ticketType: "", ticketNumber: "" };

    if (!ticketType) {
      newErrors.ticketType = "Please select a ticket type!";
      valid = false;
    }
    if (!ticketNumber) {
      newErrors.ticketNumber = "Please select the number of tickets!";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Save data to localStorage
    localStorage.setItem("ticketDetails", JSON.stringify({ ticketType, ticketNumber }));


    setStep(2);
  };

  return (
    <form onSubmit={handleNext} className="ticket-select">
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
        <div className="select">
          <p className="select-ticket">Select Ticket Type:</p>
          <div className="select-box">
            {["Regular Access - Free", "VIP Access - $50", "VIPP Access - $150"].map((type) => (
              <label key={type} className="radio-label">
                <div className="text">
                  <p>{type.split(" - ")[0]}</p>
                  <p>20 left!</p>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="ticketType"
                    className="radio-input"
                    value={type}
                    checked={ticketType === type}
                    onChange={(e) => setTicketType(e.target.value)}
                  />
                  <div className="radio-custom">{type.split(" - ")[1]}</div>
                </div>
              </label>
            ))}
          </div>
          {errors.ticketType && <p className="error-message">{errors.ticketType}</p>}
        </div>
        <div className="ticket-number">
          <label htmlFor="number" className="ticket-num-select">
            Number of Tickets
          </label>
          <select
            id="number"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value)}
          >
            <option value="">Select</option>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          {errors.ticketNumber && <p className="error-message">{errors.ticketNumber}</p>}
        </div>
        <div className="nav-buttons">
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="next">Next</button>
        </div>
      </div>
    </form>
  );
};

export default TicketSelection;
