import React, { useState } from "react";
import { render } from "react-dom";
import Button from "./components/Button/Button";
import styles from "./app.scss";

function App() {
  return (
    <Button onClick={() => alert('Hello World')}>Hello Button!</Button>
  );
}

render(<App />, document.getElementById("root"));
