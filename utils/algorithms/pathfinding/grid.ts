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
    }

    generateGrid(): void {
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []
            for (let col = 0; col < this.columns; col++) {
                const cell = new Cell({ x: col, y: row })

                // Find and set neighbors per cell
                const neighbors = this.getCellNeighbors(cell)
                cell.neighbors = neighbors

                this.grid[row][col] = cell;
            }
        }
    }

    generateMaze(cell: Cell) {
        // The current cell has no unvisited neighbors
        if (cell.hasNoUnvisitedNeighbors()) {

            // Pop cells of the stack and check if they have unvisited neighbors
            while (this.visitedStack.length > 0) {
                const cell = this.visitedStack.pop();

                if (cell == undefined) {
                    return
                }

                for (const neighbor of cell.neighbors) {
                    if (!neighbor.isVisited) {
                        this.generateMaze(neighbor)
                    }
                }
            }
        }

        this.visit(cell)
        cell.isWall = true;

        for (const neighbor of cell.neighbors) {
            while (!neighbor.isVisited) {
                this.visit(neighbor)
                neighbor.isWall = true

                this.generateMaze(neighbor)
            }
        }
    }

    visit(cell: Cell) {
        cell.visit()

        // Add cell to stack to facilitate for backtracking later
        this.visitedStack.push(cell)
    }

    private getCellNeighbors(cell: Cell): Cell[] {
        const neighbors: Cell[] = []

        for (let row = cell.y - 1; row <= cell.y + 1; row++) {
            for (let col = cell.x - 1; col <= cell.x + 1; col++) {
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

                // console.log(`Row: ${row} Col: ${col}`)
                // Add neighboring cells inside bounds
                neighbors.push(this.grid[row][col])
            }
        }

        return neighbors;
    }

    get randomCell() {
        // Start at random cell
        const randomRow = getRandomNumberInInterval(0, this.grid.length - 1)
        const randomColumn = getRandomNumberInInterval(0, this.grid[0].length - 1)

        return this.grid[randomRow][randomColumn];
    }

    updateCell(cell: Cell) {
        this.grid[cell.y][cell.x] = cell;
    }
}