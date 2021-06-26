export interface NavigationChild {
    name: string;
    href: string;
}

const navigation: { [title: string]: NavigationChild[] } = {
    "Data Structures": [
        { name: "Arrays", href: "/data-structures/array" },
        { name: "Linked Lists", href: "/data-structures/#" },
        { name: "Stacks", href: "/data-structures/#" },
        { name: "Queues", href: "/data-structures/#" },
        { name: "Hash Tables", href: "/data-structures/#" },
    ]
}

export default navigation