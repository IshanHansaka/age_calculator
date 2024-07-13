import React, { useState } from "react";
import "../styles/Calculator.css";

export default function Calculator() {
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const birthDate = new Date(date);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    years < 0
      ? setAge(`Birthday is Invalid!`)
      : setAge(
          `Your age is ${years} years, ${months} months, and ${days} days`
        );
  };

  return (
    <div className="container">
      <div className="cal-topic">
        <p>AGE CALCULATOR</p>
      </div>
      <div className="cal-form">
        <form onSubmit={handleSubmit}>
          <p>Enter your Birthday :</p>
          <div className="cal-input">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
      <div className="cal-age">{age}</div>
    </div>
  );
}
