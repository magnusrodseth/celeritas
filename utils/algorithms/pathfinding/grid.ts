import getRandomNumberInInterval from "../../getRandomNumberInInterval";
import Node from "./node";

export default class Grid {
    private _columns: number;
    private _rows: number;
    private _grid: Node[][];
    private _visitedStack: Node[] = [];
    private _startNode: Node | undefined
    private _endNode: Node | undefined

    constructor(columns: number, rows: number) {
        this._columns = columns;
        this._rows = rows;
        this._grid = []

        this.generateGrid();
        this.setNeighbors();

        // Set start and end cell
        this.startNode = this.randomNode
        this.endNode = this.randomNode
    }

    /**
     * Populates a two-dimensional array with `Node` objects.
     **/
    generateGrid(): void {
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []
            for (let col = 0; col < this.columns; col++) {
                const node = new Node({ x: col, y: row })
                this.grid[row][col] = node;
            }
        }
    }

    /**
     * Generates a maze with a guaranteed path from start to end node, using randomized depth-first search with
     *  recursive backtracking.
     * Pseudocode reference: https://en.wikipedia.org/wiki/Maze_generation_algorithm
     **/
    generateMaze(node: Node) {
        // Fill grid with only walls if it is completely void of any walls
        if (this.grid.every(row => row.every(node => !node.isWall))) {
            this.fillGridWithWalls();
        }

        // Don't overwrite start or end cell by a wall cell
        if (node.isStart || node.isEnd) {
            node.isWall = false;
        }

        // The current cell has no unvisited neighbors
        if (node.shouldBacktrack()) {

            // Pop cells of the stack and check if they have unvisited neighbors
            while (this.visitedStack.length > 0) {
                const node = this.visitedStack.pop();

                if (node == undefined) {
                    return
                }

                for (const neighbor of node.neighbors) {
                    if (!neighbor.isVisited && neighbor.isWall) {
                        if (!neighbor.isStart || !neighbor.isEnd) {
                            this.generateMaze(neighbor)
                        }
                    }
                }
            }
        }

        this.visit(node)
        node.isWall = false;


        for (const neighbor of node.neighbors) {
            // Don't overwrite start or end cell by a wall cell
            if (neighbor.isStart || neighbor.isEnd) {
                neighbor.isWall = false;
            }

            if (!neighbor.isVisited && neighbor.isAvailable(node)) {
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
    visit(node: Node) {
        node.visit()

        // Add cell to stack to facilitate for backtracking later
        this.visitedStack.push(node)
    }

    /**
     * Sets the neighbor cells of all cells.
     **/
    private setNeighbors() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                const node = this.grid[row][col];

                // Find and set neighbors per cell
                const neighbors = this.getCellNeighbors(node)
                node.neighbors = neighbors
            }
        }
    }

    /**
     * Gets all neighbors for a given cell.
     **/
    getCellNeighbors(node: Node): Node[] {
        const neighbors: Node[] = []

        for (let col = node.x - 1; col <= node.x + 1; col++) {
            for (let row = node.y - 1; row <= node.y + 1; row++) {
                // Skip diagonal neighbor cells above current cell
                if ((row == node.y - 1 && (col == node.x - 1 || col == node.x + 1))) {
                    continue;
                }
                // Skip diagonal neighbor cells below current cell
                if ((row == node.y + 1 && (col == node.x - 1 || col == node.x + 1))) {
                    continue;
                }
                // Currently visiting the cell. Do nothing.
                if (row == node.y && col == node.x) {
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
    get randomNode(): Node {
        // Start at random cell
        const randomRow = getRandomNumberInInterval(0, this.grid.length - 1)
        const randomColumn = getRandomNumberInInterval(0, this.grid[0].length - 1)

        return this.grid[randomRow][randomColumn];
    }

    set startNode(node: Node) {
        if (node) {
            // Ensure cell is not a wall
            while (node.isWall) {
                node = this.randomNode;
            }

            this._startNode = node;

            // Set start cell
            this._startNode.isStart = true;
        }
    }

    set endNode(node: Node) {
        if (node) {
            // Ensure cell is not a wall
            while (node.isWall) {
                node = this.randomNode;
            }

            this._endNode = node;

            // Set end cell
            this._endNode.isEnd = true;
        }
    }

    public get visitedStack(): Node[] {
        return this._visitedStack;
    }

    public set visitedStack(value: Node[]) {
        this._visitedStack = value;
    }

    public get grid(): Node[][] {
        return this._grid;
    }

    public set grid(grid: Node[][]) {
        this._grid = grid;
    }

    public get rows(): number {
        return this._rows;
    }

    public set rows(value: number) {
        this._rows = value;
    }

    public get columns(): number {
        return this._columns;
    }
    public set columns(value: number) {
        this._columns = value;
    }
}