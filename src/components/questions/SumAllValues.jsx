import React, { useState } from "react";

function SumAllValues() {
  const initialArray = [14, 56, 32, 1, -3];
  const initialResult = "?";
  const array = initialArray;
  const [sumResult, setSumResult] = useState(initialResult);

  const sumAllItem = () => {
    const result = array?.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    setSumResult(result);
    // The reduce() method does not change the original array.
  };

  const resetResult = () => {
    setSumResult(initialResult);
  };

  console.log("10. SumAllValues", array);

  return (
    <div className="container">
      <h2>10. Sum All Values in the Array </h2>
      <div>
        <p>Calculate the sum of all values in the array.</p>
        <p style={{ color: "gray" }}>
          <i>Sum the values</i>
        </p>
        <p className="displayed-data">
          [
          {array?.map(
            (item, index) => ` ${item}${index < array.length - 1 ? "," : ""} `
          )}
          ] = {sumResult}
        </p>
        <button onClick={sumAllItem}>Sort</button>
        <button onClick={resetResult}>Reset</button>
      </div>
    </div>
  );
}

export default SumAllValues;
