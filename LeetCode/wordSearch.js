/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    let cur = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0]) {
                if (search(i, j, 0)) {
                    return true;
                }
            }

        }
    }

    return false;

    function search(i, j, c, visited = new Set()) {
        if (i < 0 || i === rows || j < 0 || j === cols || visited.has(`${i}-${j}`)) {
            return false;
        }
        // console.log(i, j, board[i][j], word[c], visited)
        if (c === word.length - 1 && board[i][j] === word[c]) {
            return true;
        }
        let found = true;

        visited.add(`${i}-${j}`);
        found = found && board[i][j] === word[c] && (
            search(i-1, j, c+1, visited) ||
            search(i, j-1, c+1, visited) ||
            search(i+1, j, c+1, visited) ||
            search(i, j+1, c+1, visited)
        );
        visited.delete(`${i}-${j}`);

        return found;
    }
};

console.log(
    exist(
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "ABCCED"
    )
);