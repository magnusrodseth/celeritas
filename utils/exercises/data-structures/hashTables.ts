import FirstNonRepeatingCharacter from "../../../markdown/data-structures/hash-tables/FirstNonRepeatingCharacter";
import FirstRepeatedCharacter from "../../../markdown/data-structures/hash-tables/FirstRepeatedCharacter";
import HashTable from "../../../markdown/data-structures/hash-tables/HashTable";

const exercises = [
    {
        name: "First non-repeating character",
        description: `Finds the first non-repeating character in a string using a hash table.`,
        markdown: FirstNonRepeatingCharacter,
    },
    {
        name: "First repeated character",
        description: `Finds the first repeated character in a string using a set.`,
        markdown: FirstRepeatedCharacter,
    },
    {
        name: "Hash table from scratch",
        description: `
        An implementation of a hash table, with integer keys and string values.
        We use chaining for handling collisions.
        This means that instead of storing the key-value pairs inside each slot in the internal array,
        we store them in linked lists.

        This means that the internal array consists of _LinkedList instances,
        where each node is of type _Node.
        `,
        markdown: HashTable,
    }
];

export default exercises