import React, { useState } from "react";

function InsertValuesAt() {
  const initialArray = [4, 1, 8, 21];
  const [array, setArray] = useState(initialArray);

  const insertArray = () => {
    const newArray = [...array];
    newArray?.splice(2, 0, 3);

    setArray(newArray);
    // Array.splice() enables to remove content of an array or replace existing data of the array. However, it modifies the original array data directly, either  it is needed to make a copy of an data using spread operator or Array.slice() in React environment.
    // Array.splice(startIndex, remove count, new data to replace to existing data)
  };

  const resetArray = () => {
    setArray(initialArray);
  };

  console.log("11. InsertValuesintotheArray", array);
  return (
    <div className="container">
      <h2>11. Insert Values into the Array</h2>
      <div>
        <p>Insert Values into the Array</p>
        <p style={{ color: "gray" }}>
          <i>Insert 3 at index 2</i>
        </p>
        <p className="displayed-data">
          [
          {array?.map(
            (item, index) => ` ${item}${index < array.length - 1 ? "," : ""} `
          )}
          ]
        </p>
        <button onClick={insertArray}>Insert</button>
        <button onClick={resetArray}>Reset</button>
      </div>
    </div>
  );
}

export default InsertValuesAt;
