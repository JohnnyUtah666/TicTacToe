const gameBoard = (function () {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    return {board};
})();

const playerOne = (function () {
    let name = "Player One";
    const marker = 1;
    function placeMarker(num) {
        if (gameBoard.board[num] == 0){
            gameBoard.board.splice(num, 1, 1);
        } else if (gameBoard.board[num].value == 1 || gameBoard.board[num].value ==2) {
            return;
        }
    }
    return {placeMarker}
})();

const playerTwo = (function () {
    let name = "Player Two";
    const marker =2;
    function placeMarker(num) {
       if (gameBoard.board[num] == 0) {
       gameBoard.board.splice(num, 1, 2);
       } else if (gameBoard.board[num].value == 1 || gameBoard.board[num].value == 2) {
        return;
       }
    }
    return {placeMarker}
})();

function game () {
    let isTurn = playerOne;

};

playerOne.placeMarker(6);
playerTwo.placeMarker(4);
playerOne.placeMarker(3);
playerTwo.placeMarker(0);
playerOne.placeMarker(1);

console.log(gameBoard.board[4]);
console.log(gameBoard.board[6]);
console.log(gameBoard.board[3]);
console.log(gameBoard.board[0]);
console.log(gameBoard.board[1]);
