import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredName, setEnteredName] = useState();

  function onClickButton() {
    // console.log(playerName.current.value)
    setEnteredName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={onClickButton}>Set Name</button>
      </p>
    </section>
  );
}
