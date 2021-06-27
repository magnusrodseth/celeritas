export interface NavigationChild {
    name: string;
    href: string;
}

const navigation: { [title: string]: NavigationChild[] } = {
    "Basic Data Structures": [
        { name: "Arrays", href: "/data-structures/arrays" },
        { name: "Linked Lists", href: "/data-structures/linked-lists" },
        { name: "Stacks", href: "/data-structures/#" },
        { name: "Queues", href: "/data-structures/#" },
        { name: "Hash Tables", href: "/data-structures/#" },
    ],
    // "Advanced Data Structures": [
    //     { name: "Binary Trees", href: "/data-structures/#" },
    //     { name: "AVL Trees", href: "/data-structures/#" },
    //     { name: "Heaps", href: "/data-structures/#" },
    //     { name: "Tries", href: "/data-structures/#" },
    //     { name: "Graphs", href: "/data-structures/#" },
    //     { name: "Undirected Graphs", href: "/data-structures/#" },
    // ],
    // "Sorting Algorithms": [
    //     { name: "Bubble Sort", href: "/data-structures/#" },
    //     { name: "Selection Sort", href: "/data-structures/#" },
    // ]
}

export default navigation