const getBarHeight = (value: number) => {
    // Even though the value is positive and very small, the div should still be visible
    if (value >= 0 && value <= 3) {
        return "3px";
    }

    return `${Math.abs(value * 3)}px`
}

export default getBarHeight