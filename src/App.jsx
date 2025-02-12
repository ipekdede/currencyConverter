import "./App.css";

import Currency from "./components/Currency";
import { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Currency />
    </div>
  );
}

export default App;
