import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [currentComponent, setCurrentComponent] = useState("calculator");

  const handleSubmitClick = () => {
    setCurrentComponent("resut");
  };

  let renderComponent;
  if (currentComponent === "calculator") {
    renderComponent = <Calculator onSubmitClick={handleSubmitClick} />;
  } else if (currentComponent === "result") {
    renderComponent = <Result />;
  }

  return (
    <div className="App">
      <div className="container">{renderComponent}</div>
    </div>
  );
}

export default App;
