export interface NavigationChild {
    name: string;
    href: string;
}

const navigation: { [title: string]: [NavigationChild] } = {
    "Data Structures": [
        { name: "Arrays", href: "/data-structures/array" }
    ]
}

export default navigation