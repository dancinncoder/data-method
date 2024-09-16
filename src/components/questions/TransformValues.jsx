import React, { useState } from "react";

function TransformValues() {
  const initialArray = [10, 20, 30, 40, 50];
  const [array, setArray] = useState(initialArray);

  const transformValues = () => {
    const transformedArray = array?.map((number) => number * 2);
    setArray(transformedArray);
    // Array.map() return a new set of array, iterating every single item in the array and make the same transformation on each item. Also, this method doesn't modify directly the original data.
  };

  const resetArray = () => {
    setArray(initialArray);
  };

  console.log("9. TransformValues", array);

  return (
    <div className="container">
      <h2>9. Transform Values in the Array</h2>
      <div>
        <p>Double each value in the array.</p>
        <p style={{ color: "gray" }}>
          <i>Double each value</i>
        </p>
        <p className="displayed-data">
          [
          {array?.map(
            (item, index) => ` ${item}${index < array.length - 1 ? "," : ""} `
          )}
          ]
        </p>
        <button onClick={transformValues}>Sort</button>
        <button onClick={resetArray}>Reset</button>
      </div>
    </div>
  );
}

export default TransformValues;
