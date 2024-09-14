import React, { useState } from "react";

function AddValue() {
  const [numbers, setNumbers] = useState([]);
  const [freeNumber, setFreeNumber] = useState("");

  const addNumber = () => {
    setNumbers([...numbers, 1]);
  };

  const addFreeNumber = (freeNumber) => {
    if (freeNumber !== "") {
      setNumbers([...numbers, Number(freeNumber)]);
      setFreeNumber("");
    }

    // WHY NOT : const push = numbers?.push(freeNumber);
    // In JavaScript, the push() method modifies the original array and returns the new length of the array, not the updated array itself.

    //push() mutates the original numbers array. React relies on immutability to detect changes in state and trigger re-renders. Mutating the array directly means React might not detect the change, leading to unexpected behavior.

    //Therfore, in this case, using spreead operator would be the right way to create a new copied-array with the additional value.
  };

  const resetArray = () => {
    setNumbers([]);
  };

  const typeFreeNumber = (event) => {
    setFreeNumber(event.target.value);
  };

  console.log("1. AddValue:", numbers);
  return (
    <div className="container">
      <h2>1. Add Value</h2>
      <div>
        <p>Add a value to the end of an array.</p>
        <p style={{ color: "gray" }}>
          <i>Add 1 to the array</i>
        </p>
        <button onClick={addNumber}>Add 1</button>
        <button onClick={resetArray}>Reset</button>
        <p>
          [
          {numbers.map(
            (number, index) =>
              ` ${number}${index < numbers.length - 1 ? "," : ""} `
          )}
          ]
        </p>
      </div>
      <div>
        <p style={{ color: "gray" }}>
          <i>Add number to the array</i>
        </p>
        <input value={freeNumber} onChange={(event) => typeFreeNumber(event)} />
        <button
          onClick={() => addFreeNumber(freeNumber)}
          // About 'onClick'?
          // Depends the way 'onClick' handler is setup can affect the timing and the behavior of function calls.

          // 1) onClick={addFreeNumber} : this approach passes the reference of the 'addFreeNumber' function direcetly to 'onClick'. Therefore, the function is called when the button is clicked.

          // 2) onClick={() => addFreeNumber()} : this approach calls 'addFreeNumber()' with the desired parameters when the button is clicked. This is used when there is need to add additional logic, conditional function calls, pass parameter.
        >
          Add
        </button>
        <p>
          [
          {numbers.map(
            (number, index) =>
              ` ${number}${index < numbers.length - 1 ? "," : ""} `
          )}
          ]
        </p>
      </div>
    </div>
  );
}

export default AddValue;
