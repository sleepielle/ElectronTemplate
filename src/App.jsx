import { useState } from "react";
import "./App.css";
import "./index.css";
import Toasty from "./Components/Toast";

function App() {
  return (
    <>
      <p>Electron template</p>
      <br />
      <div>
        <Toasty />
      </div>
    </>
  );
}

export default App;
