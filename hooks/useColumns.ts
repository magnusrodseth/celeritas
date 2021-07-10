import { useState, useEffect } from "react"
import { PIXEL_WIDTH_SMALL, PIXEL_WIDTH_MEDIUM, PIXEL_WIDTH_LARGE } from "../constants";

/**
 * `useColumns` returns the number of columns to be used in the `<Grid/>` based on the current screen width.
 * Ensures responsiveness.
 **/
const useColumns = (width: number) => {
    const [columns, setColumns] = useState(0);

    useEffect(() => {
        // Determine size of responsive grid
        if (width < PIXEL_WIDTH_SMALL) {
            setColumns(10);
        } else if (width >= PIXEL_WIDTH_SMALL && width < PIXEL_WIDTH_MEDIUM) {
            setColumns(13);
        } else if (width >= PIXEL_WIDTH_MEDIUM && width < PIXEL_WIDTH_LARGE) {
            setColumns(18);
        } else if (width >= PIXEL_WIDTH_LARGE) {
            setColumns(28);
        }
    }, [width]);

    return columns;
}

export default useColumns