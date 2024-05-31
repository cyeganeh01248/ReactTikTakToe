import * as React from "react";
import {} from "./common-components";
import { Board, makePlay } from "./game";
import { useState } from "react";
export { App };

function App() {
  return (
    <div className="">
      <Game />
    </div>
  );
}

function Game() {
  const [board, setBoard] = useState(new Board());
  const [player, setPlayer] = useState(1);
  return (
    <>
      <div className="mt-8 w-3/4 mx-auto">
        <div className="text-center border-2 rounded-lg p-2 bg-white text-3xl font-extrabold">
          Tik-Tak-Toe
        </div>
        <div className="w-3/4 mx-auto">
          <br />
          <div className="border-2 bg-white rounded-lg text-center font-bold">
            {board.done === 0
              ? `Player ${player}'s (${player === 1 ? "X" : "O"}) Turn`
              : board.done < 3
                ? `Player ${board.done} Won!`
                : "Game Tied"}
          </div>
          <br />
          <table className="w-96 mx-auto">
            <thead />
            <tbody>
              {board.board.map((row, r) => (
                <tr key={r} className="w-32 h-32">
                  {row.map((item, c) => (
                    <td
                      key={r + "" + c}
                      className={
                        "w-16 border-2 border-black bg-gray-50 hover:bg-amber-200 cursor-pointer text-center text-6xl"
                      }
                      onClick={(_e) =>
                        makePlay(r, c, player, setPlayer, board, setBoard)
                      }
                    >
                      <span
                        className={
                          "" + board.done === item.toString() && item !== 0
                            ? "text-red-700"
                            : ""
                        }
                      >
                        {item == 0 ? "\u00A0" : item == 1 ? "X" : "O"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <button
            className="border-2 border-black w-full rounded-lg p-2 mx-auto hover:bg-gray-300 bg-gray-100"
            onClick={() => {
              setBoard(new Board());
              setPlayer(1);
            }}
          >
            Restart Game
          </button>
        </div>
      </div>
    </>
  );
}
