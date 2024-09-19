import React, { useState } from "react";
import AddValue from "./questions/AddValue";
import RemoveLastValue from "./questions/RemoveLastValue";
import RemoveFirstValue from "./questions/RemoveFirstValue";
import InsertValueAtFirst from "./questions/InsertValueAtFirst";
import FindValue from "./questions/FindValue";
import SortArray from "./questions/SortArray";
import ReverseArray from "./questions/ReverseArray";
import FilterOutEvenValues from "./questions/FilterOutEvenValues";
import TransformValues from "./questions/TransformValues";
import SumAllValues from "./questions/SumAllValues";
import InsertValuesAt from "./questions/InsertValuesAt";
import RemoveValuesAt from "./questions/RemoveValuesAt";
import ExtractFromTo from "./questions/ExtractFromTo";

function ArrayPracticeContainer() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedButton, setSelectedButton] = useState(1);

  const toggleAccordion = (id) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(`section${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleIndicatorButton = (id) => {
    setSelectedButton(id);
  };

  return (
    <div className="practice-container">
      <div
        className={`scroll-button-container ${
          openAccordion === 1 ? "open" : ""
        }`}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <button
            key={index}
            className={`scroll-button ${
              selectedButton === index + 1 ? "selected" : ""
            }`}
            onClick={() => {
              scrollToSection(index + 1);
              toggleIndicatorButton(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <h1 style={{ margin: "0", padding: "20px", color: "#e3e3e3" }}>
        Array Data Practices
      </h1>
      {/* First Accordion */}
      <div
        onClick={() => toggleAccordion(1)}
        className={`accordion ${openAccordion === 1 ? "open" : ""}`}
      >
        Basic Array Data Manipulation
      </div>
      <div
        className={`data-board-container ${openAccordion === 1 ? "open" : ""}`}
      >
        <div className="data-board">
          <div id="section1">
            <AddValue />
          </div>
          <div id="section2">
            <RemoveLastValue />
          </div>
          <div id="section3">
            <RemoveFirstValue />
          </div>
          <div id="section4">
            <InsertValueAtFirst />
          </div>
          <div id="section5">
            <FindValue />
          </div>
          <div id="section6">
            <SortArray />
          </div>
          <div id="section7">
            <ReverseArray />
          </div>
          <div id="section8">
            <FilterOutEvenValues />
          </div>
          <div id="section9">
            <TransformValues />
          </div>
          <div id="section10">
            <SumAllValues />
          </div>
          <div id="section11">
            <InsertValuesAt />
          </div>
          <div id="section12">
            <RemoveValuesAt />
          </div>
          <div id="section13">
            <ExtractFromTo />
          </div>
        </div>
      </div>
      {/* Second Accordion */}
      <div
        onClick={() => toggleAccordion(2)}
        className={`accordion ${openAccordion === 2 ? "open" : ""}`}
      >
        Intermediate Data Manipulation
      </div>
      <div
        className={`data-board-container ${openAccordion === 2 ? "open" : ""}`}
      >
        <div className="data-board">
          <div id="section1">
            <SumAllValues />
          </div>
        </div>
      </div>
      {/* Third Accordion */}
      <div
        onClick={() => toggleAccordion(3)}
        className={`accordion ${openAccordion === 3 ? "open" : ""}`}
      >
        Complex Array Data Manipulation
      </div>
      <div
        className={`data-board-container ${openAccordion === 3 ? "open" : ""}`}
      >
        <div className="data-board">
          <div id="section1">
            <SumAllValues />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrayPracticeContainer;
