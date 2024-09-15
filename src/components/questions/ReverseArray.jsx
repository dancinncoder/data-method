import React, { useState } from "react";

function ReverseArray() {
  const initialArray = [2, 26, 1, 54, "sky", 4];
  const [array, setArray] = useState(initialArray);

  const reverseArray = () => {
    const reversedArray = [...array].reverse();
    setArray(reversedArray);
  };

  const resetArray = () => {
    setArray(initialArray);
  };

  console.log("7. Reverse Array:", array);

  return (
    <div className="container">
      <h2>7. Reverse Array</h2>
      <div>
        <p>Reverse the order of the values in the array.</p>
        <p style={{ color: "gray" }}>
          <i> Reverse the array</i>
        </p>
        <p className="displayed-data">
          [
          {array?.map(
            (item, index) =>
              ` ${typeof item === "string" ? `'${item}'` : `${item}`}${
                index < array.length - 1 ? "," : ""
              } `
          )}
          ]
        </p>
        <button onClick={reverseArray}>Reverse</button>
        <button onClick={resetArray}>Reset</button>
      </div>
    </div>
  );
}

export default ReverseArray;
