import React, {useState} from "react";
import Header from "./Components/Header.jsx";
import TicketSelection from "./Components/TicketSelection.jsx";
import AttendeeDetails from "./Components/AttendeeDetails.jsx";
import Ready from "./Components/Ready.jsx";
import About from "./Components/About.jsx";
import Tickets from "./Components/Tickets.jsx";

const App = () => {
  const [step, setStep] = useState(1);
  const [about, setAbout] = useState(false);
  const [ticket, setTicket] = useState(false);

  return (
    <>
      <Header setAbout={setAbout} setStep={setStep} setTicket={setTicket}/>
      {step === 1 && <TicketSelection setStep={setStep}/>}
      {step === 2 && <AttendeeDetails setStep={setStep}/>}
      {step === 3 && <Ready setStep={setStep}/>}
      {about && <About setAbout={setAbout}/>}
      {ticket && <Tickets setTicket={setTicket}/>}
    </>
  );
};

export default App;
