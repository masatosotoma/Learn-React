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

  function handlClick() {
    const nextsquare = squares.spice;
    nextsquare[0] = "X";
    setSquares(nextsquare);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={handlClick} />
        <Square value={squares[1]} onClick={handlClick} />
        <Square value={squares[2]} onClick={handlClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={handlClick} />
        <Square value={squares[4]} onClick={handlClick} />
        <Square value={squares[5]} onClick={handlClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={handlClick} />
        <Square value={squares[7]} onClick={handlClick} />
        <Square value={squares[8]} onClick={handlClick} />
      </div>
    </>
  );
}
