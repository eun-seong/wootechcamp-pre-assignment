const board = document.querySelector('table');
const game = document.querySelector('#game');
const newGame = document.querySelector('#newGame');
const row = [];
const col = new Array(3).fill().map(_ => []);
let currentTurn = 'O';
let bingo = false;

const changeTurn = () => {
    currentTurn = currentTurn === 'O' ? 'X' : 'O';
    return currentTurn;
}

const checkBingo = (rowNo, colNo) => {
    if (!col[rowNo][colNo].innerText) return;

    if (col[rowNo][0].innerText === currentTurn &&
        col[rowNo][1].innerText === currentTurn &&
        col[rowNo][2].innerText === currentTurn) {
        bingo = true;
        return;
    }

    if (col[0][colNo].innerText === currentTurn &&
        col[1][colNo].innerText === currentTurn &&
        col[2][colNo].innerText === currentTurn) {
        bingo = true;
        return;
    }

    if (col[0][0].innerText === currentTurn &&
        col[1][1].innerText === currentTurn &&
        col[2][2].innerText === currentTurn) {
        bingo = true;
        return;
    }

    if (col[2][0].innerText === currentTurn &&
        col[1][1].innerText === currentTurn &&
        col[0][2].innerText === currentTurn) {
        bingo = true;
        return;
    }
}

const startNewGame = () => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            col[i][j].innerText = '';
        }
    }
    bingo = false;
}

const onClick = (e) => {
    if (e.target.innerText || bingo) return;

    const clickedTd = e.target;
    clickedTd.innerText = currentTurn;

    let rowNo = row.indexOf(e.target.parentNode);
    let colNo = col[rowNo].indexOf(e.target);
    checkBingo(rowNo, colNo);

    if (bingo) {
        alert(`Game over! Winner is "${currentTurn}"`)
        return;
    }

    changeTurn();
}

const init = () => {
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        row.push(tr);

        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td');
            td.addEventListener("click", onClick);
            tr.append(td);
            col[i].push(td);
        }
        board.append(tr);
    }

    newGame.addEventListener('click', startNewGame);
}

init();