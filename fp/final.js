const CELL_SIZE = 30;
const MAZE_SIZE = 15; 
let player = { x: 0, y: 0};
let timer; 
let timeLeft = 30; 
let maze; 
let exitPos;
let gameActive = false; 

function generateMaze() { 
    maze = Array(MAZE_SIZE)
        .fill()
        .map() => 
                Array(MAZE_SIZE)
                    .fill() any
                    .map(() => ({
                        walls: {top: true, right: true, bottom: true, left: true}
                        visited: false, 
                    })
}