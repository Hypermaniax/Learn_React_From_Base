import { useState, useRef } from "react";

export default function Player() {
  const playerNew = useRef();
  const [enteredName, setEnteredName] = useState(null);

  function handleClick() {
    setEnteredName(playerNew.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input
          type="text"
          ref={playerNew}
          value={enteredName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
