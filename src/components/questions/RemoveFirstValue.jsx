import React, { useState } from "react";

function RemoveFirstValue() {
  const initialArray = ["London", "Paris", 500, 24, 98];
  const [array, setArray] = useState(initialArray);

  const removeFirstValue = () => {
    setArray(array?.slice(1, -1));
  };

  const resetArray = () => {
    setArray(initialArray);
  };

  // array.shift();

  console.log("3. RemoveFirstValue:", array);

  return (
    <div className="container">
      <h2>3. Remove First Value</h2>
      <div>
        <p>Remove the first value from an array.</p>
        <p style={{ color: "gray" }}>
          <i>Remove the first value from an array.</i>
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
        <button onClick={removeFirstValue}>Remove</button>
        <button onClick={resetArray}>Reset</button>
      </div>
    </div>
  );
}

export default RemoveFirstValue;
