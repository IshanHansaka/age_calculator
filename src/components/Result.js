import React from "react";
import "../styles/Result.css";
import teen from "../assets/thumbs-up-832_256.gif";
import old from "../assets/PhNo.gif";
import newBorn from "../assets/dancing-baby-dance.gif";
import man from "../assets/ryan-malarkey-ryan.gif";
import empty from "../assets/image_processing20210907-12388-1k864jj-ezgif.com-crop.gif"

export default function Result({ day, month, year }) {
  let age, gif;;
  if (year < 0) {
    age = `Birthday is Invalid!`;
    gif = empty;
  } 
  else if (isNaN(year)) {
    age = `Birthday is Empty!`;
    gif = empty;
  } else {
    age = `Your are ${year} years, ${month} months, and ${day} days old!`;
    if (year < 3) {
      gif = newBorn;
    } else if (year < 18) {
      gif = teen;
    } else if (year < 50) {
      gif = man;
    } else {
      gif = old;
    }
  }

  return (
    <>
      <div className="res-gif">
        <img src={gif} alt="teen" />
      </div>
      <div className="res-age">
        <p>{age}</p>
      </div>
    </>
  );
}
