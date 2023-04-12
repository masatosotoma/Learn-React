import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={handleClick} />
        <Square value={squares[1]} onClick={handleClick} />
        <Square value={squares[2]} onClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={handleClick} />
        <Square value={squares[4]} onClick={handleClick} />
        <Square value={squares[5]} onClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={handleClick} />
        <Square value={squares[7]} onClick={handleClick} />
        <Square value={squares[8]} onClick={handleClick} />
      </div>
    </>
  );
}
