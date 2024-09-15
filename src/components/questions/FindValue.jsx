import React, { useState } from "react";

function FindValue() {
  const initialArray = [1, 5, 2, 8, 11];
  const initialResult = "?";
  const array = initialArray;
  const [result, setResult] = useState(initialResult);

  const findNumber = () => {
    setResult(array?.find((item) => item > 3));
  };

  const resetState = () => {
    setResult(initialResult);
  };
  // array.find
  // 'array.find()' method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

  console.log("5. FindValue:", array);

  return (
    <div className="container">
      <h2>5. Find Value</h2>
      <div>
        <p>Find the first value in the array that satisfies a condition.</p>
        <p style={{ color: "gray" }}>
          <i>Find the first value greater than 3</i>
        </p>
        <p className="displayed-data">
          [
          {array?.map(
            (item, index) => ` ${item}${index < array.length - 1 ? "," : ""} `
          )}
          ] = {result}
        </p>
        <button onClick={findNumber}>Find</button>
        <button onClick={resetState}>Reset</button>
      </div>
    </div>
  );
}

export default FindValue;
