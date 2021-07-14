export interface NavigationChild {
    name: string;
    href: string;
}

const navigation: { [title: string]: NavigationChild[] } = {
    "Basic Data Structures": [
        { name: "Arrays", href: "/data-structures/arrays" },
        { name: "Linked Lists", href: "/data-structures/linked-lists" },
        { name: "Stacks", href: "/data-structures/stacks" },
        { name: "Queues", href: "/data-structures/queues" },
        { name: "Hash Tables", href: "/data-structures/hash-tables" },
    ],
    "Non-linear Data Structures": [
        { name: "Binary Trees", href: "/data-structures/binary-trees" },
        { name: "AVL Trees", href: "/data-structures/avl-trees" },
        // { name: "Heaps", href: "/data-structures/#" },
        // { name: "Tries", href: "/data-structures/#" },
        // { name: "Graphs", href: "/data-structures/#" },
        // { name: "Undirected Graphs", href: "/data-structures/#" },
    ],
    // "Sorting Algorithms": [
    //     { name: "Bubble Sort", href: "/sorting/bubble-sort" },
    //     // { name: "Selection Sort", href: "/sorting/#" },
    // ],
    "Pathfinding Algorithms": [
        { name: "Dijkstra's Algorithm", href: "/pathfinding/dijkstra" }
    ]
}

export default navigation