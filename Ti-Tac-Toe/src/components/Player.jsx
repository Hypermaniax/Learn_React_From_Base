import React from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = React.useState(false);
  const [player,setPlayer] = React.useState(name)

  function handlePlayer(e){
    setPlayer(e.target.value)
  }
  function handleEditClick() {
    setEditing(Editing=>!Editing);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          // onChange for we get the value from input
          <input type="text" onChange={handlePlayer} required />
        ) : (
          <span className="player-name">{player}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
