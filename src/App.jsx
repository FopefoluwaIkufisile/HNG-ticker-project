import React, {useState} from "react";
import Header from "./Components/Header.jsx";
import TicketSelection from "./Components/TicketSelection.jsx";
import AttendeeDetails from "./Components/AttendeeDetails.jsx";
import Ready from "./Components/Ready.jsx";

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <Header />
      {step === 1 && <TicketSelection setStep={setStep}/>}
      {step === 2 && <AttendeeDetails setStep={setStep}/>}
      {step === 3 && <Ready setStep={setStep}/>}
    </>
  );
};

export default App;
