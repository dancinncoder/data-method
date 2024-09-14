import React, { useState } from "react";

function RemoveLastValue() {
  const initialArray = [1, 2, 3];
  const [numbers, setNumbers] = useState(initialArray);

  const removeLastValue = () => {
    // First approach
    // let lastValue = numbers[numbers.length - 1];
    // setNumbers(numbers?.filter((number) => number !== lastValue));

    // Better approach
    setNumbers(numbers?.slice(0, -1));

    // setNumbers(numbers?.pop());
    // Why not array.pop() ?
    // Array.pop() method also direcetly modifies the original array. In the context of React, directly mutating state (e.g., using pop() on an array in state) is not recommended because React relies on immutability to detect changes and trigger re-renders. Instead, you should create a new array with the updated values to maintain immutability.

    // Array.slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end are specified as indices. The original array is not modified. '-'(negative) number indicates the last item.
  };

  const reset = () => {
    setNumbers(initialArray);
  };

  console.log("2. RemoveLastValue:", numbers);
  return (
    <div className="container">
      <h2>2. Remove Last Value</h2>
      <div>
        <p>Remove the last value from an array.</p>
        <p style={{ color: "gray" }}>
          <i>Remove last value from the array</i>
        </p>
        <button onClick={removeLastValue}>Remove</button>
        <button onClick={reset}>Reset</button>
        <p>
          [
          {numbers?.map(
            (number, index) =>
              ` ${number}${index < numbers.length - 1 ? "," : ""} `
          )}
          ]
        </p>
      </div>
    </div>
  );
}

export default RemoveLastValue;
