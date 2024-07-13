import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [currentComponent, setCurrentComponent] = useState("calculator");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmitClick = () => {
    setCurrentComponent("result");
  };

  let renderComponent;
  if (currentComponent === "calculator") {
    renderComponent = (
      <Calculator
        onSubmitClick={handleSubmitClick}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
      />
    );
  } else if (currentComponent === "result") {
    renderComponent = <Result day={day} month={month} year={year} />;
  }

  return (
    <div className="App">
      <div className="container">{renderComponent}</div>
    </div>
  );
}

export default App;
