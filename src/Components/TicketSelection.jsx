import React, { useState, useEffect } from "react";

const TicketSelection = ({ setStep }) => {
  const [ticketType, setTicketType] = useState("");
  const [ticketNumber, setTicketNumber] = useState("1");
  const [errors, setErrors] = useState({
    ticketType: "",
    ticketNumber: "",
  });

  // Load saved data from localStorage on page load
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("ticketSelection"));
    if (savedData) {
      setTicketType(savedData.ticketType || "");
      setTicketNumber(savedData.ticketNumber || "1");
    }
  }, []);

  // Save data to localStorage when ticket type or number changes
  useEffect(() => {
    if (ticketType && ticketNumber) {
      localStorage.setItem("ticketSelection", JSON.stringify({ ticketType, ticketNumber }));
    }
  }, [ticketType, ticketNumber]);

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
  };

  const handleTicketNumberChange = (e) => {
    setTicketNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      ticketType: "",
      ticketNumber: "",
    });

    let valid = true;
    const newErrors = { ticketType: "", ticketNumber: "" };

    // Validate ticket type selection
    if (!ticketType) {
      newErrors.ticketType = "Please select a ticket type!";
      valid = false;
    }

    // Validate ticket number selection
    if (!ticketNumber) {
      newErrors.ticketNumber = "Please select the number of tickets!";
      valid = false;
    }

    // If any validation error, update the error state and return
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Log data when validation passes
    console.log({
      ticketType,
      ticketNumber,
    });

    // Proceed to next section
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-select">
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
            Join us for an unforgettable experience at <br /> [Event Name]! Secure your spot now.
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
            <label className="radio-label label-fill">
              <div className="text">
                <p>Regular Access</p>
                <p>20 left!</p>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="ticketType"
                  value="free"
                  checked={ticketType === "Free"}
                  onChange={handleTicketTypeChange}
                  className="radio-input"
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
                <input
                  type="radio"
                  name="ticketType"
                  value="vip"
                  checked={ticketType === "vip"}
                  onChange={handleTicketTypeChange}
                  className="radio-input"
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
                <input
                  type="radio"
                  name="ticketType"
                  value="vipp"
                  checked={ticketType === "vipp"}
                  onChange={handleTicketTypeChange}
                  className="radio-input"
                />
                <div className="radio-custom">$150</div>
              </div>
            </label>
          </div>
          {errors.ticketType && <p className="error-message">{errors.ticketType}</p>}
        </div>

        <div className="ticket-number">
          <label htmlFor="ticketNumber" className="ticket-num-select">
            Number of Tickets
          </label>
          <select
            id="ticketNumber"
            value={ticketNumber}
            onChange={handleTicketNumberChange}
          >
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
