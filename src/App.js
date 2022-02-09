import React from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="WordCounter" />
      <Textform heading="Enter The Text here to analyze" />
    </>
  );
}
export default App;
