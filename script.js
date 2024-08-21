const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            alert(`${currentPlayer} venceu!`);
            return true;
        }
    }
    if (!boardState.includes('')) {
        alert('Empate!');
        return true;
    }
    return false;
}

function handleClick(event) {
    const index = event.target.dataset.index;
    if (boardState[index] || checkWinner()) return;

    boardState[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWinner()) return;

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
