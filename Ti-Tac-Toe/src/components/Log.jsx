export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} Seleted Row {turn.square.row} and Column{" "}
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
