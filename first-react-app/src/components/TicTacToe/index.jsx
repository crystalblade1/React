import { useState } from "react";

function TicTacToe() {
  const [newgame, setNewgame] = useState(Array(9).fill(""));
  const [isFirstTurn, setIsFirstTurn] = useState(true);
  const [playerx, setPlayerx] = useState(false);
  const [playero, setPlayero] = useState(false);
  const [draw, setDraw] = useState(false);

  function play(index) {
    if (newgame[index] !== "") {
      return;
    }

    const playSession = isFirstTurn ? "O" : "X";
    setIsFirstTurn(!isFirstTurn);
    played(index, playSession);
  }

  function played(index, value) {
    const updatedGame = [...newgame];
    updatedGame[index] = value;
    setNewgame(updatedGame);

    if (checkWinner(updatedGame)) {
      setPlayerx(true);
    } else if (updatedGame.every((cell) => cell !== "")) {
      setDraw(true); //check for draw
    }
  }

  function checkWinner(updatedGame) {
    // Define winning combinations
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Horizontal
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Vertical
      [0, 4, 8],
      [2, 4, 6], // Diagonal
    ];

    // Iterate through winning combinations
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      // Check if all cells in the combination have the same value and are not empty
      if (
        updatedGame[a] === "X" &&
        updatedGame[a] === updatedGame[b] &&
        updatedGame[b] === updatedGame[c]
      ) {
        return setPlayerx(true); // Return true if a winning condition is found
      } else if (
        updatedGame[a] === "O" &&
        updatedGame[a] === updatedGame[b] &&
        updatedGame[b] === updatedGame[c]
      ) {
        return setPlayero(true);
      }
    }
  }

  return (
    <div class="main-container">
      <div class="grid-container">
        {newgame.map((value, index) => (
          <div
            key={index}
            className={`grid-item g${index + 1}`}
            onClick={() => play(index)}
          >
            {value}
          </div>
        ))}

        <div class="grid-item g1" onClick={() => play(0)}></div>
        <div class="grid-item g2" onClick={() => play(1)}></div>
        <div class="grid-item g3" onClick={() => play(2)}></div>
        <div class="grid-item g4" onClick={() => play(3)}></div>
        <div class="grid-item g5" onClick={() => play(4)}></div>
        <div class="grid-item g6" onClick={() => play(5)}></div>
        <div class="grid-item g7" onClick={() => play(6)}></div>
        <div class="grid-item g8" onClick={() => play(7)}></div>
        <div class="grid-item g9" onClick={() => play(8)}></div>
      </div>{" "}
      {playerx && <h1 className="progress">Player X won! </h1>}
      {draw && <h1 className="progress">It's a draw</h1>}
      {playero && <h1 className="progress">Player O won! </h1>}
      <button
        onClick={() => {
          setNewgame(Array(9).fill(""));
          setPlayerx(false);
          setDraw(false);
          setPlayero(false);
        }}
        id="restart-button"
      >
        Restart
      </button>
    </div>
  );
}

export default TicTacToe;
