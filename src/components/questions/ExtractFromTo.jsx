import React, { useState } from "react";

function ExtractFromTo() {
  const iniitialArray = ["Mike", 30, "Male", "London", 180];
  const [array, setArray] = useState(iniitialArray);

  const extractData = () => {
    const modifiedArray = array?.slice(1, 4);
    setArray(modifiedArray);
    // Array.slice() returns a shallow copy of a portion of an array into a new array object.
    // Array.slice(start index, end index but not included)
  };

  const resetArray = () => {
    setArray(iniitialArray);
  };

  console.log("13. Extract a Portion of the Array", array);
  return (
    <div className="container">
      <h2>13. Extract a Portion of the Array</h2>
      <div>
        <p>
          Extract a portion of the array from a start index to an end index.
        </p>
        <p style={{ color: "gray" }}>
          <i>Extract values from index 1 to 3</i>
        </p>
        <p className="displayed-data">
          [
          {array.map(
            (item, index) =>
              ` ${typeof item === "string" ? `'${item}'` : item}${
                index < array.length - 1 ? "," : ""
              } `
          )}
          ]
        </p>
        <button onClick={extractData}>Extract</button>
        <button onClick={resetArray}>Reset</button>
      </div>
    </div>
  );
}

export default ExtractFromTo;
