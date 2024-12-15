import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product"; 
import { use } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  //console.log(useState());
const [showDetails,setShowDetails] = useState(false);



  const increase = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

    

  return (
    <>
      <h1>Counter is {counter}</h1>
      <button className="btn btn-success me-2" onClick={increase}>
        Increase
      </button>
      <button className="btn btn-primary" onClick={toggleShowDetails}>
      {showDetails ? 'Hide Product Details' : 'Show Product Details'}
      </button>

      {showDetails && <Product />}

      < Product />
    </>
  );
}

export default App;
