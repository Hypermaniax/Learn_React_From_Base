import { useState, useRef } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState(null);
  const inputRef = useRef();

  function handleClick() {
    setEnteredName(inputRef.current.value);
    console.log(inputRef)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}