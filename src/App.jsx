import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => {
          setShow(!show);
        }}
      >
        {/* Show text Add House or Show Rentals based on state */}
        {show ? "Add House" : "Show Rentals"}
      </button>

      {/* Show component based on state */}
      {show ? <Rentals /> : <AddHouse />}
      <br />
    </div>
  );
}

export default App;