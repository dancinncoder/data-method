import React, { useState } from "react";

function FilterOutEvenValubes() {
  const initialArray = [0, 1, 2, 3, 4, 5];
  const [array, setArray] = useState(initialArray);

  const filterEvenArray = () => {
    const evenItemArray = array?.filter((item) => item % 2 === 0);
    setArray(evenItemArray);

    // Array.filter() returns a new set of array consisting of items that has passed with a specific condition. It means that it doens't modify directly the original array data.
  };

  const filterOddArray = () => {
    const oddItemArray = array?.filter((item) => item % 2 === 1);
    setArray(oddItemArray);
  };

  const resetArray = () => {
    setArray(initialArray);
  };

  console.log("8. FilterOutEvenValues", array);
  return (
    <div className="container">
      <h2>8. Filter Out Even Values</h2>
      <div>
        <p>Remove specific values from the array.</p>
        <p style={{ color: "gray" }}>
          <i>Remove all even values from the array.</i>
        </p>
        <p className="displayed-data">
          [
          {array?.map(
            (item, index) => ` ${item}${index < array.length - 1 ? `,` : ""} `
          )}
          ]
        </p>
        <button onClick={filterEvenArray}>Filter</button>
        <button onClick={resetArray}>Reset</button>
      </div>
      <div>
        <p style={{ color: "gray" }}>
          <i>Remove all odd values from the array.</i>
        </p>
        <p className="displayed-data">
          [
          {array?.map(
            (item, index) => ` ${item}${index < array.length - 1 ? `,` : ""} `
          )}
          ]
        </p>
        <button onClick={filterOddArray}>Filter</button>
        <button onClick={resetArray}>Reset</button>
      </div>
    </div>
  );
}

export default FilterOutEvenValubes;
