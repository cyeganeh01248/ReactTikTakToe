export { Board, makePlay };

class Board {
  board: number[][];
  done: number;

  constructor() {
    this.board = [];
    for (let r = 0; r < 3; r++) {
      let row = [];
      for (let c = 0; c < 3; c++) {
        row.push(0);
      }
      this.board.push(row);
    }
    this.done = 0;
  }
}

function makePlay(
  r: number,
  c: number,
  player: number,
  setPlayer: (value: (prevState: number) => number) => void,
  board: Board,
  setBoard: (value: (prevState: Board) => Board) => void,
) {
  if (board.done !== 0) return;
  if (board.board[r][c] !== 0) return;

  board.board[r][c] = player;

  let found = 0;
  let notDone = true;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      notDone = notDone && board.board[r][c] !== 0;
    }
  }
  if (notDone) {
    found = 3;
  }
  for (let r = 0; r < 3; r++) {
    if (
      board.board[r][0] !== 0 &&
      board.board[r][0] === board.board[r][1] &&
      board.board[r][1] === board.board[r][2]
    ) {
      found = board.board[r][0];
      break;
    }
  }

  for (let c = 0; c < 3; c++) {
    if (
      board.board[0][c] !== 0 &&
      board.board[0][c] === board.board[1][c] &&
      board.board[1][c] === board.board[2][c]
    ) {
      found = board.board[0][c];
      break;
    }
  }
  if (
    board.board[0][0] !== 0 &&
    board.board[0][0] === board.board[1][1] &&
    board.board[1][1] === board.board[2][2]
  ) {
    found = board.board[0][0];
  }

  if (
    board.board[2][0] !== 0 &&
    board.board[2][0] === board.board[1][1] &&
    board.board[1][1] === board.board[0][2]
  ) {
    found = board.board[2][0];
  }

  board.done = found;
  setPlayer((player) => (player == 1 ? 2 : 1));
  setBoard((_prevBoard) => {
    return board;
  });
  console.log(board);
}
