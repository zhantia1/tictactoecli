const readline = require('readline');

class TicTacToe {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.horizontal = [0, 0, 0];
    this.vertical = [0, 0, 0];
    this.turn = 1;
    this.won = false;
  }

  async playMove() {
    const inputter = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    const answer1 = await inputter.question('please enter row coordinates', (row) => {
      return row;
    });

    const answer2 = await inputter.question('please enter col coordinates', (col) => {
      return col;
    });

    console.log(answer1, answer2);
    return [answer1, answer2];

    // inputter.question('please enter the row coordinate: ', (row) => {
    //   inputter.question('please enter the column coordinate: ', (column) => {
    //     this.play(row, column);
    //   })
    // })
  }

  play(i, j) {
    let piece = this.turn;
    // toggle piece on board
    console.log(this.board[i][j]);
    if (this.board[i][j] === 0) {
      this.board[i][j] = piece;
      this.horizontal[i] += piece;
      this.vertical[j] += piece;
      // check win
      this.checkWin(i, j);
      // toggle turn
      this.turn = this.turn === 1 ? -1 : 1;
    } else {
      console.log('error please try again');
    }
  }

  checkWin(i, j) {
    // check horizontal
    let horizontalCheck = this.horizontal[i];
    let verticalCheck = this.vertical[j];

    if (horizontalCheck === 3 || horizontalCheck === -3) {
      this.won = true;
      console.log('won')
    }
    // check vertical
    if (verticalCheck === 3 || verticalCheck === -3) {
      this.won = true;
      console.log('won')
    }

    // check majDiag
    // check minDiag
  }

}

let game = new TicTacToe;
while (!game.won) {
  game.playMove();
}