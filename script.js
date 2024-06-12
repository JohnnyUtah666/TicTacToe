const gameBoard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""]
    return {board};
})();

const playerOne = (function () {
    let name = "Player One";
    const marker = 1;
    function placeMarker(num) {
        gameBoard.board.splice(num, 1, 1);
    }
    return {placeMarker}
})();

const playerTwo = (function () {
    let name = "Player Two";
    const marker =2;
    function placeMarker(num) {
       gameBoard.board.splice(num, 1, 2);
    }
    return {placeMarker}
})();

playerOne.placeMarker(6);
playerTwo.placeMarker(4);

console.log(gameBoard.board[4]);
console.log(gameBoard.board[6]);