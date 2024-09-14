import React, { useState } from "react";

function InsertValueAtFirst() {
  const initialArray = [1, 2, "apple", 3, "cat", 4];
  const [array, setArray] = useState(initialArray);
  const [inputItem, setInputItem] = useState("");

  const typeInputItem = (event) => {
    setInputItem(event.target.value);
  };

  const addValue = (inputItem) => {
    setArray([inputItem, ...array]);
    setInputItem("");
  };

  const resetArray = () => {
    setArray(initialArray);
  };

  // array.unshift('word');

  console.log("4. InsertValueAtFirst:", array);
  return (
    <div className="container">
      <h2>4. Insert a Value at the Beginning</h2>
      <div>
        <p>Insert a value at the beginning of an array.</p>
        <p style={{ color: "gray" }}>
          <i>Insert any data at the beginning</i>
        </p>
        <input value={inputItem} onChange={(event) => typeInputItem(event)} />
        <button onClick={() => addValue(inputItem)}>Add</button>
        <button onClick={resetArray}>Reset</button>
        <p>
          [
          {array?.map(
            (item, index) => ` ${item}${index < array.length - 1 ? "," : ""} `
          )}
          ]
        </p>
      </div>
    </div>
  );
}

export default InsertValueAtFirst;
