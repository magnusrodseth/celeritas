const getBarHeight = (value: number) => {
    // Even though the value is positive and very small, the div should still be visible
    if (value >= 0 && value <= 3) {
        return "3px";
    }
    // Values less than zero should point downwards
    else if (value < 0) {
        return `-${Math.abs(value * 2)}px`;
    }
    // Values greater than zero should point upwards
    else if (value > 0) {
        return `${value * 2}px`;
    }

    return "";
}

export default getBarHeight