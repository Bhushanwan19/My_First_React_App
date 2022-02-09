import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");
  //   setText("bhushan");

  const handleOnchange = (event) => {
    console.log("onchange is happen");
    setText(event.target.value);
  };
  const handleClear = () => {
    let newtext = "";
    setText(newtext);
  };
  const reverseText = () => {
    let newText = text.split("").reverse().join("");

    setText(newText);
  };
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myText" className="form-label"></label>
          <textarea
            className="form-control"
            id="myText"
            value={text}
            onChange={handleOnchange}
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setText(text.toUpperCase());
            console.log("text is uppercase");
          }}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            setText(text.toLowerCase());
            console.log("text is lowercase");
          }}
        >
          Convert to Lowercase
        </button>

        <button className="btn btn-warning mx-2" onClick={reverseText}>
          Reverse Text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {text.length > 0 ? text.trim().split(" ").length : 0}
          <strong> words</strong> and {text.length} <strong>Characters</strong>
        </p>
      </div>
    </>
  );
};

export default Textform;
