import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combination";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayer] = useState({
    X: "Player1", 
    O: "Player2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...intialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbols =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbols =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbols =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbols &&
      firstSquareSymbols === secondSquareSymbols &&
      firstSquareSymbols === thirdSquareSymbols
    ) {
      winner = players[firstSquareSymbols];
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSqure(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handelRestart() {
    setGameTurns([]);
  }
  function handlePlayerName(symbol,newName){
    setPlayer(prevPlayers=>{
      return{
        ...prevPlayers,
        [symbol]:newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            active={activePlayer === "X"}
            onChangeName={handlePlayerName}
          ></Player>
          <Player
            name="Player 2"
            symbol="O"
            active={activePlayer === "O"}
            onChangeName={handlePlayerName}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handelRestart} />
        )}
        <GameBoard handleSelectSqure={handleSqure} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
