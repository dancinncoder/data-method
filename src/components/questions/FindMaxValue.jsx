import React, { useState } from "react";

function SortArray() {
  const initialNumberArray = [4, -1, 66, 45, 2, 9];
  const initialStringArray = ["corn", "banana", "apple", "cider", "ham"];
  const [numberArray, setNumberArray] = useState(initialNumberArray);
  const [stringArray, setStringArray] = useState(initialStringArray);

  const sortNumberArray = () => {
    // Copy -> Sorting
    const sortedArray = [...numberArray].sort((a, b) => a - b);

    // Update the state
    setNumberArray(sortedArray);

    // setNumberArray(array?.sort());
    // Why not numberArray?.sort()
    // numberArray.sort() method modifies direcetly the original array data. Therefore, in React, for changes to trigger a re-render, the state needs to be treated as immutable. Since sort() modifies the original array, React may not detect the change and, thus, doesn't trigger a re-render.
  };

  const sortDesNumberArray = () => {
    const sortedDesArray = [...numberArray].sort((a, b) => b - a);
    setNumberArray(sortedDesArray);
  };

  const sortStringArray = () => {
    const sortedStringArray = [...stringArray].sort();
    setStringArray(sortedStringArray);
  };

  const sortDesStringArray = () => {
    const sortedDesStringArray = [...stringArray].sort((a, b) =>
      b.localeCompare(a)
    );
    setStringArray(sortedDesStringArray);

    // The localeCompare() method :
    // This method compares two strings in the current locale. The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal). The current locale is based on the language settings of the browser.
  };

  const resetNumberArray = () => {
    setNumberArray(initialNumberArray);
  };

  const resetStringArray = () => {
    setStringArray(initialStringArray);
  };

  console.log("6. SortNumberArray/SortStringArray", numberArray, stringArray);
  return (
    <div className="container">
      <h2>6. Sort Array</h2>
      <div>
        <p>Sort the values in the array in ascending order.</p>
        <p style={{ color: "gray" }}>
          <i>Sort number array in ascending order</i>
        </p>
        <p className="displayed-data">
          [
          {numberArray.map(
            (item, index) =>
              ` ${item}${index < numberArray.length - 1 ? "," : ""} `
          )}
          ]
        </p>
        <button onClick={sortNumberArray}>Sort</button>
        <button onClick={resetNumberArray}>Reset</button>
      </div>
      <div>
        <p style={{ color: "gray" }}>
          <i>Sort number array in descending order</i>
        </p>
        <p className="displayed-data">
          [
          {numberArray.map(
            (item, index) =>
              ` ${item}${index < numberArray.length - 1 ? "," : ""} `
          )}
          ]
        </p>
        <button onClick={sortDesNumberArray}>Sort</button>
        <button onClick={resetNumberArray}>Reset</button>
      </div>
      <div>
        <p style={{ color: "gray" }}>
          <i>Sort string array in ascending order</i>
        </p>
        <p className="displayed-data">
          [
          {stringArray?.map(
            (item, index) =>
              ` '${item}'${index < stringArray.length - 1 ? "," : ""} `
          )}
          ]
        </p>
        <button onClick={sortStringArray}>Sort</button>
        <button onClick={resetStringArray}>Reset</button>
      </div>
      <div>
        <p style={{ color: "gray" }}>
          <i>Sort string array in descending order</i>
        </p>
        <p className="displayed-data">
          [
          {stringArray?.map(
            (item, index) =>
              ` '${item}'${index < stringArray.length - 1 ? "," : ""} `
          )}
          ]
        </p>
        <button onClick={sortDesStringArray}>Sort</button>
        <button onClick={resetStringArray}>Reset</button>
      </div>
    </div>
  );
}

export default SortArray;
