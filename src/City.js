import React, { useState } from "react";
import "./city.css"

function City() {
  const [value, setValue] = useState("");
  const [add, setAdd] = useState([]);

  const input = () => {
    if (value.trim() !== "" && !add.includes(value.trim())) {
      setAdd([...add, value]);
    } else {
      alert("city name already exit or input is empty");
    }
  };

  return (
    <div className="go">
      <div>
        <input
          type="text"
          placeholder="enter city"
          className="inp"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={input}>
          add
        </button>
      </div>
      <div>
        {add.map((value, ind) => (
          <li>{value}</li>
        ))}
      </div>
    </div>
  );
}

export default City;