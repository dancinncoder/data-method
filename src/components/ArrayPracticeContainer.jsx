import React from "react";
import AddValue from "./questions/AddValue";
import RemoveLastValue from "./questions/RemoveLastValue";
import RemoveFirstValue from "./questions/RemoveFirstValue";
import InsertValueAtFirst from "./questions/InsertValueAtFirst";
import FindValue from "./questions/FindValue";

function ArrayPracticeContainer() {
  return (
    <div className="practice-container">
      <h1 style={{ margin: "0", padding: "20px", color: "white" }}>
        Array Data Practices
      </h1>
      <div className="data-board">
        <AddValue />
        <RemoveLastValue />
        <RemoveFirstValue />
        <InsertValueAtFirst />
        <FindValue />
      </div>
    </div>
  );
}

export default ArrayPracticeContainer;
