import { useState } from "react";
import "./App.css";
import DataTableDemo from "./components/DemoPage";
import Page from "./components/page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Page />
    </>
  );
}

export default App;
