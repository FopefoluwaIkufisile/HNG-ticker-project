import React, { useEffect, useState } from "react";

const Ready = ({ setStep }) => {
  const [attendeeData, setAttendeeData] = useState(null);
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const savedAttendeeData = JSON.parse(localStorage.getItem("attendeeDetails"));
    const savedTicketData = JSON.parse(localStorage.getItem("ticketDetails"));

    if (savedAttendeeData) setAttendeeData(savedAttendeeData);
    if (savedTicketData) setTicketData(savedTicketData);
  }, []);

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
              You can download or check your email for a copy.
            </p>
          </div>
          <div className="ticket-and-buttons">
            <div className="ticket-main">
              <div className="top-section">
                <div className="event-box">
                  <div className="event-details">
                    <p className="techember-ready">Techember Fest ’25</p>
                    <p className="address">📍 04 Rumens road, Ikoyi, Lagos</p>
                    <p className="date">📅 March 15, 2025 | 7:00 PM</p>
                  </div>
                  <div
                    className="event-image"
                    style={{
                      backgroundImage: attendeeData?.imageURL
                        ? `url(${attendeeData.imageURL})`
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="event-summary">
                    <div className="name-and-email">
                      <div className="event-name">
                        <p className="enter">Enter your Name</p>
                        <p className="data">{attendeeData?.name || "N/A"}</p>
                      </div>
                      <div className="event-email">
                        <p className="enter">Enter your Email</p>
                        <p className="data">{attendeeData?.email || "N/A"}</p>
                      </div>
                    </div>
                    <div className="ticket-type-and-number">
                      <div className="ticket-type">
                        <p className="enter">Ticket Type</p>
                        <p className="data">{ticketData?.ticketType || "N/A"}</p>
                      </div>
                      <div className="ticket-forr">
                        <p className="enter">Ticket for:</p>
                        <p className="data">{ticketData?.ticketNumber || "N/A"}</p>
                      </div>
                    </div>
                    <div className="special-request">
                      <p className="enter">About the Project</p>
                      <p className="data">{attendeeData?.about || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qr-code"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-buttons">
      <button className="back" onClick={() => setStep(1)}>
        Book another Ticket
      </button>
      <button className="get">Download Ticket</button>
    </div>
    </form>
  );
};

export default Ready;
