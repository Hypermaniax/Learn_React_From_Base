const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handleSelectSqure, turns }) {
  let gameBoard = intialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSqure(rowIndex, colIndex)} disabled = {playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

// const [gameBoard, setGameBoard] = React.useState(intialGameBoard);

// function handleSelect (rowIndex,colIndex){
//   setGameBoard((prevBoard)=>{
//     const updateBoard = [...prevBoard.map(array=>[...array])]
//     updateBoard [rowIndex] [colIndex] = turn
//     return updateBoard
//   })
//   handleSelectSqure()
// }
