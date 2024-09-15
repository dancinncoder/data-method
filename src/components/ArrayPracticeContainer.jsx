import React from "react";
import AddValue from "./questions/AddValue";
import RemoveLastValue from "./questions/RemoveLastValue";
import RemoveFirstValue from "./questions/RemoveFirstValue";
import InsertValueAtFirst from "./questions/InsertValueAtFirst";
import FindValue from "./questions/FindValue";
import SortArray from "./questions/SortArray";
import ReverseArray from "./questions/ReverseArray";

function ArrayPracticeContainer() {
  return (
    <div className="practice-container">
      <h1 style={{ margin: "0", padding: "20px", color: "#e3e3e3" }}>
        Array Data Practices
      </h1>
      <div className="data-board">
        <AddValue />
        <RemoveLastValue />
        <RemoveFirstValue />
        <InsertValueAtFirst />
        <FindValue />
        <SortArray />
        <ReverseArray />
      </div>
    </div>
  );
}

export default ArrayPracticeContainer;
