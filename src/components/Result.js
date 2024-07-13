import React from "react";
import "../styles/Result.css";

export default function Result({ day, month, year }) {
  let age;
  if (year < 0) {
    age = `Birthday is Invalid!`;
  } else if (isNaN(year)) {
    age = `Birthday is Empty!`;
  } else {
    age = `Your are ${year} years, ${month} months, and ${day} days old!`;
  }

  return (
    <>
      <div className="res-gif"></div>
      <div className="res-age">{age}</div>
    </>
  );
}
