import getRandomNumberInInterval from "../../getRandomNumberInInterval";
import Cell from "./cell";

export default class Grid {
    columns: number;
    rows: number;
    grid: Cell[][];
    visitedStack: Cell[] = []

    constructor(columns: number, rows: number) {
        this.columns = columns;
        this.rows = rows;
        this.grid = []

        this.generateGrid();
        this.setNeighbors();
    }

    /**
     * populates a two-dimensional array with Cell objects
     **/
    generateGrid(): void {
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []
            for (let col = 0; col < this.columns; col++) {
                const cell = new Cell({ x: col, y: row })
                this.grid[row][col] = cell;
            }
        }
    }

    /**
     * Generates a maze with a guaranteed path from start to end node, using recursive backtracking.
     * Pseudocode reference: https://en.wikipedia.org/wiki/Maze_generation_algorithm
     **/
    generateMaze(cell: Cell) {
        // Fill grid will only walls if it is completely void of any walls
        if (this.grid.every(row => row.every(cell => !cell.isWall))) {
            this.fillGridWithWalls();
        }

        // The current cell has no unvisited neighbors
        if (cell.shouldBacktrack()) {

            // Pop cells of the stack and check if they have unvisited neighbors
            while (this.visitedStack.length > 0) {
                const cell = this.visitedStack.pop();

                if (cell == undefined) {
                    return
                }

                for (const neighbor of cell.neighbors) {
                    if (!neighbor.isVisited && neighbor.isWall) {
                        this.generateMaze(neighbor)
                    }
                }
            }
        }

        this.visit(cell)
        cell.isWall = false;

        for (const neighbor of cell.neighbors) {
            if (!neighbor.isVisited && neighbor.isAvailable(cell)) {
                this.visit(neighbor)

                this.generateMaze(neighbor)
            }
        }
    }

    /**
     * Filles the current grid with walls. Used before creating a maze.
     **/
    private fillGridWithWalls() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                this.grid[row][col].isWall = true;
            }
        }
    }

    /**
     * Resets grid to default state.
     **/
    reset() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                this.grid[row][col].isWall = false;
            }
        }
    }

    /**
     * Visits a cell. Updates the `visitedStack` to facilitate for backtracking when needed.
     **/
    visit(cell: Cell) {
        cell.visit()

        // Add cell to stack to facilitate for backtracking later
        this.visitedStack.push(cell)
    }

    /**
     * Sets the neighbor cells of all cells.
     **/
    private setNeighbors() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                const cell = this.grid[row][col];

                // Find and set neighbors per cell
                const neighbors = this.getCellNeighbors(cell)
                cell.neighbors = neighbors
            }
        }
    }

    /**
     * Gets all neighbors for a given cell.
     **/
    getCellNeighbors(cell: Cell): Cell[] {
        const neighbors: Cell[] = []

        for (let col = cell.x - 1; col <= cell.x + 1; col++) {
            for (let row = cell.y - 1; row <= cell.y + 1; row++) {
                // Skip diagonal neighbor cells above current cell
                if ((row == cell.y - 1 && (col == cell.x - 1 || col == cell.x + 1))) {
                    continue;
                }
                // Skip diagonal neighbor cells below current cell
                if ((row == cell.y + 1 && (col == cell.x - 1 || col == cell.x + 1))) {
                    continue;
                }
                // Currently visiting the cell. Do nothing.
                if (row == cell.y && col == cell.x) {
                    continue;
                }
                // Row is out of bounds
                if (row < 0 || row > this.grid.length - 1) {
                    continue;
                }
                // Col is out of bounds
                if (col < 0 || col > this.grid[0].length - 1) {
                    continue;
                }

                // Add neighboring cells inside bounds
                neighbors.push(this.grid[row][col])
            }
        }


        return neighbors;
    }

    /**
     * Gets a random cell in the grid. Used as root cell when generating the maze.
     **/
    get randomCell() {
        // Start at random cell
        const randomRow = getRandomNumberInInterval(0, this.grid.length - 1)
        const randomColumn = getRandomNumberInInterval(0, this.grid[0].length - 1)

        return this.grid[randomRow][randomColumn];
    }
}