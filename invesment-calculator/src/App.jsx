import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

  function handleChange(inputIndetifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndetifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputValid ? (
        <Result input={userInput} />
      ) : (
        <p className="center">Please enter the duration more than zero.</p>
      )}
    </>
  );
}

export default App;
