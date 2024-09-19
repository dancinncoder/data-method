import React, { useState } from "react";

function RemoveValuesAt() {
  const initialArray = [11, 22, 33, 44, 55];
  const [array, setArray] = useState(initialArray);

  const removeValue = () => {
    const newArray = [...array];
    newArray?.splice(2, 1);
    setArray(newArray);
  };

  const resetArray = () => {
    setArray(initialArray);
  };

  console.log("12. RemoveValuesFromTheArray ", array);
  return (
    <div className="container">
      <h2>12. Remove Values from the Array </h2>
      <div>
        <p>Remove Values from the Array </p>
        <p style={{ color: "gray" }}>
          <i>Remove value at index 2</i>
        </p>
        <p className="displayed-data">
          [
          {array.map(
            (item, index) => ` ${item}${index < array.length - 1 ? "," : ""} `
          )}
          ]
        </p>
        <button onClick={removeValue}>Remove</button>
        <button onClick={resetArray}>Reset</button>
      </div>
    </div>
  );
}

export default RemoveValuesAt;
