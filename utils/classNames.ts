/**
 * This method takes a variable length string array and merges it to be one complete
 * class name string.
 * 
 * @param classes A variable length array of strings with Tailwind CSS styling
 * @returns a joined string representation of all classes.
 */
const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default classNames;