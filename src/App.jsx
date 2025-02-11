import React from "react";
import Header from "./Components/Header.jsx";
import TicketSelection from "./Components/TicketSelection.jsx";
import AttendeeDetails from "./Components/AttendeeDetails.jsx";
import Ready from "./Components/Ready.jsx";

const App = () => {
  return (
    <>
      <Header />
      <TicketSelection />
      <AttendeeDetails />
      <Ready/>
    </>
  );
};

export default App;
